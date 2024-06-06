import { Triplet } from "@react-three/cannon";

export type ObstacleProps = {
  position: Triplet;
  rotation: number;
};

export interface ThingProps {
  colliderBoxScale: Triplet;
  thingScale: Triplet;
  thingPosition: Triplet;
}
