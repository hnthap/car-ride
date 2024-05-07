import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Loader } from "../components";
import { CarA, Sky, SportCarRacingParis, VintageLantern } from "../models";
import { getMovesFromUppercaseKey } from "../utils/moves";

const MAX_TRANSLATE_SPEED = 10;
const TRANSLATE_ACCELERATION = 0.05;

function CanvasChange({
  carRef,
  skyRef,
  translateSpeed,
  setTranslateSpeed,
  setInCar
}: {
  carRef: React.RefObject<THREE.Group<THREE.Object3DEventMap>>;
  skyRef: React.RefObject<THREE.Group<THREE.Object3DEventMap>>;
  translateSpeed: number;
  setTranslateSpeed: React.Dispatch<React.SetStateAction<number>>;
  setInCar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { camera } = useThree();
  const pressedKeys = new Set<string>();
  const cameraY = camera.position.y;
  const rotationStep = Math.PI / 180;
  const translateDirection = new THREE.Vector3();
  const cameraRotationAxis = new THREE.Vector3(0, 1, 0);
  function updateCameraPosition(camera: THREE.Camera) {
    if (carRef.current) camera.position.copy(carRef.current.position);
    camera.getWorldDirection(translateDirection);
    translateDirection.setY(0);
    camera.position.y = cameraY;
    skyRef.current?.position.copy(camera.position);
  }
  function move() {
    if (translateSpeed !== 0) {
      carRef.current?.position.add(
        translateDirection.multiplyScalar(translateSpeed)
      );
      updateCameraPosition(camera);
    }
  }
  function turn(step: number) {
    carRef.current!.rotateOnWorldAxis(cameraRotationAxis, step);
    camera.rotateOnWorldAxis(cameraRotationAxis, step);
  }
  useFrame(() => {
    move();
  });
  useEffect(() => {
    function handleKeyDown(ev: KeyboardEvent) {
      ev.stopPropagation();
      ev.preventDefault();
      pressedKeys.add(ev.key.toUpperCase());
      console.log("[" + Array.from(pressedKeys).join(", ") + "]");
      for (const pressed of pressedKeys) {
        switch (getMovesFromUppercaseKey(pressed)) {
          case "left":
            turn(rotationStep);
            break;

          case "right":
            turn(-rotationStep);
            break;

          case "speed up":
            setTranslateSpeed((speed) => {
              const newSpeed = speed + TRANSLATE_ACCELERATION;
              return newSpeed > MAX_TRANSLATE_SPEED ? speed : newSpeed;
            });
            break;

          case "slow down":
            setTranslateSpeed((speed) => {
              const newSpeed = speed - TRANSLATE_ACCELERATION;
              return newSpeed < -MAX_TRANSLATE_SPEED ? speed : newSpeed;
            });
            break;

          case "brake":
            setTranslateSpeed(0);
            break;

          default:
            switch (pressed) {
              case "ENTER":
                setInCar((value) => !value);
                break;
            
              default:
                break;
            }
            break;
        }
      }
    }
    function handleKeyUp(ev: KeyboardEvent) {
      ev.stopPropagation();
      ev.preventDefault();
      pressedKeys.delete(ev.key.toUpperCase());
    }
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("keydown", handleKeyDown);
    };
  });
  return <></>;
}

export default function Home() {
  const skyRef = useRef<THREE.Group>(null);
  const carRef = useRef<THREE.Group>(null);
  const [isInCar, setInCar] = useState(true);
  const [translateSpeed, setTranslateSpeed] = useState(0);
  return (
    <section className="w-full h-screen relative">
      <Canvas
        shadows
        camera={{ position: [-12, 2.25, 15], near: 0.1, far: 1000 }}
        className="w-full h-screen bg-transparent"
      >
        <CanvasChange
          carRef={carRef}
          skyRef={skyRef}
          translateSpeed={translateSpeed}
          setTranslateSpeed={setTranslateSpeed}
          setInCar={setInCar}
        />
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={10} castShadow />
          <ambientLight intensity={0.5} />
          <Sky innerRef={skyRef} />
          <SportCarRacingParis receiveShadow />
          <CarA innerRef={carRef} receiveShadow castShadow />
          <VintageLantern />
        </Suspense>
      </Canvas>
      <p className="measurement-chart">
        {[
          "(press SPACE to stop)",
          "(press ENTER to move",
          " outside/inside the car)",
          `⚡ Speed: ${translateSpeed.toFixed(1)}/${MAX_TRANSLATE_SPEED}`,
          `🚗 Where: ${isInCar ? "In car" : "Outside"}`,
        ]
          .map((value) => <>{value}</>)
          .reduce((prev, curr) => (
            <>
              {prev}
              <br />
              {curr}
            </>
          ))}
      </p>
      <img className="control-keys" src="/controls.png" alt="control keys" />
    </section>
  );
}
