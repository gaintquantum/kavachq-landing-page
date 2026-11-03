import {
  getRepositoryFileSkipReason,
  REPOSITORY_SCAN_CONFIG,
  scanRepository,
} from "./repositoryRiskScanner.js";

const GITHUB_API_VERSION = "2022-11-28";
const DOWNLOAD_CONCURRENCY = 6;

export function parseGitHubRepositoryUrl(input) {
  const value = typeof input === "string" ? input.trim() : "";
  if (!value) throw new Error("Enter a public GitHub repository URL.");

  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error("Enter a valid GitHub URL, such as https://github.com/owner/repository.git.");
  }

  if (url.protocol !== "https:" || !["github.com", "www.github.com"].includes(url.hostname.toLowerCase())) {
    throw new Error("Only public https://github.com repository URLs are supported.");
  }

  const segments = url.pathname.split("/").filter(Boolean);
  if (segments.length !== 2) throw new Error("Enter the repository root URL, not a file, issue, branch, or pull-request URL.");

  const owner = segments[0];
  const repository = segments[1].replace(/\.git$/i, "");
  if (!/^[A-Za-z0-9_.-]+$/.test(owner) || !/^[A-Za-z0-9_.-]+$/.test(repository)) {
    throw new Error("The GitHub owner or repository name contains unsupported characters.");
  }

  return {
    owner,
    repository,
    normalizedUrl: `https://github.com/${owner}/${repository}`,
  };
}

async function fetchGitHubJson(url, signal) {
  const response = await fetch(url, {
    signal,
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": GITHUB_API_VERSION,
    },
  });

  if (response.ok) return response.json();
  if (response.status === 404) throw new Error("Repository not found. Confirm that it exists and is public.");
  if (response.status === 403 || response.status === 429) throw new Error("GitHub's public API rate limit was reached. Wait before trying again.");
  throw new Error(`GitHub could not provide the repository (${response.status}). Try again later.`);
}

function createRemoteFile(path, size, content, repository) {
  return {
    name: path.split("/").at(-1),
    size,
    relativePath: `${repository}/${path}`,
    text: async () => content,
  };
}

async function runWithConcurrency(items, worker, concurrency = DOWNLOAD_CONCURRENCY) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function run() {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await worker(items[index], index);
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, run));
  return results;
}

/** Download supported public GitHub text files, then analyze them locally in the browser. */
export async function scanGitHubRepository(input, onProgress, signal) {
  const parsed = parseGitHubRepositoryUrl(input);
  const apiBase = `https://api.github.com/repos/${encodeURIComponent(parsed.owner)}/${encodeURIComponent(parsed.repository)}`;
  onProgress?.({ phase: "Reading repository details", completed: 0, total: 1, percent: 2 });

  const metadata = await fetchGitHubJson(apiBase, signal);
  const defaultBranch = metadata.default_branch;
  const tree = await fetchGitHubJson(`${apiBase}/git/trees/${encodeURIComponent(defaultBranch)}?recursive=1`, signal);
  const blobs = (tree.tree || []).filter((item) => item.type === "blob" && item.path).sort((a, b) => a.path.localeCompare(b.path));
  const skippedFiles = [];
  const candidates = [];
  let plannedSize = 0;

  for (const blob of blobs) {
    const file = {
      name: blob.path.split("/").at(-1),
      size: blob.size || 0,
      relativePath: `${parsed.repository}/${blob.path}`,
    };
    const reason = getRepositoryFileSkipReason(file);
    if (reason) {
      skippedFiles.push({ path: file.relativePath, reason });
      continue;
    }
    if (candidates.length >= REPOSITORY_SCAN_CONFIG.maxFiles) {
      skippedFiles.push({ path: file.relativePath, reason: "The 500-file scanning limit was reached" });
      continue;
    }
    if (plannedSize + file.size > REPOSITORY_SCAN_CONFIG.maxTotalSize) {
      skippedFiles.push({ path: file.relativePath, reason: "The 20 MB total readable-content limit was reached" });
      continue;
    }
    plannedSize += file.size;
    candidates.push(blob);
  }

  let downloaded = 0;
  const downloadedFiles = await runWithConcurrency(candidates, async (blob) => {
    const branch = encodeURIComponent(defaultBranch);
    const path = blob.path.split("/").map(encodeURIComponent).join("/");
    const rawUrl = `https://raw.githubusercontent.com/${encodeURIComponent(parsed.owner)}/${encodeURIComponent(parsed.repository)}/${branch}/${path}`;
    try {
      const response = await fetch(rawUrl, { signal });
      if (!response.ok) throw new Error();
      const content = await response.text();
      return createRemoteFile(blob.path, blob.size || new TextEncoder().encode(content).length, content, parsed.repository);
    } catch (error) {
      if (error?.name === "AbortError") throw error;
      skippedFiles.push({ path: `${parsed.repository}/${blob.path}`, reason: "GitHub could not provide this file" });
      return null;
    } finally {
      downloaded += 1;
      onProgress?.({
        phase: "Downloading supported source files",
        completed: downloaded,
        total: candidates.length,
        percent: candidates.length ? Math.round(5 + (downloaded / candidates.length) * 75) : 80,
      });
    }
  });

  const readableFiles = downloadedFiles.filter(Boolean);
  const analysis = await scanRepository(readableFiles, (completed, total) => {
    onProgress?.({
      phase: "Analyzing source patterns",
      completed,
      total,
      percent: total ? Math.round(80 + (completed / total) * 20) : 100,
    });
  });

  const allSkippedFiles = [...skippedFiles, ...analysis.skippedFiles].sort((a, b) => a.path.localeCompare(b.path));
  const treeNote = tree.truncated ? " GitHub truncated the repository tree, so some files were unavailable for analysis." : "";

  return {
    ...analysis,
    valid: analysis.scannedFileCount > 0,
    error: analysis.scannedFileCount > 0 ? null : "No supported public text or source-code files could be downloaded and analyzed.",
    repository: parsed,
    defaultBranch,
    selectedFileCount: blobs.length,
    consideredFileCount: candidates.length,
    skippedFileCount: allSkippedFiles.length,
    skippedFiles: allSkippedFiles,
    treeTruncated: Boolean(tree.truncated),
    limitations: `${analysis.limitations}${treeNote} Public GitHub availability, browser CORS behavior, and unauthenticated GitHub rate limits also apply.`,
  };
}
