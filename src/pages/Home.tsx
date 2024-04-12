import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import * as THREE from "three";
import { Loader } from "../components";
import { CarA, Sky, SportCarRacingParis, VintageLantern } from "../models";

function CanvasChange() {
  const { camera } = useThree();
  useEffect(() => {
    const rotationAxis = new THREE.Vector3(0, 1, 0);
    const rotationStep = Math.PI / 50;
    const translateSpeed = 0.3;
    const translateDirection = new THREE.Vector3();
    function move(speed: number) {
      camera.getWorldDirection(translateDirection);
      translateDirection.setY(0);
      camera.position.add(translateDirection.multiplyScalar(speed));
    }
    function moveForward() {
      move(translateSpeed);
    }
    function moveBackward() {
      move(-translateSpeed);
    }
    function turnLeft() {
      camera.rotateOnWorldAxis(rotationAxis, rotationStep);
    }
    function turnRight() {
      camera.rotateOnWorldAxis(rotationAxis, -rotationStep);
    }
    const keyActions: Record<string, () => void> = {
      A: turnLeft,
      ARROWLEFT: turnLeft,
      D: turnRight,
      ARROWRIGHT: turnRight,
      W: moveForward,
      ARROWUP: moveForward,
      S: moveBackward,
      ARROWDOWN: moveBackward,
    };
    function handleKeyDown(ev: KeyboardEvent) {
      const key = ev.key.toUpperCase();
      if (key in keyActions) {
        ev.stopPropagation();
        ev.preventDefault();
        keyActions[key]();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [camera]);
  return <></>;
}

export default function Home() {
  return (
    <section className="w-full h-screen relative">
      <Canvas
        shadows
        camera={{ position: [-12, 2.25, 15], near: 0.1, far: 1000 }}
        className="w-full h-screen bg-transparent"
      >
        <CanvasChange />
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} castShadow />
          <ambientLight intensity={0.5} />
          <Sky scale={10} />
          <SportCarRacingParis scale={40} />
          {/* <Plane scale={50} rotation={[-Math.PI / 2, 0, 0]} receiveShadow /> */}
          {/* <Box position={[-4.2, 0.5, 7]} receiveShadow castShadow />
          <Box position={[-6.2, 0.5, 7]} receiveShadow castShadow /> */}
          <CarA name="car-a" scale={0.02} />
          <VintageLantern scale={0.02} />
        </Suspense>
      </Canvas>
      <img className="control-keys" src="/controls.png" alt="control keys" />
    </section>
  );
}
