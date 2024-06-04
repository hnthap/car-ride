import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import Kindred from "/ParisScene/SBKindred.glb"

export function Pedestrian(props) {
  const { nodes, materials } = useGLTF(Kindred)
  return (
    <group {...props} dispose={null}>
      <group position={[-0.05, 1.464, -0.035]} rotation={[-0.001, -0.033, -0.055]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials['body.texture']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials['body.texture.bfc']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials['body.texture.alpha']}
        />
      </group>
      <group position={[0.035, 1.459, -0.024]} rotation={[-0.001, -0.033, -0.055]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials['body.texture']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials['body.texture.bfc']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials['body.texture.alpha']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material}
        position={[0, 0.165, 0]}
        scale={3.68}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials['hair.texture']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials['body.texture']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials['body.texture.trasparent']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.bow_texture}
        position={[0.133, 0.822, -0.136]}
        rotation={[-1.341, -0.256, -0.47]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.clothes_textures}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_23.geometry}
        material={materials['hair.texture']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_25.geometry}
        material={materials['hair.texture']}
        position={[-0.171, 1.515, -0.103]}
        rotation={[-0.001, -0.126, -0.056]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_27.geometry}
        material={materials['body.texture']}
        position={[-0.007, 1.406, -0.064]}
        rotation={[-0.045, -0.123, -0.061]}
        scale={1.116}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_29.geometry}
        material={materials['body.texture']}
        position={[-0.008, 1.393, -0.06]}
        rotation={[-0.223, -0.11, -0.082]}
        scale={1.189}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_31.geometry}
        material={materials['body.texture']}
        position={[0, 1.396, -0.027]}
        rotation={[0.235, 0, 0]}
        scale={[0.091, 0.089, 0.089]}
      />
    </group>
  )
}
