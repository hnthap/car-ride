import { useBox } from "@react-three/cannon";
import { Oggy } from "../models";
import { useRef } from "react";
import { ObstacleProps, ThingProps } from "../util";

export default function Obstacle({
  position,
  rotation,
  colliderBoxScale,
  thingScale,
  thingPosition,
}: ObstacleProps & ThingProps) {
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
      <Oggy scale={thingScale} position={thingPosition} />

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