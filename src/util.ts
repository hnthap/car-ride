import { Triplet } from "@react-three/cannon";

export type ObstacleProps = {
  position: Triplet;
  rotation?: number;
  debug?: React.RefObject<boolean>;
};

export interface ThingProps {
  colliderBoxScale: Triplet;
  thingScale: Triplet;
  thingPosition: Triplet;
}

export type LandmarkName =
  | "Arc de Triomphe"
  | "Eiffel Tower"
  | "Notre-Dame de Paris"
  | null;

export interface LandmarkInfo {
  title: string;
  image: string;
  content: string[];
  url: string;
}