import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useState } from "react";
import { Car, Ground, TheSun } from "./components";
import { Vector3 } from "three";

export default function MainScene() {
  const [carPosition, setCarPosition] = useState(new Vector3());
  return (
    <Suspense fallback={null}>
      <TheSun
        carPosition={carPosition}
        position={[0, 50, -50]}
        intensity={25}
        near={50}
        far={200}
        top={15}
        bottom={-15}
        left={-10}
        right={10}
      />
      <OrbitControls makeDefault rotateSpeed={0.5} />
      <PerspectiveCamera makeDefault position={[0, 400, -6.21]} fov={40} />
      <Car setCarPosition={setCarPosition} />
      <Ground />
    </Suspense>
  );
}

      {/* <spotLight intensity={10000} position={[10, 10, 10]} castShadow renderOrder={100} /> */}
      {/* <directionalLight intensity={9} position={[0, 12, 0]}
      target={targetObject}
      castShadow shadow-camera-right={150} shadow-camera-left={-125} shadow-camera-top={150} shadow-camera-bottom={-25} shadow-camera-far={100} shadow-camera-near={0.1} /> */}
      {/* <Environment files={"/sky.jpg"} /> */}