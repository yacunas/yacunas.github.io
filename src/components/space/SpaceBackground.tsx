"use client";

import dynamic from "next/dynamic";

// WebGL canvas must only run on the client (no SSR / static prerender).
const StarfieldScene = dynamic(() => import("./StarfieldScene"), { ssr: false });

export default function SpaceBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#05060f]">
      {/* nebula glows */}
      <div className="absolute -left-40 top-[-10%] h-[40rem] w-[40rem] rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="absolute right-[-10%] top-1/3 h-[35rem] w-[35rem] rounded-full bg-cyan-500/15 blur-[120px]" />
      <div className="absolute bottom-[-15%] left-1/3 h-[38rem] w-[38rem] rounded-full bg-violet-600/15 blur-[130px]" />
      {/* interactive starfield */}
      <div className="absolute inset-0">
        <StarfieldScene />
      </div>
      {/* vignette for text legibility */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,6,15,0.7)_100%)]" />
    </div>
  );
}
