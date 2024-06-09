export default function TheSun({
  intensity,
  left,
  right,
  top,
  bottom,
  near,
  far,
  position,
}: {
  intensity: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
  near: number;
  far: number;
  position: [number, number, number];
}) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[1, 15, 10]} />
      <meshBasicMaterial color={"gold"} transparent opacity={0.8} />
      <directionalLight
        intensity={intensity}
        castShadow
        shadow-camera-right={right}
        shadow-camera-left={left}
        shadow-camera-top={top}
        shadow-camera-bottom={bottom}
        shadow-camera-far={far}
        shadow-camera-near={near}
      />
      <ambientLight intensity={0.5} />
    </mesh>
  );
}
