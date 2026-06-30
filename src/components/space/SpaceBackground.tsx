"use client";

import dynamic from "next/dynamic";

// WebGL canvas must only run on the client (no SSR / static prerender).
const StarfieldScene = dynamic(() => import("./StarfieldScene"), { ssr: false });

export default function SpaceBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#030308]">
      {/* cheap static gradient nebula (no blur => no scroll repaint cost) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 60rem at 15% 10%, rgba(37,99,235,0.16), transparent 60%)," +
            "radial-gradient(55rem 55rem at 85% 25%, rgba(8,145,178,0.14), transparent 60%)," +
            "radial-gradient(70rem 70rem at 50% 110%, rgba(30,58,138,0.18), transparent 55%)",
        }}
      />
      {/* interactive starfield (mouse + scroll parallax) */}
      <div className="absolute inset-0">
        <StarfieldScene />
      </div>
      {/* vignette for text legibility */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(3,3,8,0.75)_100%)]" />
    </div>
  );
}
