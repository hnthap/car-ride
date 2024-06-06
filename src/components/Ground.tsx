import { usePlane } from "@react-three/cannon";
import { useRef } from "react";
import { ObstacleProps } from "../util";
import { OggyHouse } from "../components";

export default function Ground() {
  usePlane(
    () => ({
      type: "Static",
      rotation: [-0.5 * Math.PI, 0, 0],
    }),
    useRef(null)
  );
  const houseInfos: ObstacleProps[] = [
    {
      position: [0, 0, 0],
      rotation: 0,
    },
    {
      position: [5, 0, 5],
      rotation: -Math.PI / 2,
    },
    {
      position: [3, 0, -3],
      rotation: 0,
    },
    {
      position: [-4, 0, 4],
      rotation: 0,
    },
    {
      position: [-6.1, 0, -9],
      rotation: 0,
    },
  ];
  return (
    <>
      {houseInfos.map((props, i) => {
        return <OggyHouse {...props} key={i} />;
      })}
    </>
  );
}

{
  /* <mesh
  rotation-x={-0.5 * Math.PI}
  visible={true}
>
  <planeGeometry args={[50, 50]} />
  <meshBasicMaterial
    opacity={0.325}
    transparent={true}
    color={"green"}
    side={THREE.DoubleSide}
  />
</mesh> */
}
