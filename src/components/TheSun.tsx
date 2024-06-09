import { useRef, useState } from "react";
import * as THREE from "three";
import { useBox } from "@react-three/cannon";

export type Lighting = {
    intensity: number;
    left: number;
    right: number;
    top: number;
    bottom: number;
    near: number;
    far: number;
    position: [number, number, number];
    //targetPosition: [number, number, number];
}

export default function TheSun(
    {intensity, left, right, top, bottom, near, far, position, 
        //targetPosition
    }: Lighting
) {
    const [o] = useState(() => new THREE.Object3D())
    return(
        <mesh position={position}>
            <sphereGeometry args={[2, 30, 16]}/>
            <meshBasicMaterial color={"yellow"}/>
            <directionalLight target={o} intensity={intensity}
             //target-position={targetPosition} 
             castShadow shadow-camera-right={right} shadow-camera-left={left} shadow-camera-top={top} shadow-camera-bottom={bottom} shadow-camera-far={far} shadow-camera-near={near} />
            {/* <primitive object={o} position={targetPosition}/> */}
        </mesh>
    )
}
