"use client";
import { useEffect, useRef } from "react";

const TAU = Math.PI * 2;
const CYAN = "125,211,252";
const BLUE = "56,152,255";
const ORANGE = "255,138,61";
// Three electron orbits, each a flattened circle rotated 60° apart around the view axis.
const ORBITS = [0, 1, 2].map((i) => ({ tilt: 0.34, spin: (i * TAU) / 3, speed: 0.9 + i * 0.18, phase: i * 2.1 }));
const DUST_RINGS = [{ r: 1.45, tilt: 0.22, spin: -0.32, count: 240, speed: 0.05 }, { r: 1.8, tilt: 0.16, spin: 0.28, count: 300, speed: -0.035 }];

const rand = (a, b) => a + Math.random() * (b - a);

function makeSprite(rgb) {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.22, `rgba(${rgb},0.9)`);
  grad.addColorStop(0.5, `rgba(${rgb},0.25)`);
  grad.addColorStop(1, `rgba(${rgb},0)`);
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return c;
}

function createScene(small) {
  const k = small ? 0.5 : 1;
  return {
    stars: Array.from({ length: Math.round(220 * k) }, () => ({ x: Math.random(), y: Math.random(), s: rand(0.4, 1.6), p: rand(0, TAU), d: rand(0.2, 1) })),
    rays: Array.from({ length: Math.round(40 * k) }, () => ({ a: rand(0, TAU), len: rand(0.7, 2.1), w: rand(0.6, 2.2), speed: rand(0.6, 2.2), p: rand(0, TAU) })),
    dust: DUST_RINGS.map((ring) => ({ ...ring, dots: Array.from({ length: Math.round(ring.count * k) }, () => ({ a: rand(0, TAU), j: rand(-0.07, 0.07), y: rand(-0.05, 0.05), s: rand(0.8, 1.9) })) })),
    nodes: Array.from({ length: Math.round(46 * k) }, () => {
      const u = rand(-1, 1), a = rand(0, TAU), r = Math.sqrt(1 - u * u);
      return { x: r * Math.cos(a), y: u, z: r * Math.sin(a), orange: Math.random() < 0.45, p: rand(0, TAU) };
    }),
    photons: [],
    nextPhoton: 0,
  };
}

// Photon emitted from the nucleus along a random 3D direction, in units of the atom radius.
function createPhoton(t) {
  const u = rand(-1, 1), a = rand(0, TAU), r = Math.sqrt(1 - u * u);
  return { dir: [r * Math.cos(a), u, r * Math.sin(a)], born: t, life: rand(1.6, 2.6), reach: rand(1.3, 2), orange: Math.random() < 0.6 };
}
const PULSE_PERIOD = 2.6;

