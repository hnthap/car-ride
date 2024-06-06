import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import ParisGround from "/ParisScene/Ground.glb"

export default function GroundMap(props) {
  const { nodes, materials } = useGLTF(ParisGround)

  return (
    <group {...props} dispose={null} scale={40}>
      <group scale={0.01}>
        <group position={[510.159, 17.934, 88.038]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.dibiao_28_D_dibiao_9_0.geometry}
            material={materials.D_dibiao_9}
            position={[-510.159, -17.934, -88.038]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.dibiao_29_D_dibiao_9_0.geometry}
            material={materials.D_dibiao_9}
            position={[-510.159, -17.934, -88.038]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.dibiao_30_D_dibiao_8_0.geometry}
            material={materials.D_dibiao_8}
            position={[-510.159, -17.934, -88.038]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <group position={[-510.159, -17.934, -88.038]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.shaidao_55_13_D_shui_1_0.geometry}
              material={materials.D_shui_1}
              position={[135.899, -17.063, 532]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
          <group position={[-510.159, -17.934, -88.038]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.shaidao_61_2_D_tiezhalan_4_0.geometry}
              material={materials.D_tiezhalan_4}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.shaidao_61_3_D_qiang_5_0.geometry}
              material={materials.D_qiang_5}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shaidao_54_1_D_dibiao_7_0.geometry}
          material={materials.D_dibiao_7}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shaidao_54_2_D_lujian_4_0.geometry}
          material={materials.D_lujian_4}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shaidao_55_1_D_dibiao_19_0.geometry}
          material={materials.D_dibiao_19}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shaidao_55_2_D_lujian_4_0.geometry}
          material={materials.D_lujian_4}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shaidao_55_7_D_dibiao_8_0.geometry}
          material={materials.D_dibiao_8}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shaidao_56_1_D_dibiao_7_0.geometry}
          material={materials.D_dibiao_7}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shaidao_56_2_D_lujian_4_0.geometry}
          material={materials.D_lujian_4}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shaidao_56_3_D_dibiao_8_0.geometry}
          material={materials.D_dibiao_8}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shaidao_57_1_D_dibiao_7_0.geometry}
          material={materials.D_dibiao_7}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shaidao_57_2_D_lujian_4_0.geometry}
          material={materials.D_lujian_4}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shaidao_57_5_D_dibiao_8_0.geometry}
          material={materials.D_dibiao_8}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shaidao_59_2_D_dibiao_7_0.geometry}
          material={materials.D_dibiao_7}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shaidao_59_4_D_lujian_4_0.geometry}
          material={materials.D_lujian_4}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shaidao_60_1_D_dibiao_20_0.geometry}
          material={materials.D_dibiao_20}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shaidao_60_2_D_lujian_4_0.geometry}
          material={materials.D_lujian_4}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shaidao_60_4_D_dibiao_8_0.geometry}
          material={materials.D_dibiao_8}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shaidao_61_1_D_dibiao_21_0.geometry}
          material={materials.D_dibiao_21}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}