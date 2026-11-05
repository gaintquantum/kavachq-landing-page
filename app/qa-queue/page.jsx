import QueueSection from "@/components/sections/QueueSection";

// Internal QA page: keep it out of search results.
export const metadata = {
  title: "QA Queue",
  robots: { index: false, follow: false },
};

export default function QueueQA() {
  return <QueueSection />;
}
