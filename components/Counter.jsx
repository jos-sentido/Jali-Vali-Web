"use client";

import { useEffect, useRef, useState } from "react";

// Anima un número de 0 → target al entrar en viewport.
// Respeta prefers-reduced-motion (muestra el valor final sin animar).
export default function Counter({ value, prefix = "", suffix = "", duration = 1400, className = "" }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
            setDisplay(value * eased);
            if (p < 1) requestAnimationFrame(tick);
            else setDisplay(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  const rounded = Math.round(display);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {rounded.toLocaleString("es-MX")}
      {suffix}
    </span>
  );
}
