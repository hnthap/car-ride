import { GroupProps, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { CarA } from "../models";
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
  const translateDirection = new THREE.Vector3(); //transDir
  const pressedKeys = new Set<string>();
  let interval:NodeJS.Timeout;
  let W_Toggle = false;
  let S_Toggle = false;
  let isMoving = false;

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
      //console.log(
      //   "keypress",
      //   Array.from(pressedKeys)
      //     .map((key) => `'${key}'`)
      //     .join(", "),
      //   translateSpeedRef.current.toFixed(2),
      //   turnSpeedRef.current.toFixed(2)
      // );
      for (const pressed of pressedKeys) {
        switch (getMovesFromUppercaseKey(pressed)) {
          case "left":
            if(isMoving) turnSpeedRef.current = rotationSpeed;
            break;

          case "right":
            if(isMoving) turnSpeedRef.current = -rotationSpeed;
            break;

          case "speed up":
            {
              isMoving = true;
              console.log("W pressed")
              clearInterval(interval)
              //bộ đếm thời gian tăng tốc mỗi x giây
              if(!W_Toggle) {
                W_Toggle = true;
                setTimeout(()=>{
                  console.log("MoveSpeed is now: " + translateSpeedRef.current)
                  const temp = translateSpeedRef.current + translateAcceleration;
                    translateSpeedRef.current =
                    temp > maxTranslateSpeed ? maxTranslateSpeed : temp;
                    W_Toggle = false; 
                }, 500)
              }
            }
            break;

          case "slow down":
            {

              //bộ đếm thời gian tăng tốc mỗi x giây
              if(!S_Toggle) {
                S_Toggle = true;
                setTimeout(()=>{
                  const temp = translateSpeedRef.current + translateDeceleration;
                  translateSpeedRef.current =
                    temp < minTranslateSpeed ? minTranslateSpeed : temp;
                    S_Toggle = false; 
                }, 200)
              }
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
           interval = setInterval(() => {
            console.log("MoveSpeed is now: " + translateSpeedRef.current)
            if(translateSpeedRef.current > 0)
              {
                const temp = translateSpeedRef.current + translateDeceleration;
                translateSpeedRef.current =
                temp < 0 ? 0 : temp;
              }
            else{clearInterval(interval)}
          }, 500)
          break;
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
  return <CarA {...props} innerRef={carRef} />;
}
