import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Car, Ground } from "./components";
import { OrbitControls as VanillaOrbitControls } from "three-stdlib";

export default function MainScene() {
  const orbitControlsRef = useRef<VanillaOrbitControls>(null);
  return (
    <Suspense fallback={null}>
      <Environment files={"/sky.jpg"} background={true} />
      <OrbitControls makeDefault rotateSpeed={0.5} ref={orbitControlsRef} />
      <PerspectiveCamera makeDefault position={[6, 6, -6.21]} fov={40} />
      <Car />
      <Ground />
    </Suspense>
  );
}
