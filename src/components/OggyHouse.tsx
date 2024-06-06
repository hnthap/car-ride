import { ObstacleProps } from "../util";
import Obstacle from "./Obstacle";

export default function OggyHouse(props: ObstacleProps) {
  return (
    <Obstacle
      {...props}
      colliderBoxScale={[3.2, 1.225, 1.38]}
      thingScale={[0.004, 0.004, 0.004]}
      thingPosition={[0.32, 0, 0.7]}
    />
  );
}