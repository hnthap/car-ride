import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import carScene from "../assets/3d/car_scene.glb";

export default function CarA() {
  const carRef = useRef<THREE.Mesh>(null);
  // const gltf = useLoader(GLTFLoader, carScene);
  const { scene } = useGLTF(carScene) as GLTF;
  useEffect(() => {
    carRef.current?.position.setX(-4);
  }, [carRef]);
  return (
    <mesh ref={carRef} scale={0.01}>
      <primitive object={scene} />
    </mesh>
  );
}
