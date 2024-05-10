import { GroupProps, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Bugatti, CarA, Lamborghini } from "../models";
import { AppConfig } from "../utils/config";
import { getMovesFromUppercaseKey } from "../utils/moves";

export default function Car(
  props: GroupProps & {
    config: AppConfig;
    skyRef: React.RefObject<THREE.Group<THREE.Object3DEventMap>>;
  }
) {
  const {
    config: {
      car,
      maxTranslateSpeed,
      minTranslateSpeed,
      rotationSpeedDeg,
      translateAcceleration,
      translateDeceleration,
    },
    skyRef,
  } = props;

  const rotationSpeed = (rotationSpeedDeg * Math.PI) / 180;
  const CAMERA_ROTATION_AXIS = new THREE.Vector3(0, 1, 0);

  const turnSpeedRef = useRef(0);
  const translateSpeedRef = useRef(0);
  const carRef = useRef<THREE.Group>(null);
  const translateDirection = new THREE.Vector3();
  const pressedKeys = new Set<string>();

  useFrame(({ camera }) => {
    if (!carRef.current) {
      return;
    }
    if (translateSpeedRef.current !== 0) {
      const y = camera.position.y;
      carRef.current.position.add(
        translateDirection.multiplyScalar(translateSpeedRef.current)
      );
      camera.position.copy(carRef.current.position);
      camera.getWorldDirection(translateDirection);
      translateDirection.setY(0);
      camera.position.y = y;
      skyRef.current?.position.copy(camera.position);
    }
    if (turnSpeedRef.current !== 0) {
      carRef.current.rotateOnWorldAxis(
        CAMERA_ROTATION_AXIS,
        turnSpeedRef.current
      );
      camera.rotateOnWorldAxis(CAMERA_ROTATION_AXIS, turnSpeedRef.current);
    }
  });

  useEffect(() => {
    function handleKeyPress(ev: KeyboardEvent) {
      ev.stopPropagation();
      ev.preventDefault();
      pressedKeys.add(ev.key.toUpperCase());
      console.log(
        "keypress",
        Array.from(pressedKeys)
          .map((key) => `'${key}'`)
          .join(", "),
        translateSpeedRef.current.toFixed(2),
        turnSpeedRef.current.toFixed(2)
      );
      for (const pressed of pressedKeys) {
        switch (getMovesFromUppercaseKey(pressed)) {
          case "left":
            turnSpeedRef.current = rotationSpeed;
            break;

          case "right":
            turnSpeedRef.current = -rotationSpeed;
            break;

          case "speed up":
            {
              const temp = translateSpeedRef.current + translateAcceleration;
              translateSpeedRef.current =
                temp > maxTranslateSpeed ? maxTranslateSpeed : temp;
            }
            break;

          case "slow down":
            {
              const temp = translateSpeedRef.current + translateDeceleration;
              translateSpeedRef.current =
                temp < minTranslateSpeed ? minTranslateSpeed : temp;
            }
            break;

          case "brake":
            translateSpeedRef.current = 0;
            break;

          default:
            break;
        }
      }
    }
    function handleKeyUp(ev: KeyboardEvent) {
      ev.stopPropagation();
      ev.preventDefault();
      const key = ev.key.toUpperCase();
      pressedKeys.delete(key);
      console.log(
        "keyup",
        key,
        "so",
        Array.from(pressedKeys)
          .map((key) => `'${key}'`)
          .join(", ")
      );
      switch (getMovesFromUppercaseKey(key)) {
        case "left":
        case "right":
          turnSpeedRef.current = 0;
          break;

        case "speed up":
        case "slow down":
          translateSpeedRef.current = 0;
          break;

        default:
          break;
      }
    }
    document.addEventListener("keypress", handleKeyPress);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
      document.removeEventListener("keyup", handleKeyUp);
    };
  });
  switch (car) {
    case "Bugatti":
      return <Bugatti {...props} innerRef={carRef} />;

    case "CarA":
      return <CarA {...props} innerRef={carRef} />;

    case "Lamborghini":
      return <Lamborghini {...props} innerRef={carRef} />;
  
    default:
      break;
  }
  throw new Error(`invalid car: ${car}`);
}
