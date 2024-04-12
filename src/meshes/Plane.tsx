import * as THREE from "three";

export default function Plane(props: JSX.IntrinsicElements["mesh"]) {
  return (
    <mesh {...props}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial color={"orange"} side={THREE.DoubleSide} />
    </mesh>
  );
}
