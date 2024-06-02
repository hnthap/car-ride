import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import ArcofTriumph from "/ParisScene/ArcdeTriumphe.glb"

export default function AdT(props) {
  const { nodes, materials } = useGLTF(ArcofTriumph)
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kalusuo_1_D_kalusuo_1_0.geometry}
        material={materials['D_kalusuo_1.002']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/ArcdeTriumphe.glb')