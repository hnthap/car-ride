import { Triplet } from "@react-three/cannon";
import { Object3D } from "three";

export function PseudoSun({ position }: { position: Triplet }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[5, 15, 10]} />
      <meshBasicMaterial color={"gold"} transparent opacity={0.8} />
      <ambientLight intensity={1} />
      <directionalLight
        castShadow
        intensity={10}
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
