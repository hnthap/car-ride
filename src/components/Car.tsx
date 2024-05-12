import { GroupProps, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Bugatti, CarA, Lamborghini } from "../models";
import { AppConfig } from "../utils/config";

export default function Car(
  props: GroupProps & {
    config: AppConfig;
    skyRef: React.RefObject<THREE.Group<THREE.Object3DEventMap>>;
    turnSpeedRef: React.MutableRefObject<number>;
    translateSpeedRef: React.MutableRefObject<number>;
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
    turnSpeedRef,
    translateSpeedRef,
  } = props;

  const rotationSpeed = (rotationSpeedDeg * Math.PI) / 180;
  const CAMERA_ROTATION_AXIS = new THREE.Vector3(0, 1, 0);
  const CAMERA_Y_INSIDE_CAR = 2.25;
  const CAMERA_Y_OUTSIDE_CAR = 5;

  const isInsideCarRef = useRef(true);

  const carRef = useRef<THREE.Group>(null);
  const translateDirection = new THREE.Vector3();
  const translateDirection2 = new THREE.Vector3();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const wToggleRef = useRef(false);
  const sToggleRef = useRef(false);
  const isMovingRef = useRef(false);

  const keysRef = useRef({
    w: false,
    a: false,
    s: false,
    d: false,
    space: false,
  });
  let isPrint = true;
  let lastTranslateSpeed = NaN;
  let lastTurnSpeed = NaN;

  useFrame(({ camera }) => {
    isPrint = false;
    if (lastTranslateSpeed !== translateSpeedRef.current) {
      isPrint = true;
      lastTranslateSpeed = translateSpeedRef.current;
    }
    if (lastTurnSpeed !== turnSpeedRef.current) {
      isPrint = true;
      lastTurnSpeed = turnSpeedRef.current;
    }
    if (isPrint) {
      console.log(
        `⚡ ${translateSpeedRef.current.toFixed(2)} ↪️  ${
          turnSpeedRef.current > 0
            ? "right"
            : turnSpeedRef.current === 0
            ? "straight"
            : "left"
        }`
      );
    }
    if (turnSpeedRef.current === null || translateSpeedRef.current === null) {
      return;
    }
    if (!carRef.current) {
      return;
    }
    if (keysRef.current.a) {
      turnSpeedRef.current = isMovingRef.current ? rotationSpeed : 0;
    }
    if (keysRef.current.d) {
      turnSpeedRef.current = isMovingRef.current ? -rotationSpeed : 0;
    }
    if (keysRef.current.w) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (!wToggleRef.current) {
        wToggleRef.current = true;
        setTimeout(() => {
          const temp = translateSpeedRef.current + translateAcceleration;
          translateSpeedRef.current =
            temp > maxTranslateSpeed ? maxTranslateSpeed : temp;
          wToggleRef.current = false;
        }, 500);
      }
    }
    if (keysRef.current.s) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (!sToggleRef.current) {
        sToggleRef.current = true;
        setTimeout(() => {
          const temp = translateSpeedRef.current + translateDeceleration;
          translateSpeedRef.current =
            temp < minTranslateSpeed ? minTranslateSpeed : temp;
          sToggleRef.current = false;
        }, 200);
      }
    }
    if (keysRef.current.space) {
      if (translateSpeedRef.current !== 0) {
        setTimeout(() => {
          if (translateSpeedRef.current > 0) {
            const temp = translateSpeedRef.current - 2 * translateAcceleration;
            translateSpeedRef.current = temp < 0 ? 0 : temp;
          } else {
            const temp = translateSpeedRef.current - 2 * translateDeceleration;
            translateSpeedRef.current = temp > 0 ? 0 : temp;
          }
        }, 400);
      }
    }
    if (translateSpeedRef.current !== 0) {
      carRef.current.position.add(
        translateDirection.multiplyScalar(translateSpeedRef.current)
      );
      camera.position.copy(carRef.current.position);
      camera.getWorldDirection(translateDirection);
      translateDirection.setY(0);
      if (isInsideCarRef.current) {
        camera.position.y = CAMERA_Y_INSIDE_CAR;
      } else {
        camera.position.add(
          translateDirection2.copy(translateDirection).multiplyScalar(-10)
        );
        camera.position.y = CAMERA_Y_OUTSIDE_CAR;
      }
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
      const key = ev.key.toLowerCase();
      console.log(`keypress "${key}"`);
      switch (key) {
        case "a":
          keysRef.current.a = true;
          break;

        case "d":
          keysRef.current.d = true;
          break;

        case "w":
          keysRef.current.w = true;
          isMovingRef.current = true;
          break;

        case "s":
          keysRef.current.s = true;
          isMovingRef.current = true;
          break;

        case " ":
          keysRef.current.space = true;
          isMovingRef.current = false;
          break;

        case "enter":
          isInsideCarRef.current = !isInsideCarRef.current;
          break;

        default:
          break;
      }
    }
    function handleKeyUp(ev: KeyboardEvent) {
      ev.stopPropagation();
      ev.preventDefault();
      const key = ev.key.toLowerCase();
      console.log(`keyup    "${key}"`);
      switch (ev.key.toLowerCase()) {
        case "a":
          keysRef.current.a = false;
          turnSpeedRef.current = 0;
          break;

        case "d":
          keysRef.current.d = false;
          turnSpeedRef.current = 0;
          break;

        case "w":
          keysRef.current.w = false;
          intervalRef.current = setInterval(() => {
            if (translateSpeedRef.current > 0) {
              const temp = translateSpeedRef.current + translateDeceleration;
              translateSpeedRef.current = temp < 0 ? 0 : temp;
            } else {
              isMovingRef.current = false;
              if (intervalRef.current) clearInterval(intervalRef.current);
            }
          }, 500);
          break;

        case "s":
          keysRef.current.s = false;
          intervalRef.current = setInterval(() => {
            if (translateSpeedRef.current < 0) {
              const temp = translateSpeedRef.current + translateAcceleration;
              translateSpeedRef.current = temp > 0 ? 0 : temp;
            } else {
              isMovingRef.current = false;
              if (intervalRef.current) clearInterval(intervalRef.current);
            }
          }, 500);
          break;

        case " ":
          keysRef.current.space = false;
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
  if (car === "Bugatti") {
    return <Bugatti {...props} innerRef={carRef} />;
  }
  if (car === "CarA") {
    return <CarA {...props} innerRef={carRef} />;
  }
  if (car === "Lamborghini") {
    return <Lamborghini {...props} innerRef={carRef} />;
  }
  throw new Error(`invalid car: "${car}"`);
}
