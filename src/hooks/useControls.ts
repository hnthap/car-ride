import { PublicApi, RaycastVehiclePublicApi } from "@react-three/cannon";
import { useEffect } from "react";
import { START_CAR_POSITION, START_CAR_ROTATION_Y } from "../utils";

// const STEERING_VALUE_FRONT = 0.1;
const STEERING_VALUE_BACK = 0.1;
const ENGINE_FORCE_BACK = 150;
const BRAKE_BACK = 10;

export default function useControls(
  vehicleApi: RaycastVehiclePublicApi,
  chassisApi: PublicApi,
  setThirdPerson: React.Dispatch<React.SetStateAction<boolean>>
) {
  function turnLeft() {
    vehicleApi.setSteeringValue(STEERING_VALUE_BACK, 2);
    vehicleApi.setSteeringValue(STEERING_VALUE_BACK, 3);
  }
  function turnRight() {
    vehicleApi.setSteeringValue(-STEERING_VALUE_BACK, 2);
    vehicleApi.setSteeringValue(-STEERING_VALUE_BACK, 3);
  }
  function goStraight() {
    vehicleApi.setSteeringValue(0, 2);
    vehicleApi.setSteeringValue(0, 3);
  }
  function accelerateForward() {
    vehicleApi.applyEngineForce(ENGINE_FORCE_BACK, 2);
    vehicleApi.applyEngineForce(ENGINE_FORCE_BACK, 3);
  }
  function accelerateBackward() {
    vehicleApi.applyEngineForce(-ENGINE_FORCE_BACK, 2);
    vehicleApi.applyEngineForce(-ENGINE_FORCE_BACK, 3);
  }
  function deaccelerate() {
    vehicleApi.applyEngineForce(0, 2);
    vehicleApi.applyEngineForce(0, 3);
  }
  function brake() {
    vehicleApi.setBrake(BRAKE_BACK, 2);
    vehicleApi.setBrake(BRAKE_BACK, 3);
  }
  function ease() {
    vehicleApi.setBrake(0, 2);
    vehicleApi.setBrake(0, 3);
  }
  function resetPlace() {
    chassisApi.position.set(...START_CAR_POSITION);
    chassisApi.velocity.set(0, 0, 0);
    chassisApi.angularVelocity.set(0, 0, 0);
    chassisApi.rotation.set(0, START_CAR_ROTATION_Y, 0);
  }
  function switchPerson() {
    setThirdPerson((third) => !third);
  }
  useEffect(() => {

    function handleKeyDown(ev: KeyboardEvent) {
      const key = ev.key.toLowerCase();

      if (key === "a") turnLeft();
      else if (key === "d") turnRight();
      else if (key === "w") accelerateForward();
      else if (key === "s") accelerateBackward();
      else if (key === " ") brake();
      else if (key === "r") resetPlace();
      else if (key === "enter") switchPerson();
    }

    function handleKeyUp(ev: KeyboardEvent) {
      const key = ev.key.toLowerCase();

      if (key === "a" || key === "d") goStraight();
      else if (key === "w" || key === "s") deaccelerate();
      else if (key === " ") ease();
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  });
}
