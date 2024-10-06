import { Triplet, useCylinder } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { ArcDeTriomphe as Model } from "../models";
import * as THREE from "three";
import * as CANNON from "cannon-es";
import { ObstacleProps } from "./Obstacle";
import { LandmarkName } from "../LandmarkChart";

export default function ArcDeTriomphe({
  position,
  rotation,
  debug,
  setLandmark,
  landmarkLookup,
  setThirdPerson,
}: ObstacleProps & {
  setLandmark: React.Dispatch<React.SetStateAction<LandmarkName>>;
  landmarkLookup: React.MutableRefObject<{
    [key: string]: THREE.Object3D;
  }>;
  setThirdPerson: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const objectRef = useRef<THREE.Object3D>(null);

  useEffect(() => {
    if (
      !landmarkLookup.current ||
      !objectRef.current ||
      "Arc de Triomphe" in landmarkLookup.current
    )
      return;
    landmarkLookup.current["Arc de Triomphe"] = objectRef.current;
  }, [landmarkLookup, objectRef]);

  const colliderBoxScale: [number, number, number, number] = [0.5, 0.5, 4, 10];

  const additionalPositions: Triplet[] = [
    [2, 2, 0.7],
    [-0.5, 2, 2.1],
    [0.5, 2, -2.2],
    [-2.1, 2, -0.8],
    [-3.8, 2, 0.2],
    [-2.3, 2, 3],
    [3.8, 2, -0.2],
    [2.3, 2, -3.1],
  ];
  return (
    <group>
      <Model
        scale={[0.1, 0.1, 0.1]}
        position={new CANNON.Vec3(0, 0, 0)
          .vadd(new CANNON.Vec3(...position))
          .toArray()}
        rotation={[0, rotation, 0]}
        innerRef={objectRef}
      />
      {additionalPositions.map((additionPosition, i) => (
        <CustomCylinder
          key={i}
          colliderBoxScale={colliderBoxScale}
          position={position}
          additionPosition={additionPosition}
          setLandmark={setLandmark}
          setThirdPerson={setThirdPerson}
          debug={debug}
        />
      ))}
    </group>
  );
}

interface CustomCylinderProps {
  colliderBoxScale: [number, number, number, number];
  position: [number, number, number];
  additionPosition: [number, number, number];
  setLandmark: React.Dispatch<React.SetStateAction<LandmarkName>>;
  setThirdPerson: React.Dispatch<React.SetStateAction<boolean>>;
  debug?: React.RefObject<boolean>;
}

function CustomCylinder({
  colliderBoxScale,
  position,
  additionPosition,
  setLandmark,
  setThirdPerson,
  debug,
}: CustomCylinderProps) {
  const [ref] = useCylinder<THREE.Mesh>(
    () => ({
      args: colliderBoxScale,
      position: new CANNON.Vec3(...position)
        .vadd(new CANNON.Vec3(...additionPosition))
        .toArray(),
      type: "Static",
      onCollide() {
        setLandmark("Arc de Triomphe");
        setThirdPerson(true);
      },
    }),
    useRef(null)
  );
  return (
    <mesh ref={ref} visible={debug?.current ?? false}>
      <cylinderGeometry args={colliderBoxScale} />
      <meshBasicMaterial transparent={true} opacity={0.5} color={"red"} />
    </mesh>
  );
}
