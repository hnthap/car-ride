import { GroupProps } from "@react-three/fiber";
import { Newground } from "../models";
import { useCompoundBody, Triplet } from "@react-three/cannon";
import { useRef } from "react";
import { DEGREES_TO_RADIANS } from "../utils";
import * as THREE from "three";

type MaterialColor = "Grass" | "Wood" | "Steel";

export default function Landscape(
  props: GroupProps & { debug: React.RefObject<boolean> }
) {
  const { debug } = props;
  const shapes: {
    args: Triplet;
    position: Triplet;
    rotation: Triplet;
    materialColor: MaterialColor;
  }[] = [
    {
      args: [110, 0.1, 100.5],
      position: [-60, -0.05, -48.4],
      rotation: [0, -1 * DEGREES_TO_RADIANS, 0],
      materialColor: "Grass",
    },
    {
      args: [110, 0.1, 25],
      position: [39.75, -0.05, 8.4],
      rotation: [0, -23 * DEGREES_TO_RADIANS, 0],
      materialColor: "Grass",
    },
    {
      args: [11.9, 4, 0.01],
      position: [-66.5, 1, -58],
      rotation: [0, 105 * DEGREES_TO_RADIANS, 0],
      materialColor: "Grass",
    },
    {
      args: [24, 0.1, 48],
      position: [5, -0.26, -48],
      rotation: [
        0 * DEGREES_TO_RADIANS,
        -1 * DEGREES_TO_RADIANS,
        -1.05 * DEGREES_TO_RADIANS,
      ],
      materialColor: "Grass",
    },
    {
      args: [40, 0.1, 130],
      position: [43.15, -0.4, -25.45],
      rotation: [
        0 * DEGREES_TO_RADIANS,
        -113 * DEGREES_TO_RADIANS,
        1.0 * DEGREES_TO_RADIANS,
      ],
      materialColor: "Grass",
    },
    {
      args: [40, 0.1, 130],
      position: [50, -0.45, -36],
      rotation: [
        0 * DEGREES_TO_RADIANS,
        -113 * DEGREES_TO_RADIANS,
        0.55 * DEGREES_TO_RADIANS,
      ],
      materialColor: "Grass",
    },
    {
      args: [15, 0.1, 15],
      position: [10, -0.29, -36],
      rotation: [
        0 * DEGREES_TO_RADIANS,
        -113 * DEGREES_TO_RADIANS,
        0.6 * DEGREES_TO_RADIANS,
      ],
      materialColor: "Grass",
    },
    {
      args: [7, 5, 0.01],
      position: [-68.45, 1, -52],
      rotation: [0, 5 * DEGREES_TO_RADIANS, 0],
      materialColor: "Grass",
    },
    {
      args: [12.55, 5, 0.01],
      position: [-78.4, 1, -59.5],
      rotation: [0, 36 * DEGREES_TO_RADIANS, 0],
      materialColor: "Grass",
    },
    {
      args: [5.5, 5, 0.01],
      position: [-70.7, 1, -63.4],
      rotation: [0, 4 * DEGREES_TO_RADIANS, 0],
      materialColor: "Grass",
    },
    {
      args: [9, 5, 0.01],
      position: [-76, 1, -53.6],
      rotation: [0, -25 * DEGREES_TO_RADIANS, 0],
      materialColor: "Grass",
    },
    {
      args: [4, 5, 0.01],
      position: [-81.5, 1, -55.65],
      rotation: [0, -7 * DEGREES_TO_RADIANS, 0],
      materialColor: "Grass",
    },

    {
      args: [69, 0.1, 50],
      position: [-81, -0.05, 40.2],
      rotation: [0, 1.28 * DEGREES_TO_RADIANS, 0],
      materialColor: "Grass",
    },
    {
      args: [60, 0.1, 50],
      position: [-39, -0.05, 39],
      rotation: [0, 4 * DEGREES_TO_RADIANS, 0],
      materialColor: "Grass",
    },
    {
      args: [18, 0.1, 50],
      position: [-15.5, -0.05, 38.2],
      rotation: [0, -31 * DEGREES_TO_RADIANS, 0],
      materialColor: "Grass",
    },
    {
      args: [40, 0.1, 17],
      position: [-14, -0.05, 33.2],
      rotation: [0, 59.5 * DEGREES_TO_RADIANS, 0],
      materialColor: "Grass",
    },
    {
      args: [70, 0.1, 30],
      position: [28, -0.05, 50.55],
      rotation: [0, -24.74 * DEGREES_TO_RADIANS, 0],
      materialColor: "Grass",
    },
    {
      args: [36, 0.1, 50],
      position: [47.6, -0.05, 55.8],
      rotation: [0, 67 * DEGREES_TO_RADIANS, 0],
      materialColor: "Grass",
    },
    {
      args: [3.5, 0.1, 5],
      position: [29.9, -0.05, 31.95],
      rotation: [0, 108.7 * DEGREES_TO_RADIANS, 0],
      materialColor: "Grass",
    },
    {
      args: [5.5, 0.1, 25],
      position: [66, 0.04, 46.6],
      rotation: [0, 67.2 * DEGREES_TO_RADIANS, 1.5 * DEGREES_TO_RADIANS],
      materialColor: "Grass",
    },
    {
      args: [5.5, 0.1, 20],
      position: [45.25, 0.01, 37.88],
      rotation: [
        -1 * DEGREES_TO_RADIANS,
        67.2 * DEGREES_TO_RADIANS,
        1.5 * DEGREES_TO_RADIANS,
      ],
      materialColor: "Grass",
    },
    {
      args: [7.5, 0.1, 30],
      position: [5, 0.05, 60.5],
      rotation: [
        0 * DEGREES_TO_RADIANS,
        65 * DEGREES_TO_RADIANS,
        0 * DEGREES_TO_RADIANS,
      ],
      materialColor: "Grass",
    },
    {
      args: [11, 1, 2],
      position: [37.7, -0.5, 25.3],
      rotation: [0, 69.69 * DEGREES_TO_RADIANS, 0],
      materialColor: "Wood",
    },
    {
      args: [4, 0.06, 2],
      position: [38.65, 0.1, 22.7],
      rotation: [0, 69.69 * DEGREES_TO_RADIANS, -3 * DEGREES_TO_RADIANS],
      materialColor: "Wood",
    },
    {
      args: [4, 0.06, 2],
      position: [36.6, 0.1, 28.3],
      rotation: [0, 69.69 * DEGREES_TO_RADIANS, 3 * DEGREES_TO_RADIANS],
      materialColor: "Wood",
    },
    {
      args: [2.1, 0.06, 2],
      position: [37.65, 0.2, 25.42],
      rotation: [0, 69.69 * DEGREES_TO_RADIANS, 0],
      materialColor: "Wood",
    },
    {
      args: [20, 0.04, 2],
      position: [18.7, -0.02, 20],
      rotation: [0, 64 * DEGREES_TO_RADIANS, 0],
      materialColor: "Wood",
    },
    {
      args: [14, 0.06, 2],
      position: [-66.4, -0.5, 9],
      rotation: [0, 90 * DEGREES_TO_RADIANS, 0],
      materialColor: "Wood",
    },
    {
      args: [4.5, 0.06, 2],
      position: [-66.2, 0.02, 12],
      rotation: [0, 90 * DEGREES_TO_RADIANS, 1.6 * DEGREES_TO_RADIANS],
      materialColor: "Wood",
    },
    {
      args: [4, 0.06, 2],
      position: [-66.2, 0.065, 8],
      rotation: [0, 90 * DEGREES_TO_RADIANS, 0],
      materialColor: "Wood",
    },
    {
      args: [4.5, 0.06, 2],
      position: [-66.2, 0.02, 4],
      rotation: [0, 90 * DEGREES_TO_RADIANS, -1.6 * DEGREES_TO_RADIANS],
      materialColor: "Wood",
    },
    {
      args: [5, 0.06, 2],
      position: [-66.3, 0, 14],
      rotation: [0, 90 * DEGREES_TO_RADIANS, 0 * DEGREES_TO_RADIANS],
      materialColor: "Wood",
    },
    {
      args: [15, 1, 2],
      position: [14.8, -1.35, 27],
      rotation: [0, -24.3 * DEGREES_TO_RADIANS, 0],
      materialColor: "Wood",
    },
    {
      args: [7.5, 0.06, 2],
      position: [23.2, -0.52, 30.75],
      rotation: [0, -24.3 * DEGREES_TO_RADIANS, 7.2 * DEGREES_TO_RADIANS],
      materialColor: "Wood",
    },
    {
      args: [7, 0.06, 2],
      position: [7.6, -0.45, 23.63],
      rotation: [0, -24.3 * DEGREES_TO_RADIANS, -6.5 * DEGREES_TO_RADIANS],
      materialColor: "Wood",
    },
    {
      args: [45, 10, 0.01],
      position: [60.8, -0.5, 30.5],
      rotation: [0, -23.3 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [17, 10, 0.01],
      position: [30.7, -0.5, 17],
      rotation: [0, -26.3 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [11.5, 10, 0.01],
      position: [15.8, -0.5, 10.88],
      rotation: [0, -16.5 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [18, 10, 0.01],
      position: [2, -0.5, 5.88],
      rotation: [0, -22.4 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [59, 10, 0.01],
      position: [-35.7, -0.5, 1.95],
      rotation: [0, -1.04 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [44, 10, 0.01],
      position: [-92.3, -0.5, 1.25],
      rotation: [0, 0.7 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [3.2, 10, 0.01],
      position: [-68.8, -0.5, 1.2],
      rotation: [0, -7.3 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [11, 10, 0.01],
      position: [38.3, -0.5, 26.6],
      rotation: [0, 69.69 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [11, 10, 0.01],
      position: [36.4, -0.5, 25.9],
      rotation: [0, 69.69 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [17, 2, 0.01],
      position: [19.4, 1, 20.8],
      rotation: [0, 64 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [17, 2, 0.01],
      position: [17.6, 1, 20.15],
      rotation: [0, 64 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [14, 10, 0.01],
      position: [-65.25, -0.5, 8.3],
      rotation: [0, 89.7 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [14, 10, 0.01],
      position: [-67.2, -0.5, 8.3],
      rotation: [0, 89.7 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [45, 10, 0.01],
      position: [57.25, -0.5, 40.15],
      rotation: [0, -23 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [5.2, 10, 0.01],
      position: [29.25, -0.5, 30.35],
      rotation: [0, 19.4 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [3.5, 10, 0.01],
      position: [33.02, -0.5, 29.97],
      rotation: [0, -20 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [10, 1.5, 0.01],
      position: [16, -1, 26.43],
      rotation: [0, -24.7 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [7, 10, 0.01],
      position: [23.65, -0.5, 29.88],
      rotation: [0, -23.5 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [9, 10, 0.01],
      position: [7.5, -0.5, 22.5],
      rotation: [0, -24.9 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [16.5, 10, 0.01],
      position: [-3.64, -0.5, 16.33],
      rotation: [0, -31.25 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [36, 10, 0.01],
      position: [-28.5, -0.5, 13.4],
      rotation: [0, 4 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [19, 10, 0.01],
      position: [-55.78, -0.5, 14.7],
      rotation: [0, 0.3 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [34, 10, 0.01],
      position: [-84.2, -0.5, 15.3],
      rotation: [0, 1.3 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [11.5, 10, 0.01],
      position: [20.95, -0.5, 30.75],
      rotation: [0, -23.9 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [14, 10, 0.01],
      position: [7.7, -0.5, 24.75],
      rotation: [0, -24.75 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [14, 10, 0.01],
      position: [-67.2, -0.5, 8.3],
      rotation: [0, 89.7 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [14, 10, 0.01],
      position: [-67.2, -0.5, 8.3],
      rotation: [0, 89.7 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [14, 10, 0.01],
      position: [-67.2, -0.5, 8.3],
      rotation: [0, 89.7 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
    {
      args: [14, 10, 0.01],
      position: [-67.2, -0.5, 8.3],
      rotation: [0, 89.7 * DEGREES_TO_RADIANS, 0],
      materialColor: "Steel",
    },
  ];
  const [ref] = useCompoundBody<THREE.Mesh>(
    () => ({
      mass: 0,
      position: [0, 0, 0],
      shapes: shapes.map((shape) => ({ ...shape, type: "Box" })),
    }),
    useRef(null)
  );
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <Newground {...props} />
      {shapes.map(
        ({ position, rotation, args, materialColor: objectType }, i) => (
          <mesh
            key={i}
            visible={debug?.current ?? false}
            position={position}
            rotation={rotation}
          >
            <boxGeometry args={args} />
            <meshBasicMaterial
              transparent={true}
              opacity={1}
              color={getMaterialColor(objectType)}
            />
          </mesh>
        )
      )}
    </mesh>
  );
}

function getMaterialColor(value: MaterialColor): string {
  switch (value) {
    case "Grass":
      return "#553300";
    case "Steel":
      return "#666666";
    case "Wood":
      return "#774400";
    default:
      throw new Error("Invalid value for MaterialColor: " + value);
  }
}
