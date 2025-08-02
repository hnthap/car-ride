import { ArcDeTriomphe, House, Landscape } from "../components";
import Tree from "./Tree";
import { HouseProps } from "./House";
import EiffelTower from "./EiffelTower";
import { Object3D } from "three";
import { LandmarkName } from "../LandmarkChart";
import { Triplet } from "@react-three/cannon";

export default function Ground({
  debug,
  setLandmark,
  landmarkLookup,
  setThirdPerson,
}: {
  debug: React.RefObject<boolean>;
  setLandmark: React.Dispatch<React.SetStateAction<LandmarkName>>;
  landmarkLookup: React.MutableRefObject<{ [key: string]: Object3D }>;
  setThirdPerson: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const treePositions: Triplet[] = [
    [20, 0, 9.9],
    [21, 0, 12.3],
    [82.8, 0, 37.7],
    [82, 0, 39.6],
    [80.8, 0, 36.8],
    [80, 0, 38.7],
    [74.8, 0, 34.1],
    [74, 0, 36.1],
    [68.8, 0, 31.5],
    [68, 0, 33.5],
    [62.8, 0, 28.9],
    [62, 0, 30.9],
    [56.8, 0, 26.2],
    [56, 0, 28.3],
    [50.8, 0, 23.7],
    [50, 0, 25.7],
    [44.8, 0, 21.0],
    [44, 0, 23.1],
    [38.8, 0, 18.6],
    [38, 0, 20.55],
    [35.5, 0, 17],
    [34.5, 0, 18.8],
    [30.5, 0, 14.6],
    [29.5, 0, 16.4],
    [24.5, 0, 11.6],
    [23.5, 0, 13.4],
    [10.8, 0, 6.9],
    [10.8, 0, 9.3],
    [15, 0, 8.3],
    [15, 0, 10.5],
    [5.3, 0, 4.65],
    [5.3, 0, 7.1],
    [-0.2, 0, 2.4],
    [-0.2, 0, 4.9],
    [-5.7, 0, 0.2],
    [-5.7, 0, 2.7],
    [-11.2, 0, 0.1],
    [-11.2, 0, 2.35],
    [-16.7, 0, 0.03],
    [-16.7, 0, 2.2],
    [-22.2, 0, -0.05],
    [-22.2, 0, 2.1],
    [-27.7, 0, -0.13],
    [-27.7, 0, 2.05],
    [-33.2, 0, -0.21],
    [-33.2, 0, 1.9],
    [-38.7, 0, -0.29],
    [-38.7, 0, 1.8],
    [-44.2, 0, -0.37],
    [-44.2, 0, 1.75],
    [-49.7, 0, -0.45],
    [-49.7, 0, 1.62],
    [-55.2, 0, -0.53],
    [-55.2, 0, 1.53],
    [-60.7, 0, -0.61],
    [-60.7, 0, 1.45],
    [-65.2, 0, -0.75],
    [-65.2, 0, 1.4],
    [-69.7, 0, -1],
    [-74.2, 0, -1.7],
    [-72.5, 0, 0.98],
    [-78.2, 0, -4.3],
    [-80.7, 0, -6.5],
    [-83.5, 0, -13],
    [-82.5, -0.3, -31.9],
    [-88.2, -0.2, -33.4],
    [-93.7, -0.1, -39],
    [-99.2, -0.3, -42],
    [-77.2, -0.3, -0.2],
    [-82.2, -0.3, -4.6],
    [-85.7, -0.3, -9.8],
    [-85.7, -0.3, -15.8],
    [-82.7, -0.3, -18.8],
    [-84.7, -0.3, -21.8],
    [-81.7, -0.3, -25.9],
    [-80.7, -0.3, -23.6],
    [-74.7, -0.3, -23.8],
    [-74.7, -0.3, -26.3],
    [-68.7, -0.3, -24.3],
    [-69.7, -0.3, -26.5],
    [-66.5, -0.3, -30.2],
    [-70.5, -0.3, -30.2],
    [-74.5, -0.3, -30.9],
    [-72.5, -0.3, -33.2],
    [-78.5, -0.3, -33.8],
    [-84.5, -0.3, -34.8],
    [-90.5, -0.3, -36.9],
    [-94.5, -0.3, -36.4],
    [-97.0, -0.3, -42.9],
    [-100.0, -0.3, -47.9],
    [-97.7, -0.3, -46.9],
    //Add trees to the opposite river bank
    [1, 0, 19.15],
    [0, 0, 21.5],
    [-5, 0, 16.4],
    [-6, 0, 18.8],
    [-7.5, 0, 14.1],
    [-11, 0, 12.4],
    [-16.5, 0, 16.0],
    [-12, 0, 15.5],
    [-16.5, 0, 19.5],
    [-22, 0, 18.6],
    [-22, 0, 15.8],
    [-28, 0, 18.0],
    [-28, 0, 15.1],
    [-34, 0, 21.1],
    [-34, 0, 18.2],
    [-40, 0, 20.6],
    [-39, 0, 18.2],
    [-46, 0, 17.3],
    [-45.5, 0, 14.7],
    [-52, 0, 16.8],
    [-58, 0, 16.8],
    [-64, 0, 16.9],
    [-70, 0, 16.9],
    [-76, 0, 17.1],
    [-82, 0, 17.3],
    [-88, 0, 17.4],
    [-94, 0, 17.5],
    [-100, 0, 17.7],
    [-106, 0, 17.8],
    [-112, 0, 17.9],
  ];
  const houseInfos: HouseProps[] = [
    {
      position: [-66, 0, -1.5],
      rotation: (-90 * Math.PI) / 180,
    },
    {
      position: [-68.8, 0, -1.65],
      rotation: (-95 * Math.PI) / 180,
    },
    {
      position: [-71.5, 0, -2],
      rotation: (-99 * Math.PI) / 180,
    },
    {
      position: [-74.2, 0, -2.5],
      rotation: (-100 * Math.PI) / 180,
    },
    {
      position: [-76.5, 0, -3.8],
      rotation: (-136 * Math.PI) / 180,
    },
    {
      position: [-78.6, 0, -5.6],
      rotation: (-128 * Math.PI) / 180,
    },
    {
      position: [-80.8, 0, -7.6],
      rotation: (-140 * Math.PI) / 180,
    },
    {
      position: [61, -0.22, -4.8],
      rotation: (67.1 * Math.PI) / 180,
    },
    {
      position: [56, -0.22, -7],
      rotation: (67.2 * Math.PI) / 180,
    },
    {
      position: [51, -0.22, -9.2],
      rotation: (67.2 * Math.PI) / 180,
    },
    {
      position: [46, -0.22, -11.4],
      rotation: (67.1 * Math.PI) / 180,
    },
    {
      position: [41, -0.22, -13.6],
      rotation: (67.1 * Math.PI) / 180,
    },
    {
      position: [36, -0.22, -15.8],
      rotation: (67.1 * Math.PI) / 180,
    },
  ];

  return (
    <>
      <Landscape debug={debug} />
      {houseInfos.map((props, i) => {
        return <House {...props} key={`house_${i}`} debug={debug} />;
      })}
      {treePositions.map((position, i) => {
        return <Tree position={position} key={`tree_${i}`} debug={debug} />;
      })}
      <ArcDeTriomphe
        position={[-16.6, 0, -23]}
        rotation={(28 * Math.PI) / 180}
        debug={debug}
        setLandmark={setLandmark}
        landmarkLookup={landmarkLookup}
        setThirdPerson={setThirdPerson}
      />
      <EiffelTower
        position={[-41, 0, -16.5]}
        rotation={(90 * Math.PI) / 180}
        debug={debug}
        setLandmark={setLandmark}
        landmarkLookup={landmarkLookup}
        setThirdPerson={setThirdPerson}
      />
    </>
  );
}
