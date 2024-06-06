import Birch1 from "../models/Birch1";
import { ObstacleProps } from "../util";
import Obstacle from "./Obstacle";

export default function BirchTreeComp(props: {position: [number, number, number]; name: "1" | "2" | "3"}) {
  if (props.name === "1")
    return (
      <Obstacle rotation={0}
        {...props}
        colliderBoxScale={[0.2, 1, 0.2]}
        thingScale={[0.4, 0.4, 0.4]}
        thingPosition={[0, 0, 0]}
        Thing={Birch1}
      />
    );  
  //if (props.name === "2")
  //if (props.name === "3")
  throw new Error("aweijqwpoqjpew");
  
}