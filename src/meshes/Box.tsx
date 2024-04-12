export default function Box(props: JSX.IntrinsicElements["mesh"]) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={0x00ff00} />
    </mesh>
  );
}
