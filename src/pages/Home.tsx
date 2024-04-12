import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Loader } from "../components";
import { Box, Plane } from "../meshes";
import * as THREE from "three";

function CanvasChange() {
  const { camera } = useThree();
  const [isFullSpeed, setIsFullSpeed] = useState(false);
  useEffect(() => {
    const ROTATION_AXIS = new THREE.Vector3(0, 1, 0);
    const ROTATION_STEP = Math.PI / 80;
    const pressed = new Set<string>();
    const direction = new THREE.Vector3();
    function move(sign: 1 | -1) {
      camera.getWorldDirection(direction);
      direction.setY(0);
      camera.position.add(
        direction.multiplyScalar(sign * (isFullSpeed ? 3 : 1))
      );
    }
    function moveForward() {
      move(1);
    }
    function moveBackward() {
      move(-1);
    }
    function turnLeft() {
      camera.rotateOnWorldAxis(ROTATION_AXIS, ROTATION_STEP);
    }
    function turnRight() {
      camera.rotateOnWorldAxis(ROTATION_AXIS, -ROTATION_STEP);
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
      if (!pressed.has(key)) {
        pressed.add(key);
      }
      if (key in keyActions) {
        keyActions[key]();
      } else if (key === "SHIFT") {
        setIsFullSpeed(true);
      }
    }
    function handleKeyUp(ev: KeyboardEvent) {
      if (pressed.size !== 0) {
        console.log(
          "KEYUP",
          Array.from(pressed).sort().join(" "),
          `-- ${pressed.size} in total`
        );
        const key = ev.key.toUpperCase();
        if (key === "SHIFT") {
          setIsFullSpeed(false);
        }
        pressed.delete(key);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [camera, setIsFullSpeed, isFullSpeed]);
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
        </Suspense>
      </Canvas>
      <img className="control-keys" src="/controls.png" alt="control keys" />
    </section>
  );
}
