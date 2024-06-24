import { useGLTF } from "@react-three/drei";
import Model from "/ParisScene/ArcDeTriomphe.glb";

export default function ArcDeTriomphe(props) {
  const { nodes, materials } = useGLTF(Model);
  return (
    <group {...props} dispose={null} ref={props.innerRef}>
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
