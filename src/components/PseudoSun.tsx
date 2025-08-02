import { Triplet } from "@react-three/cannon";
import { Object3D } from "three";

export interface PseudoSunProps {
  position: Triplet; // position of the pseudo sun in the world space. This position is used to calculate the direction of the sun. The actual position of the sun is not used in the rendering.
  intensity: number; // intensity
}

export function PseudoSun({ position, intensity }: PseudoSunProps) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[5, 15, 10]} />
      <meshBasicMaterial color={"gold"} transparent opacity={0.8} />
      <ambientLight intensity={1} />
      <directionalLight
        castShadow
        intensity={intensity}
        position={[0, 0, 0]}
        shadow-camera-right={100}
        shadow-camera-left={-100}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
        shadow-camera-far={800}
        shadow-camera-near={200}
        shadow-camera-target={new Object3D()}
      />
    </mesh>
  );
}
