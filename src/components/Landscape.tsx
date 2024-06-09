// import * as THREE from "three";
// import { useHeightfield, type Triplet } from "@react-three/cannon";
// import { useEffect, useRef } from "react";
// import { Ground } from "../models";

// export default function Landscape() {
//   const position: Triplet = [0, 0, 0];
//   const rotation: Triplet = [0, 0, 0];
//   const objRef = useRef<THREE.Object3D>();
//   const heights: number[][] = [];
//   const elementSize = 3;

//   useEffect(() => {
//     if (!objRef.current) return;
//     const xStart = -115;
//     const xEnd = 85;
//     const zStart = -90;
//     const zEnd = 70;
//     const step = 2;
//     const raycaster = new THREE.Raycaster();
//     const down = new THREE.Vector3(0, -1, 0);
//     for (let x = xStart; x <= xEnd; x += step) {
//       const row: number[] = [];
//       for (let z = zStart; z <= zEnd; z += step) {
//         raycaster.set(
//           new THREE.Vector3(x * elementSize, 1000, z * elementSize),
//           down
//         );
//         const intersects = raycaster.intersectObject(objRef.current!, false);
//         row.push(intersects.length === 0 ? 0 : intersects[0].point.y);
//       }
//       heights.push(row);
//     }
//   });
//   const [ref] = useHeightfield(
//     () => ({
//       args: [heights, { elementSize }],
//       position,
//       rotation,
//     }),
//     useRef<THREE.Group>(null)
//   );
//   return (
//     <group ref={ref}>
//       <Ground ref={objRef} />
//     </group>
//   );
// }

// import { GroupProps } from "@react-three/fiber";
// import { Ground } from "../models";
// import { useBox } from "@react-three/cannon";
// import * as THREE from "three";
// import { useRef } from "react";

// export default function Landscape(props: GroupProps) {
//   useBox<THREE.Group>(
//     () => ({
//       allowSleep: true,
//       args: [100, 100, 0.3],
//       mass: 1,
//       type: "Static"
//     }),
//     useRef(null)
//   );
//   return <Ground {...props} />;
// }


import { GroupProps } from "@react-three/fiber";
import { Ground } from "../models";
import { useBox } from "@react-three/cannon";
import * as THREE from "three";
import { useRef } from "react";

export default function Landscape(props: GroupProps) {
  useBox<THREE.Group>(
    () => ({
      allowSleep: true,
      args: [100, 100, 0.3],
      mass: 1,
      type: "Static",
    }),
    useRef(null)
  );
  return <Ground {...props} />;
  // useCompoundBody<THREE.Group>(() => ({
  //     args: [100, 100, 3],
  //     onCollide: undefined,
  //     onCollideBegin: undefined,
  //     onCollideEnd: undefined
  //     type: "Static",
  //     type: 'Heightfield',

  // }))
}
