import { useCompoundBody } from "@react-three/cannon";
import { useRef } from "react";
import { ObstacleProps } from "../util";
// import { eiffelTower } from "../models";
import { EiffelTower } from "../models";
import * as THREE from "three";
import * as CANNON from "cannon-es"

export default function EiffelTowerProps({
  position,
  rotation,
}: ObstacleProps)
 {
  const rotateABit: number = 82*Math.PI/180;
  const collider1Position: [number, number, number] = [3, 0.6, -2];
  const collider2Position: [number, number, number] = [2.3, 1.8, -1.65];
  const collider3Position: [number, number, number] = [-3, 0.6, 2];
  const collider4Position: [number, number, number] = [-2.3, 1.8, 1.65];
  const collider5Position: [number, number, number] = [2, 0.6, 3];
  const collider6Position: [number, number, number] = [1.65, 1.8, 2.3];
  const collider7Position: [number, number, number] = [-2, 0.6, -3];
  const collider8Position: [number, number, number] = [-1.65, 1.8, -2.3];
  const collider9Position: [number, number, number] = [0, 3, 0]


  const [ref1] = useCompoundBody<THREE.Mesh>(
    () => ({
        mass: 0,
        shapes:[
            {
                args: [1.2, 1.2, 1.2],
                position: new CANNON.Vec3(...position).vadd(new CANNON.Vec3(...collider1Position)).toArray(),
                type: "Box",
            },{
                args: [1.2, 1.2, 1.2],
                position: new CANNON.Vec3(...position).vadd(new CANNON.Vec3(...collider2Position)).toArray(),
                type: "Box",
            },
            {
                args: [1.2, 1.2, 1.2],
                position: new CANNON.Vec3(...position).vadd(new CANNON.Vec3(...collider3Position)).toArray(),
                type: "Box",
            },
            {
                args: [1.2, 1.2, 1.2],
                position: new CANNON.Vec3(...position).vadd(new CANNON.Vec3(...collider4Position)).toArray(),
                type: "Box",
            },
            {
                args: [1.2, 1.2, 1.2],
                position: new CANNON.Vec3(...position).vadd(new CANNON.Vec3(...collider5Position)).toArray(),
                type: "Box",
            },
            {
                args: [1.2, 1.2, 1.2],
                position: new CANNON.Vec3(...position).vadd(new CANNON.Vec3(...collider6Position)).toArray(),
                type: "Box",
            },
            {
                args: [1.2, 1.2, 1.2],
                position: new CANNON.Vec3(...position).vadd(new CANNON.Vec3(...collider7Position)).toArray(),
                type: "Box",
            },
            {
                args: [1.2, 1.2, 1.2],
                position: new CANNON.Vec3(...position).vadd(new CANNON.Vec3(...collider8Position)).toArray(),
                type: "Box",
            },
            {
                args: [4, 0.5, 4],
                position: new CANNON.Vec3(...position).vadd(new CANNON.Vec3(...collider9Position)).toArray(),
                type: "Box",
            },
        ],
        
        position,
  }), useRef(null));


  return (
    <mesh ref={ref1} castShadow receiveShadow>
        <EiffelTower position={position} rotation={[0, rotation, 0]}/>
        <mesh position={new CANNON.Vec3(...position).vadd(new CANNON.Vec3(...collider1Position)).toArray()} rotation={[0, rotateABit, 0]}>
            <boxGeometry args={[1.2, 1.2, 1.2]} />
            <meshBasicMaterial transparent={true} opacity={0.5} color="yellow"/>
        </mesh>
        <mesh position={new CANNON.Vec3(...position).vadd(new CANNON.Vec3(...collider2Position)).toArray()} rotation={[0, rotateABit, 0]}>
            <boxGeometry args={[1.2, 1.2, 1.2]} />
            <meshBasicMaterial transparent={true} opacity={0.5} color="yellow"/>
        </mesh>
        <mesh position={new CANNON.Vec3(...position).vadd(new CANNON.Vec3(...collider3Position)).toArray()} rotation={[0, rotateABit, 0]}>
            <boxGeometry args={[1.2, 1.2, 1.2]} />
            <meshBasicMaterial transparent={true} opacity={0.5} color="yellow"/>
        </mesh>
        <mesh position={new CANNON.Vec3(...position).vadd(new CANNON.Vec3(...collider4Position)).toArray()} rotation={[0, rotateABit, 0]}>
            <boxGeometry args={[1.2, 1.2, 1.2]} />
            <meshBasicMaterial transparent={true} opacity={0.5} color="yellow"/>
        </mesh>
        <mesh position={new CANNON.Vec3(...position).vadd(new CANNON.Vec3(...collider5Position)).toArray()} rotation={[0, rotateABit, 0]}>
            <boxGeometry args={[1.2, 1.2, 1.2]} />
            <meshBasicMaterial transparent={true} opacity={0.5} color="yellow"/>
        </mesh>
        <mesh position={new CANNON.Vec3(...position).vadd(new CANNON.Vec3(...collider6Position)).toArray()} rotation={[0, rotateABit, 0]}>
            <boxGeometry args={[1.2, 1.2, 1.2]} />
            <meshBasicMaterial transparent={true} opacity={0.5} color="yellow"/>
        </mesh>
        <mesh position={new CANNON.Vec3(...position).vadd(new CANNON.Vec3(...collider7Position)).toArray()} rotation={[0, rotateABit, 0]}>
            <boxGeometry args={[1.2, 1.2, 1.2]} />
            <meshBasicMaterial transparent={true} opacity={0.5} color="yellow"/>
        </mesh>
        <mesh position={new CANNON.Vec3(...position).vadd(new CANNON.Vec3(...collider8Position)).toArray()} rotation={[0, rotateABit, 0]}>
            <boxGeometry args={[1.2, 1.2, 1.2]} />
            <meshBasicMaterial transparent={true} opacity={0.5} color="yellow"/>
        </mesh>
        <mesh position={new CANNON.Vec3(...position).vadd(new CANNON.Vec3(...collider9Position)).toArray()} rotation={[0, rotateABit, 0]}>
            <boxGeometry args={[4, 0.5, 4]} />
            <meshBasicMaterial transparent={true} opacity={0.5} color="yellow"/>
        </mesh>
    </mesh>
  );
}