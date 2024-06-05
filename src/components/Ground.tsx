import { usePlane } from "@react-three/cannon";
import { useRef } from "react";
import * as THREE from "three";

export default function Ground() {
  usePlane(() => ({
    type: "Static",
    rotation: [-0.5 * Math.PI, 0, 0],
  }), useRef(null));
  return (
    <>
      <mesh
        position={[0, -0.01, 0]}
        rotation-x={-0.5 * Math.PI}
        visible={false}
      >
        <planeGeometry args={[50, 50]} />
        <meshBasicMaterial
          opacity={0.325}
          transparent={true}
          color={"green"}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}