export default function AtomBackground({ mouseRef }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sprites = { cyan: makeSprite(CYAN), orange: makeSprite(ORANGE) };
    let w = 0, h = 0, cx = 0, cy = 0, R = 0, scene = null, frame = 0, visible = true;
    const view = { yaw: 0, pitch: 0 };

    function project(x, y, z) {
      const cyw = Math.cos(view.yaw), syw = Math.sin(view.yaw), cp = Math.cos(view.pitch), sp = Math.sin(view.pitch);
      const x1 = x * cyw + z * syw, z1 = -x * syw + z * cyw;
      const y2 = y * cp - z1 * sp, z2 = y * sp + z1 * cp;
      const s = 4 / (4 + z2);
      return [cx + x1 * R * s, cy + y2 * R * s, z2, s];
    }
    // Point on a unit circle in the horizontal plane, tilted towards the viewer then spun around the view axis.
    function orbitPoint(a, r, tilt, spin, yOff = 0) {
      const x = Math.cos(a) * r, z0 = Math.sin(a) * r;
      const y = yOff * Math.cos(tilt) - z0 * Math.sin(tilt), z = yOff * Math.sin(tilt) + z0 * Math.cos(tilt);
      return project(x * Math.cos(spin) - y * Math.sin(spin), x * Math.sin(spin) + y * Math.cos(spin), z);
    }
    const depthAlpha = (z) => Math.min(1, Math.max(0.15, 0.6 - z * 0.45));

    function resize() {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, w < 768 ? 1.5 : 1.75);
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const desktop = w >= 1024;
      cx = desktop ? w * 0.72 : w * 0.5;
      cy = desktop ? h * 0.52 : h * 0.5;
      R = desktop ? Math.min(w * 0.19, h * 0.3) : Math.min(w * 0.4, h * 0.26);
      if (!scene) scene = createScene(w < 768);
    }

    function draw(t) {
      const mouse = mouseRef?.current ?? { x: 0, y: 0 };
      view.yaw += ((reduced ? 0.4 : t * 0.12) + mouse.x * 0.35 - view.yaw) * 0.06;
      view.pitch += (-0.12 - mouse.y * 0.25 - view.pitch) * 0.06;
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, w, h);

      for (const s of scene.stars) {
        const a = 0.25 + 0.55 * (0.5 + 0.5 * Math.sin(t * 1.4 * s.d + s.p));
        ctx.fillStyle = `rgba(200,230,255,${a * s.d})`;
        ctx.fillRect(s.x * w + mouse.x * 8 * s.d, s.y * h - mouse.y * 8 * s.d, s.s, s.s);
      }
      ctx.globalCompositeOperation = "lighter";

      // Light rays bursting from the nucleus
      ctx.lineCap = "round";
      for (const r of scene.rays) {
        const a = r.a + t * 0.03, len = R * r.len * (0.85 + 0.15 * Math.sin(t * r.speed + r.p));
        const alpha = 0.06 + 0.16 * (0.5 + 0.5 * Math.sin(t * r.speed * 1.3 + r.p));
        const ex = cx + Math.cos(a) * len, ey = cy + Math.sin(a) * len;
        const g = ctx.createLinearGradient(cx, cy, ex, ey);
        g.addColorStop(0, `rgba(${CYAN},${alpha * 2})`);
        g.addColorStop(1, `rgba(${BLUE},0)`);
        ctx.strokeStyle = g; ctx.lineWidth = r.w;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(ex, ey); ctx.stroke();
      }

      // Vertical energy beam through the core
      const beam = ctx.createLinearGradient(0, cy - R * 2.2, 0, cy + R * 2.2);
      beam.addColorStop(0, `rgba(${CYAN},0)`);
      beam.addColorStop(0.5, `rgba(${CYAN},0.32)`);
      beam.addColorStop(1, `rgba(${CYAN},0)`);
      ctx.fillStyle = beam;
      ctx.fillRect(cx - R * 0.025, cy - R * 2.2, R * 0.05, R * 4.4);
      ctx.fillRect(cx - R * 0.008, cy - R * 2.2, R * 0.016, R * 4.4);

      // Nucleus glow
      const pulse = 1 + 0.06 * Math.sin(t * 2.2);
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.8 * pulse);
      glow.addColorStop(0, "rgba(255,255,255,0.95)");
      glow.addColorStop(0.1, `rgba(${CYAN},0.7)`);
      glow.addColorStop(0.35, `rgba(${BLUE},0.22)`);
      glow.addColorStop(1, `rgba(${BLUE},0)`);
      ctx.fillStyle = glow;
      ctx.beginPath(); ctx.arc(cx, cy, R * 0.8 * pulse, 0, TAU); ctx.fill();

      // Particle dust rings
      for (const ring of scene.dust) {
        for (const d of ring.dots) {
          const [x, y, z] = orbitPoint(d.a + t * ring.speed, ring.r + d.j, ring.tilt, ring.spin, d.y);
          ctx.fillStyle = `rgba(${CYAN},${depthAlpha(z) * 0.55})`;
          ctx.fillRect(x, y, d.s, d.s);
        }
      }

      // Wireframe core sphere with glowing nodes
      const rs = 0.3, sphereSpin = t * 0.45;
      const spherePoint = (x, y, z) => project((x * Math.cos(sphereSpin) + z * Math.sin(sphereSpin)) * rs, y * rs, (-x * Math.sin(sphereSpin) + z * Math.cos(sphereSpin)) * rs);
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = `rgba(${CYAN},0.28)`;
      ctx.beginPath();
      for (let i = 1; i < 6; i++) {
        const lat = -Math.PI / 2 + (i * Math.PI) / 6, ry = Math.sin(lat), rr = Math.cos(lat);
        for (let j = 0; j <= 36; j++) { const a = (j / 36) * TAU, [x, y] = spherePoint(Math.cos(a) * rr, ry, Math.sin(a) * rr); j ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
      }
      for (let i = 0; i < 8; i++) {
        const lon = (i / 8) * TAU;
        for (let j = 0; j <= 24; j++) { const lat = -Math.PI / 2 + (j / 24) * Math.PI, [x, y] = spherePoint(Math.cos(lat) * Math.cos(lon), Math.sin(lat), Math.cos(lat) * Math.sin(lon)); j ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
      }
      ctx.stroke();
      for (const n of scene.nodes) {
        const [x, y, z] = spherePoint(n.x, n.y, n.z), size = R * (n.orange ? 0.09 : 0.07);
        ctx.globalAlpha = depthAlpha(z) * (0.55 + 0.45 * Math.sin(t * 3 + n.p));
        ctx.drawImage(n.orange ? sprites.orange : sprites.cyan, x - size / 2, y - size / 2, size, size);
      }
      ctx.globalAlpha = 1;

      // Electron orbits, brighter in front
      const SEG = 120, CHUNK = 6;
      for (const o of ORBITS) {
        const pts = Array.from({ length: SEG + 1 }, (_, i) => orbitPoint((i / SEG) * TAU, 1, o.tilt, o.spin));
        for (let i = 0; i < SEG; i += CHUNK) {
          const a = depthAlpha(pts[i + CHUNK / 2][2]);
          ctx.beginPath(); ctx.moveTo(pts[i][0], pts[i][1]);
          for (let j = 1; j <= CHUNK; j++) ctx.lineTo(pts[i + j][0], pts[i + j][1]);
          ctx.strokeStyle = `rgba(${BLUE},${a * 0.16})`; ctx.lineWidth = 7; ctx.stroke();
          ctx.strokeStyle = `rgba(${CYAN},${a * 0.85})`; ctx.lineWidth = 1.6; ctx.stroke();
        }
        // Electron with a fading comet tail
        const head = o.phase + t * o.speed;
        for (let i = 0; i < 26; i++) {
          const [x1, y1] = orbitPoint(head - (i / 26) * 1.2, 1, o.tilt, o.spin);
          const [x2, y2] = orbitPoint(head - ((i + 1) / 26) * 1.2, 1, o.tilt, o.spin);
          ctx.strokeStyle = `rgba(220,245,255,${(1 - i / 26) * 0.9})`; ctx.lineWidth = 3.2 * (1 - i / 26) + 0.4;
          ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
        }
        const [ex, ey, , es] = orbitPoint(head, 1, o.tilt, o.spin), size = R * 0.32 * es;
        ctx.drawImage(sprites.cyan, ex - size / 2, ey - size / 2, size, size);
      }

      // Energy shockwaves rippling out from the nucleus
      for (let k = 0; k < 2; k++) {
        const f = ((t + k * PULSE_PERIOD * 0.5) % PULSE_PERIOD) / PULSE_PERIOD;
        if (reduced && k) break;
        const r = 0.3 + f * 1.7, fade = Math.sin(f * Math.PI) * (1 - f);
        ctx.beginPath();
        for (let i = 0; i <= 90; i++) { const [x, y] = orbitPoint((i / 90) * TAU, r, 0.3, -0.12); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
        ctx.strokeStyle = `rgba(${BLUE},${fade * 0.35})`; ctx.lineWidth = 10 * (1 - f) + 2; ctx.stroke();
        ctx.strokeStyle = `rgba(${CYAN},${fade * 0.9})`; ctx.lineWidth = 1.2; ctx.stroke();
      }

      // Photons drifting outwards with soft tails
      if (!reduced && t > scene.nextPhoton && scene.photons.length < (w < 768 ? 5 : 10)) { scene.photons.push(createPhoton(t)); scene.nextPhoton = t + rand(0.2, 0.5); }
      scene.photons = scene.photons.filter((p) => t - p.born < p.life);
      for (const p of scene.photons) {
        const f = (t - p.born) / p.life, ease = 1 - (1 - f) ** 3, alpha = Math.sin(f * Math.PI);
        const at = (d) => project(p.dir[0] * d, p.dir[1] * d, p.dir[2] * d);
        const dist = 0.2 + ease * p.reach, [x, y, , ps] = at(dist), [tx, ty] = at(Math.max(0.2, dist - 0.35));
        const rgb = p.orange ? ORANGE : CYAN, tail = ctx.createLinearGradient(tx, ty, x, y);
        tail.addColorStop(0, `rgba(${rgb},0)`);
        tail.addColorStop(1, `rgba(${rgb},${alpha * 0.8})`);
        ctx.strokeStyle = tail; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(x, y); ctx.stroke();
        const size = R * 0.16 * ps;
        ctx.globalAlpha = alpha;
        ctx.drawImage(p.orange ? sprites.orange : sprites.cyan, x - size / 2, y - size / 2, size, size);
        ctx.globalAlpha = 1;
      }
    }

    const start = performance.now();
    function loop(now) {
      frame = requestAnimationFrame(loop);
      if (visible) draw((now - start) / 1000);
    }
    resize();
    if (reduced) draw(6); else frame = requestAnimationFrame(loop);
    const ro = new ResizeObserver(() => { resize(); if (reduced) draw(6); });
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);
    return () => { cancelAnimationFrame(frame); ro.disconnect(); io.disconnect(); };
  }, [mouseRef]);
  return <canvas ref={canvasRef} className="absolute inset-0 size-full" aria-hidden="true" />;
}
