import { Triplet, useCompoundBody } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { EiffelTower as Model } from "../models";
import * as THREE from "three";
import * as CANNON from "cannon-es";
import { ObstacleProps } from "./Obstacle";
import { LandmarkName } from "../LandmarkChart";

export default function EiffelTower({
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
      "Eiffel Tower" in landmarkLookup.current
    )
      return;
    landmarkLookup.current["Eiffel Tower"] = objectRef.current;
  }, [landmarkLookup, objectRef]);

  const boxRotation: Triplet = [0, (82 * Math.PI) / 180, 0];

  const data: { additionPosition: Triplet; boxArgs: Triplet }[] = [
    {
      additionPosition: [3, 0.6, -2],
      boxArgs: [1.2, 1.2, 1.2],
    },
    {
      additionPosition: [2.3, 1.8, -1.65],
      boxArgs: [1.2, 1.2, 1.2],
    },
    {
      additionPosition: [-3, 0.6, 2],
      boxArgs: [1.2, 1.2, 1.2],
    },
    {
      additionPosition: [-2.3, 1.8, 1.65],
      boxArgs: [1.2, 1.2, 1.2],
    },
    {
      additionPosition: [2, 0.6, 3],
      boxArgs: [1.2, 1.2, 1.2],
    },
    {
      additionPosition: [1.65, 1.8, 2.3],
      boxArgs: [1.2, 1.2, 1.2],
    },
    {
      additionPosition: [-2, 0.6, -3],
      boxArgs: [1.2, 1.2, 1.2],
    },
    {
      additionPosition: [-1.65, 1.8, -2.3],
      boxArgs: [1.2, 1.2, 1.2],
    },
    {
      additionPosition: [0, 3, 0],
      boxArgs: [4, 0.5, 4],
    },
  ];

  const [ref1] = useCompoundBody<THREE.Mesh>(
    () => ({
      mass: 0,
      shapes: data.map(({ additionPosition, boxArgs }) => ({
        args: boxArgs,
        position: position.map((p, i) => p + additionPosition[i]) as Triplet,
        type: "Box",
      })),
      position,
      onCollideBegin() {
        setLandmark("Eiffel Tower");
        setThirdPerson(true);
      },
    }),
    useRef(null)
  );

  return (
    <mesh ref={ref1} castShadow receiveShadow>
      <Model
        position={position}
        rotation={[0, rotation, 0]}
        innerRef={objectRef}
      />
      {data.map(({ additionPosition, boxArgs }, index) => (
        <CustomCollider
          key={index}
          debug={debug}
          position={position}
          additionPosition={additionPosition}
          rotation={boxRotation}
          boxArgs={boxArgs}
        />
      ))}
    </mesh>
  );
}

interface CustomColliderProps {
  position: Triplet;
  additionPosition: Triplet;
  rotation: Triplet;
  debug?: React.RefObject<boolean>;
  boxArgs: Triplet;
}

function CustomCollider({
  position,
  additionPosition,
  rotation,
  debug,
  boxArgs,
}: CustomColliderProps) {
  return (
    <mesh
      position={new CANNON.Vec3(...position)
        .vadd(new CANNON.Vec3(...additionPosition))
        .toArray()}
      rotation={rotation}
      visible={debug?.current ?? false}
    >
      <boxGeometry args={boxArgs} />
      <meshBasicMaterial transparent={true} opacity={0.5} color="yellow" />
    </mesh>
  );
}
