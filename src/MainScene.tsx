import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { Object3D, Vector3 } from "three";
import { Car, Ground, PseudoSun } from "./components";
import { LandmarkName } from "./LandmarkChart";
import { OrbitControls as VanillaOrbitControls } from "three-stdlib";

export default function MainScene({
  setCarPosition,
  setLandmark,
  debug,
  landmark,
  orbit,
  thirdPerson,
  setThirdPerson,
}: {
  setCarPosition: React.Dispatch<React.SetStateAction<Vector3>>;
  setLandmark: React.Dispatch<React.SetStateAction<LandmarkName>>;
  debug: React.RefObject<boolean>;
  landmark: LandmarkName;
  orbit: React.RefObject<VanillaOrbitControls>;
  thirdPerson: boolean;
  setThirdPerson: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
      <PseudoSun position={[0, 120, -240]} />
      <OrbitControls
        autoRotate
        autoRotateSpeed={10}
        ref={orbit}
        makeDefault
        maxDistance={50}
        rotateSpeed={0.5}
      />
      <PerspectiveCamera makeDefault position={[0, 180, -6.21]} fov={40} />
      <Car
        orbit={orbit}
        setCarPosition={setCarPosition}
        thirdPerson={thirdPerson}
        setThirdPerson={setThirdPerson}
      />
      <Ground
        setThirdPerson={setThirdPerson}
        landmarkLookup={landmarkLookup}
        debug={debug}
        setLandmark={setLandmark}
      />
    </Suspense>
  );
}
