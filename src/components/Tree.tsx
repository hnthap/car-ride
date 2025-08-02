import { Triplet } from "@react-three/cannon";
import Birch1 from "../models/Birch1";
import Obstacle, { ObstacleProps } from "./Obstacle";

export type TreeProps = ObstacleProps & {
  position: Triplet;
};

export default function Tree(props: TreeProps) {
  return (
    <Obstacle
      {...props}
      rotation={0}
      colliderBoxScale={[0.2, 1, 0.2]}
      thingScale={[0.4, 0.4, 0.4]}
      thingPosition={[0, 0, 0]}
      Thing={Birch1}
    />
  );
}
