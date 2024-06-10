import { Triplet } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { DirectionalLight, Vector3 } from "three";

export default function TheSun({
  intensity,
  left,
  right,
  top,
  bottom,
  near,
  far,
  position,
  carPosition,
}: {
  carPosition: Vector3;
  intensity: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
  near: number;
  far: number;
  position: Triplet;
}) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[5, 15, 10]} />
      <meshBasicMaterial color={"gold"} transparent opacity={0.8} />
      <directionalLight
        position={[0, 0, 0]}
        intensity={intensity}
        castShadow
        shadow-camera-right={right}
        shadow-camera-left={left}
        shadow-camera-top={top}
        shadow-camera-bottom={bottom}
        shadow-camera-far={far}
        shadow-camera-near={near}
      />
      <ambientLight intensity={0.5} />
    </mesh>
  );
}
