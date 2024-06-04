import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import ET from "/ParisScene/EiffelTower.glb"

export default function EiffelTower(props) {
  const { nodes, materials } = useGLTF(ET)
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[510.159, 17.934, 88.038]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.aifeiertieta_1_D_aifeiertieta_1_0.geometry}
            material={materials['D_aifeiertieta_1.001']}
            position={[-1730.061, -18.62, -340.621]}
            rotation={[-Math.PI / 2, 0, -1.755]}
          />
        </group>
      </group>
    </group>
  )
}