import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useTrimesh } from "@react-three/cannon";
import ArcofTriumph from "/ParisScene/ArcdeTriumphe.glb";

export default function AdT(props) {
  const { nodes, materials } = useGLTF(ArcofTriumph);

  const nodeGeometry = nodes.Scene.children[0].geometry;
  const vertices = nodeGeometry.attributes.position.array;
  const indices = nodeGeometry.index.array;

  // const [ref] = useTrimesh(() => ({
  //   args: [vertices, indices],
  //   mass: 1,
  //   type: "Static",
  //   material: "trimesh",
  // }), useRef(null));

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kalusuo_1_D_kalusuo_1_0.geometry}
        material={materials["D_kalusuo_1.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}
