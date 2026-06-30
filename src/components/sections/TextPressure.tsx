"use client";

import { Fragment, useEffect, useRef } from "react";

/**
 * Name effect: cursor proximity drives variable-font width + weight (text
 * pressure) AND a size enlargement, while a glossy light gradient beams across
 * the letters on hover. Words wrap on small screens.
 */
export default function TextPressure({
  text,
  className = "",
  minWeight = 540,
  maxWeight = 900,
  minWidth = 70,
  maxWidth = 130,
  scaleBoost = 0.4,
}: {
  text: string;
  className?: string;
  minWeight?: number;
  maxWeight?: number;
  minWidth?: number;
  maxWidth?: number;
  scaleBoost?: number;
}) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const spans = useRef<(HTMLSpanElement | null)[]>([]);
  const cursor = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMouse = (e: MouseEvent) => {
      cursor.current.x = e.clientX;
      cursor.current.y = e.clientY;
    };
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) {
        cursor.current.x = t.clientX;
        cursor.current.y = t.clientY;
      }
    };

    if (titleRef.current) {
      const r = titleRef.current.getBoundingClientRect();
      mouse.current.x = r.left + r.width / 2;
      mouse.current.y = r.top + r.height / 2;
      cursor.current.x = mouse.current.x;
      cursor.current.y = mouse.current.y;
    }

    window.addEventListener("mousemove", onMouse);
    window.addEventListener("touchmove", onTouch, { passive: true });

    const attr = (d: number, maxD: number, minV: number, maxV: number) => {
      const v = maxV - Math.abs((maxV * d) / maxD);
      return Math.max(minV, v + minV);
    };

    let raf = 0;
    const animate = () => {
      mouse.current.x += (cursor.current.x - mouse.current.x) / 15;
      mouse.current.y += (cursor.current.y - mouse.current.y) / 15;

      const title = titleRef.current;
      if (title) {
        const maxDist = title.getBoundingClientRect().width / 2;
        for (const span of spans.current) {
          if (!span) continue;
          const r = span.getBoundingClientRect();
          const dx = mouse.current.x - (r.x + r.width / 2);
          const dy = mouse.current.y - (r.y + r.height / 2);
          const d = Math.sqrt(dx * dx + dy * dy);
          const wght = Math.floor(attr(d, maxDist, minWeight, maxWeight));
          const wdth = Math.floor(attr(d, maxDist, minWidth, maxWidth));
          span.style.fontVariationSettings = `"wght" ${wght}, "wdth" ${wdth}`;
          // tight proximity (only letters near the cursor react), sharpened
          const prox = Math.max(0, 1 - d / 150);
          const t = prox * prox;
          span.style.transform = `scale(${(1 + t * scaleBoost).toFixed(3)})`;
          // glossy heat: only the near-cursor letters brighten + glow
          span.style.filter =
            t > 0.02
              ? `brightness(${(1 + t * 1.1).toFixed(2)}) drop-shadow(0 0 ${(t * 18).toFixed(1)}px rgba(255, 180, 90, ${(t * 0.9).toFixed(2)}))`
              : "";
        }
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
    };
  }, [minWeight, maxWeight, minWidth, maxWidth, scaleBoost]);

  spans.current = [];
  const words = text.split(" ");
  let idx = -1;

  return (
    <h1 ref={titleRef} aria-label={text} className={`name-fx ${className}`}>
      {words.map((word, wi) => (
        <Fragment key={wi}>
          <span className="tp-word">
            {word.split("").map((ch) => {
              idx += 1;
              const i = idx;
              return (
                <span
                  key={i}
                  ref={(el) => {
                    spans.current[i] = el;
                  }}
                  aria-hidden
                  className="tp-char"
                >
                  {ch}
                </span>
              );
            })}
          </span>
          {wi < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </h1>
  );
}
