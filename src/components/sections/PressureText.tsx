"use client";

import { useEffect, useRef } from "react";

/**
 * Text-pressure style interaction: each letter reacts to cursor proximity —
 * it scales up, gets heavier, glows hotter (amber → white), and is pulled
 * toward the cursor, like matter spiraling into a star-devouring black hole.
 */
export default function PressureText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const letters = useRef<(HTMLSpanElement | null)[]>([]);
  const mouse = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.active = true;
    };
    const onLeave = () => (mouse.current.active = false);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    const RADIUS = 190;
    let raf = 0;
    const tick = () => {
      const { x, y, active } = mouse.current;
      for (const el of letters.current) {
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dist = active ? Math.hypot(x - cx, y - cy) : RADIUS * 3;
        const t = Math.max(0, 1 - dist / RADIUS);
        const e = t * t * (3 - 2 * t); // smoothstep falloff

        const scale = 1 + e * 0.6;
        const weight = Math.round(400 + e * 500);
        const pull = e * 9;
        const dx = active && dist > 0.001 ? ((x - cx) / dist) * pull : 0;
        const dy = active && dist > 0.001 ? ((y - cy) / dist) * pull : 0;

        // amber (251,191,36) → white-hot (255,255,255)
        const rr = Math.round(251 + e * 4);
        const gg = Math.round(191 + e * 64);
        const bb = Math.round(36 + e * 219);

        el.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
        el.style.fontWeight = String(weight);
        el.style.color = `rgb(${rr}, ${gg}, ${bb})`;
        el.style.textShadow = e > 0.04 ? `0 0 ${e * 26}px rgba(249, 115, 22, ${e})` : "none";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  letters.current = [];

  return (
    <h1 className={className} aria-label={text}>
      {text.split("").map((c, i) => (
        <span
          key={i}
          ref={(el) => {
            letters.current[i] = el;
          }}
          aria-hidden
          style={{
            display: "inline-block",
            color: "#fbbf24",
            willChange: "transform",
          }}
        >
          {c === " " ? " " : c}
        </span>
      ))}
    </h1>
  );
}
