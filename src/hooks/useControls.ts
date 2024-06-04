import { PublicApi, RaycastVehiclePublicApi } from "@react-three/cannon";
import { useEffect, useState } from "react";

type KeyControls = {
  a: boolean;
  arrowdown: boolean;
  arrowleft: boolean;
  arrowright: boolean;
  arrowup: boolean;
  d: boolean;
  enter: boolean;
  r: boolean;
  s: boolean;
  w: boolean;
  " ": boolean;
  [key: string]: boolean;
}

 export default function UseControls(
  vehicleApi: RaycastVehiclePublicApi,
  chassisApi: PublicApi
): KeyControls {
  const [controls, setControls] = useState<KeyControls>({
    a: false,
    arrowdown: false,
    arrowleft: false,
    arrowright: false,
    arrowup: false,
    d: false,
    enter: false,
    r: false,
    s: false,
    w: false,
    " ": false,
  });

  useEffect(() => {
    function handleKeyDown(ev: KeyboardEvent) {
      setControls((controls) => ({
        ...controls,
        [ev.key.toLowerCase()]: true,
      }));
      console.log("keydown", ev.key.toLowerCase());
    }
    function handleKeyUp(ev: KeyboardEvent) {
      setControls((controls) => ({
        ...controls,
        [ev.key.toLowerCase()]: false,
      }));
      console.log("keyup", ev.key.toLowerCase());
    }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (!vehicleApi || !chassisApi) return;

    if (controls.w) {
      vehicleApi.applyEngineForce(150, 2);
      vehicleApi.applyEngineForce(150, 3);
      console.log("forward");
    } else if (controls.s) {
      vehicleApi.applyEngineForce(-150, 2);
      vehicleApi.applyEngineForce(-150, 3);
      console.log("backward");
    } else {
      vehicleApi.applyEngineForce(0, 2);
      vehicleApi.applyEngineForce(0, 3);
    }

    if (controls.a) {
      vehicleApi.setSteeringValue(0.35, 2);
      vehicleApi.setSteeringValue(0.35, 3);
      vehicleApi.setSteeringValue(-0.1, 0);
      vehicleApi.setSteeringValue(-0.1, 1);
      console.log("LEFT");
    } else if (controls.d) {
      vehicleApi.setSteeringValue(-0.35, 2);
      vehicleApi.setSteeringValue(-0.35, 3);
      vehicleApi.setSteeringValue(0.1, 0);
      vehicleApi.setSteeringValue(0.1, 1);
      console.log("RIGHT");
    } else {
      for (let i = 0; i < 4; i++) {
        vehicleApi.setSteeringValue(0, i);
      }
    }

    if (controls.arrowdown) {
      chassisApi.applyLocalImpulse([0, -5, 0], [0, 0, 1]);
    }
    if (controls.arrowup) {
      chassisApi.applyLocalImpulse([0, -5, 0], [0, 0, -1]);
    }
    if (controls.arrowleft) {
      chassisApi.applyLocalImpulse([0, -5, 0], [-0.5, 0, 0]);
    }
    if (controls.arrowright) {
      chassisApi.applyLocalImpulse([0, -5, 0], [0.5, 0, 0]);
    }

    if (controls.r) {
      chassisApi.position.set(-1.5, 0.5, 3);
      chassisApi.velocity.set(0, 0, 0);
      chassisApi.angularVelocity.set(0, 0, 0);
      chassisApi.rotation.set(0, 0, 0);
      console.log("RESET");
    }
  }, [controls, chassisApi, vehicleApi]);

  return controls;
}