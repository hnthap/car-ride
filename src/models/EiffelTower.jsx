import { useGLTF } from '@react-three/drei'
import ET from "/ParisScene/EiffelTower.glb"

export default function EiffelTower(props) {
  const { nodes, materials } = useGLTF(ET)
  return (
    <group {...props} dispose={null} scale={0.1} ref={props.innerRef}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.aifeiertieta_1_D_aifeiertieta_1_0.geometry}
            material={materials['D_aifeiertieta_1.001']}
            rotation={[-Math.PI / 2, 0, -1.755]}
          />
    </group>
  )
}