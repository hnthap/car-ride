import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense } from "react";
import { Car, Ground, Landscape } from "./components";

export default function MainScene() {
  return (
    <Suspense fallback={null}>
      <Environment files={"/sky.jpg"} background={true} />
      <OrbitControls makeDefault rotateSpeed={0.5} />
      <PerspectiveCamera makeDefault position={[6, 6, -6.21]} fov={40} />
      <Car />
      <Ground Mesh/>
    </Suspense>
  );
}
