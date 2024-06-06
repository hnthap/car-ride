import { usePlane } from "@react-three/cannon";
import { useRef } from "react";
import * as THREE from "three";
import { ObstacleProps } from "../util";
import { BirchTree, OggyHouse } from "../components";
import { Ground as GroundObj, Newground } from "../models";
import BirchTreeComp from "./BirchTree";

export default function Ground() {
  usePlane(
    () => ({
      type: "Static",
      rotation: [-0.5 * Math.PI, 0, 0],
    }),
    useRef(null)
  ); 
  const treeInfos: ({position: [number, number, number]; name: "1" | "2" | "3"})[] = [
    {
      position: [10.8, 0, 6.9],
      name: "1",
    },{
      position: [5.3, 0, 4.65],
      name: "1",
    },{
      position: [-0.2, 0, 2.4],
      name: "1",
    },{
      position: [-5.7, 0, 0.2],
      name: "1",
    },{
      position: [-11.2, 0, 0.1],
      name: "1",
    },{
      position: [-16.7, 0, 0.03],
      name: "1",
    },{
      position: [-22.2, 0, -0.05],
      name: "1",
    },{
      position: [-27.7, 0, -0.13],
      name: "1",
    },{
      position: [-33.2, 0, -0.21],
      name: "1",
    },{
      position: [-38.7, 0, -0.29],
      name: "1",
    },{
      position: [-44.2, 0, -0.37],
      name: "1",
    },{
      position: [-49.7, 0, -0.45],
      name: "1",
    },{
      position: [-55.2, 0, -0.53],
      name: "1",
    },{
      position: [-60.7, 0, -0.61],
      name: "1",
    },
  ]
  const houseInfos: (ObstacleProps & {name: "Oggy"|"Fancy"|"Modern"})[] = [
    {
      position: [-8, 0, -2.2],
      rotation: 0.5*Math.PI/180,
      name: "Oggy"
    },{
      position: [-14, 0, -2.2],
      rotation: 0.5*Math.PI/180,
      name: "Oggy"
    },{
      position: [-20, 0, -2.2],
      rotation: 0.5*Math.PI/180,
      name: "Oggy"
    },{
      position: [-26, 0, -2.2],
      rotation: 0.5*Math.PI/180,
      name: "Oggy"
    },{
      position: [-32, 0, -2.31],
      rotation: -1.55*Math.PI/180,
      name: "Oggy"
    },{
      position: [-38, 0, -2.43],
      rotation: -1.55*Math.PI/180,
      name: "Oggy"
    },{
      position: [-44, 0, -2.55],
      rotation: -1.55*Math.PI/180,
      name: "Oggy"
    },{
      position: [-50, 0, -2.67],
      rotation: -1.55*Math.PI/180,
      name: "Oggy"
    },{
      position: [-56, 0, -2.79],
      rotation: -1.55*Math.PI/180,
      name: "Oggy"
    },{
      position: [-62, 0, -2.91],
      rotation: -1.55*Math.PI/180,
      name: "Oggy"
    },{
      position: [-66, 0, -1.5],
      rotation: -90*Math.PI/180,
      name: "Modern"
    },{
      position: [-68.8, 0, -1.65],
      rotation: -95*Math.PI/180,
      name: "Modern"
    },{
      position: [-71.5, 0, -2],
      rotation: -99*Math.PI/180,
      name: "Modern"
    },{
      position: [-74.2, 0, -2.5],
      rotation: -100*Math.PI/180,
      name: "Modern"
    },{
      position: [-76.5, 0, -3.8],
      rotation: -136*Math.PI/180,
      name: "Modern"
    },{
      position: [-78.6, 0, -5.6],
      rotation: -128*Math.PI/180,
      name: "Modern"
    },{
      position: [-80.8, 0, -7.6],
      rotation: -140*Math.PI/180,
      name: "Modern"
    },{
      position: [-2.2, 0, -0.8],
      rotation: -21.7*Math.PI/180,
      name: "Oggy"
    },{
      position: [3.3, 0, 1.33],
      rotation: -21.2*Math.PI/180,
      name: "Oggy"
    },{
      position: [8.8, 0, 3.47],
      rotation: -21.7*Math.PI/180,
      name: "Oggy"
    },{
      position: [14.3, 0, 5.64],
      rotation: -21.6*Math.PI/180,
      name: "Oggy"
    },{
      position: [10, 0, 28],
      rotation: 65.3*Math.PI/180,
      name: "Fancy"
    },
    {
      position: [4, 0, 25.2],
      rotation: 65.3*Math.PI/180,
      name: "Fancy"
    },{
      position: [61, -0.22, -4.8],
      rotation: 67.1*Math.PI/180,
      name: "Modern"
    },{
      position: [56, -0.22, -7],
      rotation: 67.2*Math.PI/180,
      name: "Modern"
    },{
      position: [51, -0.22, -9.2],
      rotation: 67.2*Math.PI/180,
      name: "Modern"
    },{
      position: [46, -0.22, -11.4],
      rotation: 67.1*Math.PI/180,
      name: "Modern"
    },{
      position: [41, -0.22, -13.6],
      rotation: 67.1*Math.PI/180,
      name: "Modern"
    },{
      position: [36, -0.22, -15.8],
      rotation: 67.1*Math.PI/180,
      name: "Modern"
    },
  ];

  return (
    <>
      {/* <mesh
        position={[0, 0, 0]}
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
      </mesh> */}
      <Newground />
      {houseInfos.map((props, i) => {
        return <OggyHouse {...props} key={i}/>
      })}
      {treeInfos.map((props, i) => {
        return <BirchTreeComp {...props} key={i}/>
      })}
    </>
  );
}
