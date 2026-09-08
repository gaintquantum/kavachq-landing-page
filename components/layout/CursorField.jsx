"use client";

import { useEffect, useRef } from "react";

export default function CursorField() {
  const frameRef = useRef(null);
  const positionRef = useRef({ x: 50, y: 45 });

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return undefined;

    const updatePosition = (event) => {
      positionRef.current = {
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      };

      if (frameRef.current) return;
      frameRef.current = requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          "--cursor-x",
          `${positionRef.current.x}%`,
        );
        document.documentElement.style.setProperty(
          "--cursor-y",
          `${positionRef.current.y}%`,
        );
        frameRef.current = null;
      });
    };

    window.addEventListener("pointermove", updatePosition, { passive: true });

    return () => {
      window.removeEventListener("pointermove", updatePosition);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return <div className="cursor-field" aria-hidden="true" />;
}
