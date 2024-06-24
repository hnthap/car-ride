import { Triplet } from "@react-three/cannon";
import { GroupProps } from "@react-three/fiber";
import * as THREE from "three";
import { WheelA } from "../models";

interface WheelProps extends GroupProps {
  radius: number;
  wheelRef: React.Ref<THREE.Group>;
  position?: Triplet;
}

export default function Wheel(props: WheelProps) {
  const { radius, wheelRef } = props;
  return (
    <group {...props} ref={wheelRef}>
      <mesh rotation={[0, 0, 0.5 * Math.PI]}>
        <cylinderGeometry args={[radius, radius, 0.015, 16]} />
        <meshNormalMaterial transparent opacity={0.25} />
      </mesh>
      <WheelA
        scale={[0.002, 0.002, 0.002]}
        position={[-0.123, 0.14255, -0.05]}
        rotation={[0, Math.PI / 2, Math.PI / 2]}
      />
    </group>
  );
}
