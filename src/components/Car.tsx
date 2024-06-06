import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { WheellessCar } from "../models";
import { useRef } from "react";
import * as THREE from "three";
import { useControls, useWheels } from "../hooks";
import { useFrame } from "@react-three/fiber";
import DemoWheel from "./DemoWheel";

export default function Car() {
  const thirdPersonRef = useRef(false);
  const position: [number, number, number] = [-6, 0, 7];
  const width = 0.15;
  const height = 0.07;
  const front = 0.15;
  const wheelRadius = 0.05;

  const [chassisBody, chassisApi] = useBox<THREE.Group>(
    () => ({
      allowSleep: false,
      args: [width, height, 2 * front],
      mass: 100,
      position,
    }),
    useRef(null)
  );

  const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

  const [vehicle, vehicleApi] = useRaycastVehicle<THREE.Group>(
    () => ({ chassisBody, wheelInfos, wheels }),
    useRef(null)
  );

  useControls(vehicleApi, chassisApi, thirdPersonRef);

  useFrame(({ camera }) => {
    if (
      !chassisBody.current ||
      !thirdPersonRef ||
      thirdPersonRef.current
    )
      return;

    const position = new THREE.Vector3().setFromMatrixPosition(
      chassisBody.current.matrixWorld
    );
    const quaternion = new THREE.Quaternion().setFromRotationMatrix(
      chassisBody.current.matrixWorld
    );
    const worldDirection = new THREE.Vector3(0, 0, 1)
      .applyQuaternion(quaternion)
      .normalize()
      .add(new THREE.Vector3(0, 0.2, 0));

    camera.position.copy(position.clone().add(worldDirection));
    camera.lookAt(position);
  })

  return (
    <group ref={vehicle}>
      <group ref={chassisBody}>
        <WheellessCar transparent opacity={0.3} position={position} />
      </group>
      <DemoWheel wheelRef={wheels[0]} radius={wheelRadius} />
      <DemoWheel wheelRef={wheels[1]} radius={wheelRadius} />
      <DemoWheel wheelRef={wheels[2]} radius={wheelRadius} />
      <DemoWheel wheelRef={wheels[3]} radius={wheelRadius} />
    </group>
  );
}
