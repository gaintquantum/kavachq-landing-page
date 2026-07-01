"use client";

import { useEffect, useState } from "react";

export default function AnimatedCounter({
  end = 100,
  suffix = "",
  duration = 1200,
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime = null;

    function update(timestamp) {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      setValue(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }, [end, duration]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}