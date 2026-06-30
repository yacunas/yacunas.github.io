"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import BlackHole from "./BlackHole";

// WebGL canvas must only run on the client (no SSR / static prerender).
const StarfieldScene = dynamic(() => import("./StarfieldScene"), { ssr: false });

export default function SpaceBackground() {
  const bhRef = useRef<HTMLDivElement>(null);

  // Mouse-driven parallax for the sticky black hole.
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      target.x = e.clientX / window.innerWidth - 0.5;
      target.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      cur.x += (target.x - cur.x) * 0.06;
      cur.y += (target.y - cur.y) * 0.06;
      if (bhRef.current) {
        bhRef.current.style.transform = `translate3d(${cur.x * 46}px, ${cur.y * 46}px, 0) scale(${1 + Math.abs(cur.x) * 0.04})`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#030308]">
      {/* cheap static gradient nebula (no blur => no scroll repaint cost) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 60rem at 15% 10%, rgba(180,83,9,0.18), transparent 60%)," +
            "radial-gradient(55rem 55rem at 85% 20%, rgba(234,88,12,0.14), transparent 60%)," +
            "radial-gradient(70rem 70rem at 50% 115%, rgba(120,53,15,0.22), transparent 55%)",
        }}
      />
      {/* interactive starfield (mouse + scroll parallax) */}
      <div className="absolute inset-0">
        <StarfieldScene />
      </div>
      {/* sticky, mouse-parallaxed black hole */}
      <div ref={bhRef} className="absolute inset-0 gpu">
        <BlackHole className="opacity-70" />
      </div>
      {/* vignette for text legibility */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(3,3,8,0.78)_100%)]" />
    </div>
  );
}
