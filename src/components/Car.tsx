import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { CarA } from "../models";
import { useRef } from "react";
import * as THREE from "three";
import { Vector3Array } from "../util";
import { useControls, useWheels } from "../hooks";

type CarProps = {
  setCameraPosition: React.Dispatch<React.SetStateAction<Vector3Array>>;
};

export default function Car({ setCameraPosition }: CarProps) {
  const position: Vector3Array = [-6, 0, 7];
  const width = 0.15;
  const height = 0.07;
  const front = 0.15;
  const wheelRadius = 0.05;

  const [chassisBody, chassisApi] = useBox<THREE.Group>(
    () => ({
      allowSleep: false,
      args: [width, height, 2 * front],
      mass: 150,
      position,
    }),
    useRef(null)
  );

  const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

  const [vehicle, vehicleApi] = useRaycastVehicle<THREE.Group>(
    () => ({ chassisBody, wheelInfos, wheels }),
    useRef(null)
  );

  useControls(vehicleApi, chassisApi);

  return (
    <group ref={vehicle}>
      <group ref={chassisBody}>
        <CarA position={position} />
      </group>
    </group>
  );
}
