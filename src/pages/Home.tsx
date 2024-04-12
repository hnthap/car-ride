import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { Loader } from "../components";
import { Box, Plane } from "../meshes";
import * as THREE from "three";
import { CarA } from "../models";

function CanvasChange() {
  const { camera } = useThree();
  useEffect(() => {
    const rotationAxis = new THREE.Vector3(0, 1, 0);
    const rotationStep = Math.PI / 80;
    const translateSpeed = 0.2;
    const translateDirection = new THREE.Vector3();
    function move(sign: 1 | -1) {
      camera.getWorldDirection(translateDirection);
      translateDirection.setY(0);
      camera.position.add(
        translateDirection.multiplyScalar(sign * translateSpeed)
      );
    }
    function moveForward() {
      move(1);
    }
    function moveBackward() {
      move(-1);
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
        camera={{ position: [-3, 2, 4], near: 0.1, far: 1000 }}
        className={`w-full h-screen bg-transparent`}
      >
        <CanvasChange />
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} castShadow />
          <ambientLight intensity={0.5} />
          <Plane scale={50} rotation={[-Math.PI / 2, 0, 0]} receiveShadow />
          <Box position={[1.2, 0.5, 0]} receiveShadow castShadow />
          <Box position={[-1.2, 0.5, 0]} receiveShadow castShadow />
          <CarA />
        </Suspense>
      </Canvas>
      <img className="control-keys" src="/controls.png" alt="control keys" />
    </section>
  );
}
