"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame, type RootState } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import type { Group } from "three";

function Starfield() {
  const far = useRef<Group>(null);
  const near = useRef<Group>(null);
  const scroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scroll.current = max > 0 ? window.scrollY / max : 0;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((state: RootState, delta: number) => {
    const dt = Math.min(delta, 0.05);
    const px = state.pointer.x * 0.12;
    const py = state.pointer.y * 0.12;
    // smooth camera parallax toward the cursor
    state.camera.position.x += (px - state.camera.position.x) * 0.04;
    state.camera.position.y += (py - state.camera.position.y) * 0.04;
    state.camera.lookAt(0, 0, 0);

    // depth parallax: near layer reacts more to scroll than far layer
    if (far.current) {
      far.current.rotation.y += dt * 0.008;
      far.current.position.y = scroll.current * 6;
    }
    if (near.current) {
      near.current.rotation.y -= dt * 0.014;
      near.current.position.y = scroll.current * 16;
    }
  });

  return (
    <>
      <group ref={far}>
        <Stars radius={130} depth={50} count={2600} factor={4} saturation={0} fade speed={0.4} />
      </group>
      <group ref={near}>
        <Stars radius={70} depth={30} count={900} factor={5} saturation={0.4} fade speed={0.8} />
      </group>
    </>
  );
}

export default function StarfieldScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1], fov: 75 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
    >
      <Starfield />
    </Canvas>
  );
}
