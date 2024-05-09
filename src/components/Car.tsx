import { GroupProps, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { CarA } from "../models";
import { getMovesFromUppercaseKey } from "../utils/moves";

const MAX_TRANSLATE_SPEED = 10;
const MIN_TRANSLATE_SPEED = -MAX_TRANSLATE_SPEED;
const ROTATION_SPEED = (2 * Math.PI) / 180;
const TRANSLATE_ACCELERATION = 0.05;
const TRANSLATE_DECELERATION = -TRANSLATE_ACCELERATION;
const CAMERA_ROTATION_AXIS = new THREE.Vector3(0, 1, 0);

export default function Car(
  props: GroupProps & {
    skyRef: React.RefObject<THREE.Group<THREE.Object3DEventMap>>;
  }
) {
  const { skyRef } = props;
  const turnSpeedRef = useRef(0);
  const translateSpeedRef = useRef(0);
  const carRef = useRef<THREE.Group>(null);
  const translateDirection = new THREE.Vector3();

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
    const pressedKeys = new Set<string>();
    function handleKeyDown(ev: KeyboardEvent) {
      ev.stopPropagation();
      ev.preventDefault();
      pressedKeys.add(ev.key.toUpperCase());
      console.log(
        "keydown",
        Array.from(pressedKeys)
          .map((key) => `'${key}'`)
          .join(", "),
        "translate",
        translateSpeedRef.current.toFixed(2),
        "turn",
        turnSpeedRef.current.toFixed(2)
      );
      let temp: number;
      for (const pressed of pressedKeys) {
        switch (getMovesFromUppercaseKey(pressed)) {
          case "left":
            turnSpeedRef.current = ROTATION_SPEED;
            break;

          case "right":
            turnSpeedRef.current = -ROTATION_SPEED;
            break;

          case "speed up":
            temp = translateSpeedRef.current + TRANSLATE_ACCELERATION;
            translateSpeedRef.current =
              temp > MAX_TRANSLATE_SPEED ? MAX_TRANSLATE_SPEED : temp;
            break;

          case "slow down":
            temp = translateSpeedRef.current + TRANSLATE_DECELERATION;
            translateSpeedRef.current =
              temp < MIN_TRANSLATE_SPEED ? MIN_TRANSLATE_SPEED : temp;
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
      switch (getMovesFromUppercaseKey(key)) {
        case "left":
          turnSpeedRef.current = 0;
          break;

        case "right":
          turnSpeedRef.current = 0;
          break;

        case "speed up":
          translateSpeedRef.current = 0;
          break;

        case "slow down":
          translateSpeedRef.current = 0;
          break;

        case "brake":
          // Do nothing
          break;

        default:
          break;
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  });
  return <CarA {...props} innerRef={carRef} />;
}
