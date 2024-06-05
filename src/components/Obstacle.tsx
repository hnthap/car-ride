import { useBox } from "@react-three/cannon";
import { Oggy } from "../models";
import { useRef } from "react";
import * as THREE from "three";

type ObstacleProps = {
    position: [number, number, number];
    scale?: [number, number, number];
};

export default function Obstacle({position}: ObstacleProps) {
    const scale: [number, number, number] = [3.2, 1.225, 1.38];
    const physicsPosition: [number, number, number] = [0.7, 0.614, 0.34];

    useBox(() => ({
        args: scale,
        position: new THREE.Vector3(...position).add(new THREE.Vector3(...physicsPosition)).toArray(),
        type: "Static"
    }), useRef(null));

    return(
        <group position={position}>
            <Oggy scale={[0.004, 0.004, 0.004]} position={[1, 0, 1]}/>
            
            <mesh position={physicsPosition}>
                <boxGeometry args={scale}></boxGeometry>
                <meshBasicMaterial transparent={true} opacity={0.5} color={"red"}></meshBasicMaterial>
            </mesh>
        </group>
    )
}