import { useBox } from "@react-three/cannon";
import { useRef } from "react";
import { ObstacleProps, ThingProps } from "../util";

export default function Obstacle({
  position,
  rotation,
  colliderBoxScale,
  thingScale,
  thingPosition,
  Thing, 
}: ObstacleProps & ThingProps & { Thing: any}) {
  useBox(
    () => ({
      args: colliderBoxScale,
      position: position,
      rotation: [0, rotation, 0],
      type: "Static",
    }),
    useRef(null)
  );

  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <Thing scale={thingScale} position={thingPosition} />

      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={colliderBoxScale}></boxGeometry>
        <meshBasicMaterial
          transparent={true}
          opacity={0.5}
          color={"red"}
        ></meshBasicMaterial>
      </mesh>
    </group>
  );
}