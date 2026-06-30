"use client";

import { Fragment, useEffect, useRef } from "react";

/**
 * Text-pressure effect (ported from React Bits — no extra dependency).
 * Each letter's variable-font width + weight react to cursor distance, so the
 * type "enlarges/narrows" depending on where the cursor points. The amber
 * gradient fill is retained at all times. Words wrap on small screens.
 */
export default function TextPressure({
  text,
  className = "",
  minWeight = 540,
  maxWeight = 900,
  minWidth = 70,
  maxWidth = 130,
}: {
  text: string;
  className?: string;
  minWeight?: number;
  maxWeight?: number;
  minWidth?: number;
  maxWidth?: number;
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
  }, [minWeight, maxWeight, minWidth, maxWidth]);

  spans.current = [];
  const words = text.split(" ");
  let idx = -1;

  return (
    <h1 ref={titleRef} aria-label={text} className={`tp-title ${className}`}>
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
