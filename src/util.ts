export type ObstacleProps = {
  position: [number, number, number];
  rotation: number;
};

export interface ThingProps {
  colliderBoxScale: [number, number, number];
  thingScale: [number, number, number];
  thingPosition: [number, number, number];
}
