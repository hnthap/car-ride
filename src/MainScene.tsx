import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { Car, Ground, TheSun } from "./components";
import { Object3D, Vector3 } from "three";
import { LandmarkName } from "./util";
import { OrbitControls as VanillaOrbitControls } from "three-stdlib";

export default function MainScene({
  setCarPosition,
  setLandmark,
  debug,
  landmark
}: {
  setCarPosition: React.Dispatch<React.SetStateAction<Vector3>>;
  setLandmark: React.Dispatch<React.SetStateAction<LandmarkName>>;
  debug: React.RefObject<boolean>;
  landmark: LandmarkName;
}) {
  const orbit = useRef<VanillaOrbitControls>(null);
  const landmarkLookup = useRef<{ [key: string]: Object3D }>({});
  useEffect(() => {
    if (
      !landmarkLookup.current ||
      !orbit.current ||
      !landmark ||
      !(landmark in landmarkLookup.current)
    )
      return;
    landmarkLookup.current[landmark].getWorldPosition(orbit.current.target);
    orbit.current.object.position
      .copy(orbit.current.target)
      .add(new Vector3(0, 50, 50));
    orbit.current.update();
  }, [landmark]);
  return (
    <Suspense fallback={null}>
      <TheSun position={[0, 120, -240]} />
      <OrbitControls autoRotate autoRotateSpeed={10} ref={orbit} makeDefault rotateSpeed={0.5} />
      <PerspectiveCamera makeDefault position={[0, 180, -6.21]} fov={40} />
      <Car orbit={orbit} setCarPosition={setCarPosition} />
      <Ground
        landmarkLookup={landmarkLookup}
        debug={debug}
        setLandmark={setLandmark}
      />
    </Suspense>
  );
}

      {/* <spotLight intensity={10000} position={[10, 10, 10]} castShadow renderOrder={100} /> */}
      {/* <directionalLight intensity={9} position={[0, 12, 0]}
      target={targetObject}
      castShadow shadow-camera-right={150} shadow-camera-left={-125} shadow-camera-top={150} shadow-camera-bottom={-25} shadow-camera-far={100} shadow-camera-near={0.1} /> */}
      {/* <Environment files={"/sky.jpg"} /> */}