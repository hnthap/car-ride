import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import tire from "/Car&Wheel/wheel.glb"

export default function Tire (props) {
  const { nodes, materials } = useGLTF(tire)
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wheel_00_wheels_0.geometry}
        material={materials['wheels.002']}
        position={[-71.898, 25.337, 62.764]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}
