import * as THREE from "three";
import { Wheel } from "../models";

interface DemoWheelProps {
  radius: number;
  wheelRef: React.Ref<THREE.Group>;
}

export default function DemoWheel({ radius, wheelRef }: DemoWheelProps) {
  return (
    <group ref={wheelRef}>
      <mesh rotation={[0, 0, 0.5 * Math.PI]}>
        <cylinderGeometry args={[radius, radius, 0.015, 16]} />
        <meshNormalMaterial transparent opacity={0.25} />
      </mesh>
      {/* <Wheel scale={[0.02, 0.02, 0.02]} /> */}
    </group>
  )
}

// const debug = false;

// export const WheelDebug = ({ radius, wheelRef }) => {
//   return (
//     debug && (
//       <group ref={wheelRef}>
//         <mesh rotation={[0, 0, Math.PI / 2]}>
//           <cylinderGeometry args={[radius, radius, 0.015, 16]} />
//           <meshNormalMaterial transparent={true} opacity={0.25} />
//         </mesh>
//       </group>
//     )
//   );
// };