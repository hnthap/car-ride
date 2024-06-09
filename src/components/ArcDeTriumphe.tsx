import { useCylinder } from "@react-three/cannon";
import { useRef } from "react";
import { ObstacleProps } from "../util";
import { AdT } from "../models";
import * as THREE from "three";
import * as CANNON from "cannon-es";

export default function ArcDeTriomphe({ position, rotation }: ObstacleProps) {
  const colliderBoxScale: [number, number, number, number] = [0.5, 0.5, 4, 10];
  const thingScale: [number, number, number] = [0.1, 0.1, 0.1];
  const thingPosition: [number, number, number] = [0, 0, 0];
  const pillar1Position: [number, number, number] = [2, 2, 0.7];
  const pillar2Position: [number, number, number] = [-0.5, 2, 2.1];
  const pillar3Position: [number, number, number] = [0.5, 2, -2.2];
  const pillar4Position: [number, number, number] = [-2.1, 2, -0.8];
  const pillar5Position: [number, number, number] = [-3.8, 2, 0.2];
  const pillar6Position: [number, number, number] = [-2.3, 2, 3];
  const pillar7Position: [number, number, number] = [3.8, 2, -0.2];
  const pillar8Position: [number, number, number] = [2.3, 2, -3.1];

  const [ref1] = useCylinder<THREE.Mesh>(
    () => ({
      args: colliderBoxScale,
      position: new CANNON.Vec3(...position)
        .vadd(new CANNON.Vec3(...pillar1Position))
        .toArray(),
      type: "Static",
    }),
    useRef(null)
  );
  const [ref2] = useCylinder<THREE.Mesh>(
    () => ({
      args: colliderBoxScale,
      position: new CANNON.Vec3(...position)
        .vadd(new CANNON.Vec3(...pillar2Position))
        .toArray(),
      type: "Static",
    }),
    useRef(null)
  );
  const [ref3] = useCylinder<THREE.Mesh>(
    () => ({
      args: colliderBoxScale,
      position: new CANNON.Vec3(...position)
        .vadd(new CANNON.Vec3(...pillar3Position))
        .toArray(),
      type: "Static",
    }),
    useRef(null)
  );
  const [ref4] = useCylinder<THREE.Mesh>(
    () => ({
      args: colliderBoxScale,
      position: new CANNON.Vec3(...position)
        .vadd(new CANNON.Vec3(...pillar4Position))
        .toArray(),
      type: "Static",
    }),
    useRef(null)
  );
  const [ref5] = useCylinder<THREE.Mesh>(
    () => ({
      args: colliderBoxScale,
      position: new CANNON.Vec3(...position)
        .vadd(new CANNON.Vec3(...pillar5Position))
        .toArray(),
      type: "Static",
    }),
    useRef(null)
  );
  const [ref6] = useCylinder<THREE.Mesh>(
    () => ({
      args: colliderBoxScale,
      position: new CANNON.Vec3(...position)
        .vadd(new CANNON.Vec3(...pillar6Position))
        .toArray(),
      type: "Static",
    }),
    useRef(null)
  );
  const [ref7] = useCylinder<THREE.Mesh>(
    () => ({
      args: colliderBoxScale,
      position: new CANNON.Vec3(...position)
        .vadd(new CANNON.Vec3(...pillar7Position))
        .toArray(),
      type: "Static",
    }),
    useRef(null)
  );
  const [ref8] = useCylinder<THREE.Mesh>(
    () => ({
      args: colliderBoxScale,
      position: new CANNON.Vec3(...position)
        .vadd(new CANNON.Vec3(...pillar8Position))
        .toArray(),
      type: "Static",
    }),
    useRef(null)
  );
  return (
    <group>
      <AdT
        scale={thingScale}
        position={new CANNON.Vec3(...thingPosition)
          .vadd(new CANNON.Vec3(...position))
          .toArray()}
        rotation={[0, rotation, 0]}
      />
      <mesh ref={ref1}>
        <cylinderGeometry args={colliderBoxScale} />
        <meshBasicMaterial transparent={true} opacity={0.5} color={"red"} />
      </mesh>
      <mesh ref={ref2}>
        <cylinderGeometry args={colliderBoxScale} />
        <meshBasicMaterial transparent={true} opacity={0.5} color={"yellow"} />
      </mesh>
      <mesh ref={ref3}>
        <cylinderGeometry args={colliderBoxScale} />
        <meshBasicMaterial transparent={true} opacity={0.5} color={"blue"} />
      </mesh>
      <mesh ref={ref4}>
        <cylinderGeometry args={colliderBoxScale} />
        <meshBasicMaterial transparent={true} opacity={0.5} color={"orange"} />
      </mesh>
      <mesh ref={ref5}>
        <cylinderGeometry args={colliderBoxScale} />
        <meshBasicMaterial transparent={true} opacity={0.5} color={"cyan"} />
      </mesh>
      <mesh ref={ref6}>
        <cylinderGeometry args={colliderBoxScale} />
        <meshBasicMaterial transparent={true} opacity={0.5} color={"green"} />
      </mesh>
      <mesh ref={ref7}>
        <cylinderGeometry args={colliderBoxScale} />
        <meshBasicMaterial transparent={true} opacity={0.5} color={"pink"} />
      </mesh>
      <mesh ref={ref8}>
        <cylinderGeometry args={colliderBoxScale} />
        <meshBasicMaterial transparent={true} opacity={0.5} color={"white"} />
      </mesh>
    </group>
  );
}
