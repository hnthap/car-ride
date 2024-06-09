import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Car, Ground } from "./components";
import { OrbitControls as VanillaOrbitControls } from "three-stdlib";
import * as THREE from "three"
import TheSun from "./components/TheSun";

export default function MainScene() {
  const orbitControlsRef = useRef<VanillaOrbitControls>(null);
  const targetObject = new THREE.Object3D();
  const light = new THREE.DirectionalLight;
  light.target = targetObject;
  targetObject.position.set(5, 1, 0);
  console.log(targetObject.position)
  return (
    <Suspense fallback={null}>
      <TheSun
        position={[40, 14, -4]}
        intensity={25}
        near={0.01}
        far={50}
        top={125}
        bottom={-125}
        left={-125}
        right={125}
        shadow-Mapsize-width={1024}
        shadow-Mapsize-height={1024}
      />
      <OrbitControls makeDefault rotateSpeed={0.5} ref={orbitControlsRef} />
      <PerspectiveCamera makeDefault position={[6, 6, -6.21]} fov={40} />
      <Car />
      <Ground />
    </Suspense>
  );
}

      {/* <spotLight intensity={10000} position={[10, 10, 10]} castShadow renderOrder={100} /> */}
      {/* <directionalLight intensity={9} position={[0, 12, 0]}
      target={targetObject}
      castShadow shadow-camera-right={150} shadow-camera-left={-125} shadow-camera-top={150} shadow-camera-bottom={-25} shadow-camera-far={100} shadow-camera-near={0.1} /> */}
      {/* <Environment files={"/sky.jpg"} /> */}