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
};

// const STEERING_VALUE_FRONT = 0.1;
const STEERING_VALUE_BACK = 0.2;

export default function useControls(
  vehicleApi: RaycastVehiclePublicApi,
  chassisApi: PublicApi,
  thirdPersonRef: React.MutableRefObject<boolean>
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
  const [ctrlKey, setCtrlKey] = useState(false);

  useEffect(() => {
    function handleKeyDown(ev: KeyboardEvent) {
      setControls((controls) => ({
        ...controls,
        [ev.key.toLowerCase()]: true,
      }));
      setCtrlKey(ev.ctrlKey);
      console.log("keydown", ev.key.toLowerCase());
    }
    function handleKeyUp(ev: KeyboardEvent) {
      setControls((controls) => ({
        ...controls,
        [ev.key.toLowerCase()]: false,
      }));
      setCtrlKey(!ev.ctrlKey);
      console.log(
        "keyup",
        ev.key.toLowerCase(),
        controls[ev.key.toLowerCase()]
      );
    }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [controls]);

  useEffect(() => {
    if (!vehicleApi || !chassisApi || ctrlKey) return;

    if (controls.a) {
      vehicleApi.setSteeringValue(STEERING_VALUE_BACK, 2);
      vehicleApi.setSteeringValue(STEERING_VALUE_BACK, 3);
      // vehicleApi.setSteeringValue(-STEERING_VALUE_FRONT, 0);
      // vehicleApi.setSteeringValue(-STEERING_VALUE_FRONT, 1);
    } else if (controls.d) {
      vehicleApi.setSteeringValue(-STEERING_VALUE_BACK, 2);
      vehicleApi.setSteeringValue(-STEERING_VALUE_BACK, 3);
      // vehicleApi.setSteeringValue(STEERING_VALUE_FRONT, 0);
      // vehicleApi.setSteeringValue(STEERING_VALUE_FRONT, 1);
    } else {
      for (let i = 2; i < 4; i++) {
        vehicleApi.setSteeringValue(0, i);
      }
    }

    if (controls.w) {
      vehicleApi.applyEngineForce(150, 2);
      vehicleApi.applyEngineForce(150, 3);
      for (let i = 0; i < 4; i++) {
        vehicleApi.setBrake(0, i);
      }
    } else if (controls.s) {
      vehicleApi.applyEngineForce(-150, 2);
      vehicleApi.applyEngineForce(-150, 3);
      for (let i = 0; i < 4; i++) {
        vehicleApi.setBrake(0, i);
      }
    } else if (controls[" "]) {
      vehicleApi.setBrake(1, 2);
      vehicleApi.setBrake(1, 3);
      for (let i = 0; i < 4; ++i) {
        vehicleApi.applyEngineForce(0, i);
      }
    } else {
      vehicleApi.applyEngineForce(0, 2);
      vehicleApi.applyEngineForce(0, 3);
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
    }

    if (controls.enter) {
      thirdPersonRef.current = !thirdPersonRef.current;
    }
  }, [controls, chassisApi, vehicleApi, thirdPersonRef, ctrlKey]);

  return controls;
}
