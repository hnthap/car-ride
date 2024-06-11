import { Triplet, useBox } from "@react-three/cannon";
import { useRef } from "react";
import { ObstacleProps, ThingProps } from "../util";

export default function Obstacle({
  position,
  rotation,
  colliderBoxScale,
  thingScale,
  thingPosition,
  Thing,
  debug,
}: ObstacleProps &
  ThingProps & {
    Thing: (props: { scale: Triplet; position: Triplet }) => JSX.Element;
  }) {
  useBox(
    () => ({
      args: colliderBoxScale,
      position: position,
      rotation: [0, rotation ?? 0, 0],
      type: "Static",
    }),
    useRef(null)
  );
  return (
    <group position={position} rotation={[0, rotation ?? 0, 0]}>
      <Thing scale={thingScale} position={thingPosition} />

      {(debug?.current ?? false) && (
        <mesh position={[0, 0.6, 0]} visible={true}>
          <boxGeometry args={colliderBoxScale} />
          <meshPhongMaterial transparent={true} opacity={0.5} color={"red"} />
        </mesh>
      )}
    </group>
  );
}