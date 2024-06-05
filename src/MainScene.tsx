import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense, useState } from "react";
import { Vector3Array } from "./util";
import { Car, Ground, Landscape } from "./components";

export default function MainScene() {
  const [cameraPosition, setCameraPosition] = useState<Vector3Array>([
    6, 6, -6.21,
  ]);
  return (
    <Suspense fallback={null}>
      <Environment files={"/sky.jpg"} background={true} />
      <OrbitControls makeDefault rotateSpeed={0.5} />
      <PerspectiveCamera makeDefault position={cameraPosition} fov={40} />
      <Landscape />
      <Ground />
      <Car setCameraPosition={setCameraPosition} />
    </Suspense>
  );
}
