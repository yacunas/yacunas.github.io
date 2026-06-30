"use client";

import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const init = useMemo(
    () => async (engine: Engine) => {
      await loadSlim(engine);
    },
    []
  );

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 55, density: { enable: true } },
        color: { value: ["#a78bfa", "#f472b6", "#38bdf8", "#facc15"] },
        links: {
          enable: true,
          color: "#94a3b8",
          distance: 140,
          opacity: 0.25,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.1,
          direction: "none",
          outModes: { default: "out" },
        },
        opacity: { value: 0.5 },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          grab: { distance: 170, links: { opacity: 0.5 } },
          push: { quantity: 3 },
        },
      },
    }),
    []
  );

  return (
    <ParticlesProvider init={init}>
      <Particles
        id="tsparticles"
        options={options}
        className="absolute inset-0 -z-10 h-full w-full"
      />
    </ParticlesProvider>
  );
}
