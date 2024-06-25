import { PublicApi, RaycastVehiclePublicApi } from "@react-three/cannon";
import { useEffect, useState } from "react";
import { START_CAR_POSITION, START_CAR_ROTATION_Y } from "../utils";

const STEERING_VALUE_BACK = 0.05;
const ENGINE_FORCE_BACK = 150;
const BRAKE_BACK = 10;

type Keys = Record<string, boolean>;
const ALLOWED_KEYS = new Set(["a", "d", "r", "s", "w", " ", "enter"]);

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

  const [keys, setKeys] = useState<Keys>({});

  useEffect(() => {
    function handleKeyDown(ev: KeyboardEvent) {
      if (ev.ctrlKey) return;
      const key = ev.key.toLowerCase();
      if (!ALLOWED_KEYS.has(key)) return;
      setKeys((keys) => ({ ...keys, [key]: true }));
      ev.preventDefault();
    }

    function handleKeyUp(ev: KeyboardEvent) {
      if (ev.ctrlKey) return;
      const key = ev.key.toLowerCase();
      if (!ALLOWED_KEYS.has(key)) return;
      setKeys((keys) => ({ ...keys, [key]: false }));
      ev.preventDefault();
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  });

  useEffect(() => {
    if (keys["a"] && keys["d"]) {
      goStraight();
    } else if (keys["a"]) {
      turnLeft();
    } else if (keys["d"]) {
      turnRight();
    } else {
      goStraight();
    }

    if (keys["w"] && keys["s"]) {
      deaccelerate();
    } else if (keys["w"]) {
      accelerateForward();
    } else if (keys["s"]) {
      accelerateBackward();
    } else {
      deaccelerate();
    }

    if (keys[" "]) {
      brake();
    } else {
      ease();
    }

    if (keys["r"]) {
      resetPlace();
    }

    if (keys["enter"]) {
      switchPerson();
    }
  }, [keys]);
}
