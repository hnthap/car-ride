import { Triplet, useBox, useRaycastVehicle } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls as VanillaOrbitControls } from "three-stdlib";
import { useControls, useWheels } from "../hooks";
import { WheellessCar } from "../models";
import Wheel from "./Wheel";

export default function Car({
  setCarPosition,
  orbit,
  startPosition,
  startRotationY,
}: {
  setCarPosition: React.Dispatch<React.SetStateAction<THREE.Vector3>>;
  orbit: React.RefObject<VanillaOrbitControls>;
  startPosition?: Triplet;
  startRotationY?: number;
}) {
  const thirdPersonRef = useRef(true);
  const width = 0.15;
  const height = 0.07;
  const front = 0.15;
  const wheelRadius = 0.05;
  const position: Triplet = startPosition ?? [6, 1, 7];
  const rotationY = startRotationY ?? 65 * Math.PI / 180;

  const [chassisBody, chassisApi] = useBox<THREE.Group>(
    () => ({
      allowSleep: false,
      args: [width, height, 2 * front],
      mass: 400,
      position,
      rotation: [0, rotationY, 0],
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
    if (!chassisBody.current) return;

    const position = new THREE.Vector3().setFromMatrixPosition(
      chassisBody.current.matrixWorld
    );
    setCarPosition(position.clone());

    if (!orbit.current) return;

    if (!thirdPersonRef.current) {
      const quaternion = new THREE.Quaternion().setFromRotationMatrix(
        chassisBody.current.matrixWorld
      );
      const worldDirection = new THREE.Vector3(0, 0, 1)
        .applyQuaternion(quaternion)
        .normalize()
        .add(new THREE.Vector3(0, 0.2, 0));

      camera.position.copy(position.clone().add(worldDirection));
      camera.lookAt(position);
    }
  });

  const { camera } = useThree();

  useEffect(() => {
    if (orbit.current && thirdPersonRef.current) {
      console.log(orbit.current.target.toArray().map((v) => v.toFixed(2)));
      camera.position
        .copy(orbit.current.target)
        .add(new THREE.Vector3(0, 100, 100));
      camera.updateMatrixWorld();
    }
  }, [camera, orbit, thirdPersonRef]);

  return (
    <group ref={vehicle}>
      <group ref={chassisBody}>
        <WheellessCar transparent opacity={0.3} />
      </group>
      <Wheel wheelRef={wheels[0]} radius={wheelRadius} position={position} />
      <Wheel wheelRef={wheels[1]} radius={wheelRadius} position={position} />
      <Wheel wheelRef={wheels[2]} radius={wheelRadius} position={position} />
      <Wheel wheelRef={wheels[3]} radius={wheelRadius} position={position} />
    </group>
  );
}
