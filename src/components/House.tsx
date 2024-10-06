import { ModernHouse } from "../models";
import Obstacle, { ObstacleProps } from "./Obstacle";

export type HouseProps = ObstacleProps;

export default function House(props: HouseProps) {
  return (
    <Obstacle
      {...props}
      colliderBoxScale={[1, 1, 2.3]}
      thingScale={[0.00015, 0.00015, 0.00015]}
      thingPosition={[-0.55, 0.1, 0.1]}
      Thing={ModernHouse}
    />
  );
}
