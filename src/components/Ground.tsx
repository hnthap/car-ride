import { usePlane } from "@react-three/cannon";
import { useRef } from "react";
import * as THREE from "three";
import Obstacle from "./Obstacle";

export default function Ground() {
  usePlane(() => ({
    type: "Static",
    rotation: [-0.5 * Math.PI, 0, 0],
  }), useRef(null));
  const housePositions: [number, number, number][] = [[0, 0, 0], [5, 0, 5], [3, 0, -3], [-4, 0, 4]];
  return (
    <>
      <mesh
        position={[0, 0, 0]}
        rotation-x={-0.5 * Math.PI}
        visible={true}
      >
        <planeGeometry args={[50, 50]} />
        <meshBasicMaterial
          opacity={0.325}
          transparent={true}
          color={"green"}
          side={THREE.DoubleSide}
        />
      </mesh>
      {housePositions.map((position, i) => {
        return <Obstacle position={position} key={i}/>
      })}
    </>
  );
}
