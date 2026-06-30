"use client";

import { useRef } from "react";
import { Canvas, useFrame, type RootState } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import type { Group } from "three";

function Starfield() {
  const group = useRef<Group>(null);

  useFrame((state: RootState, delta: number) => {
    if (!group.current) return;
    // slow drift
    group.current.rotation.y += delta * 0.012;
    group.current.rotation.x += delta * 0.004;
    // subtle parallax toward the pointer
    const px = state.pointer.x * 0.18;
    const py = state.pointer.y * 0.18;
    state.camera.position.x += (px - state.camera.position.x) * 0.03;
    state.camera.position.y += (py - state.camera.position.y) * 0.03;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      <Stars radius={120} depth={60} count={6000} factor={4} saturation={0} fade speed={0.6} />
      <Stars radius={80} depth={40} count={1500} factor={5} saturation={0.6} fade speed={1} />
    </group>
  );
}

export default function StarfieldScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1], fov: 75 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <Starfield />
    </Canvas>
  );
}
