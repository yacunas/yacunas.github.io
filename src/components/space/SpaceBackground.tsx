"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import BlackHole from "./BlackHole";

// WebGL canvas must only run on the client (no SSR / static prerender).
const Galaxy = dynamic(() => import("@/components/react-bits/Galaxy"), { ssr: false });

export default function SpaceBackground() {
  const bhRef = useRef<HTMLDivElement>(null);

  // Black hole floats slowly with scroll + mouse (very gentle parallax).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const fine = window.matchMedia("(pointer: fine)").matches;

    const target = { x: 0, y: 0, s: 0 };
    const cur = { x: 0, y: 0, s: 0 };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX / window.innerWidth - 0.5;
      target.y = e.clientY / window.innerHeight - 0.5;
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      target.s = max > 0 ? window.scrollY / max : 0;
    };
    if (fine) window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    let raf = 0;
    const tick = () => {
      cur.x += (target.x - cur.x) * 0.03;
      cur.y += (target.y - cur.y) * 0.03;
      cur.s += (target.s - cur.s) * 0.04;
      if (bhRef.current) {
        // drifts downward + sideways as you scroll; tiny mouse parallax
        const tx = cur.x * 28;
        const ty = cur.y * 28 + cur.s * 160;
        bhRef.current.style.transform = `translate3d(${tx.toFixed(1)}px, ${ty.toFixed(1)}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#030308]">
      {/* warm nebula wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 60rem at 18% 12%, rgba(180,83,9,0.16), transparent 60%)," +
            "radial-gradient(55rem 55rem at 82% 78%, rgba(234,88,12,0.12), transparent 60%)",
        }}
      />
      {/* Galaxy starfield (single WebGL canvas) */}
      <div className="absolute inset-0">
        <Galaxy
          density={0.9}
          hueShift={28}
          saturation={0.55}
          glowIntensity={0.35}
          starSpeed={0.18}
          speed={0.6}
          rotationSpeed={0.04}
          twinkleIntensity={0.4}
          mouseInteraction={false}
          mouseRepulsion={false}
        />
      </div>
      {/* floating, off-center black hole */}
      <div
        ref={bhRef}
        className="gpu absolute right-[-8%] top-[6%] h-[clamp(18rem,42vw,32rem)] w-[clamp(18rem,42vw,32rem)] opacity-60 sm:right-[2%]"
      >
        <BlackHole />
      </div>
      {/* vignette for text legibility */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(3,3,8,0.8)_100%)]" />
    </div>
  );
}
