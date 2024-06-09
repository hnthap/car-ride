import { useCompoundBody } from "@react-three/cannon";
import { useRef } from "react";
import { ArcDeTriomphe, House } from "../components";
import { Newground } from "../models";
import Tree, { TreeProps } from "./Tree";
import { HouseProps } from "./House";
import EiffelTower from "./EiffelTower";
import * as THREE from "three";

export default function Ground() {
    const rightlandArgs0: [number, number, number] = [110, 0.1, 100]
    const rightlandArgs1: [number, number, number] = [120, 0.1, 30]
    const rightlandArgs2: [number, number, number, number] = [5, 10, 1, 40]
    const bridgeArgs3_1_1: [number, number, number] = [11, 1, 2]
    const bridgeArgs3_1_2: [number, number, number] = [8.5, 0.06, 2]
    const bridgeArgs3_1_3: [number, number, number] = [8, 0.06, 2]
    const bridgeArgs3_1_4: [number, number, number] = [7.4, 0.06, 2]
    const bridgeArgs3_1_5: [number, number, number] = [6.8, 0.06, 2]
    const bridgeArgs3_1_6: [number, number, number] = [6.2, 0.06, 2]


    const rightlandPos0: [number, number, number] = [-60, -0.05, -48.5]
    const rightlandPos1: [number, number, number] = [40, -0.05, 5]
    const rightlandPos2: [number, number, number] = [-70, rightlandArgs2[2]/2, -58]
    const bridgePos3_1_1: [number, number, number] = [37.7, -0.5, 25.3]
    const bridgePos3_1_2: [number, number, number] = [37.7, 0, 25.3]
    const bridgePos3_1_3: [number, number, number] = [37.7, 0.03, 25.3]
    const bridgePos3_1_4: [number, number, number] = [37.7, 0.06, 25.3]
    const bridgePos3_1_5: [number, number, number] = [37.7, 0.09, 25.3]
    const bridgePos3_1_6: [number, number, number] = [37.7, 0.12, 25.3]

    const rightlandRot0: [number, number, number] = [0, 0*Math.PI/180, 0]
    const rightlandRot1: [number, number, number] = [0, -23*Math.PI/180, 0]
    const bridgeRot3_1: [number, number, number] = [0, 69.69*Math.PI/180, 0]

    const [ref1] = useCompoundBody<THREE.Mesh>(
      () => ({
        mass: 0,
        shapes: [
          {args: rightlandArgs0, position: rightlandPos0, type: "Box",},
          {args: rightlandArgs1, position: rightlandPos1, rotation: rightlandRot1, type: "Box",},
          {args: rightlandArgs2, position: rightlandPos2, type: "Cylinder",},
          {args: bridgeArgs3_1_1, position: bridgePos3_1_1, rotation: bridgeRot3_1, type: "Box",},
          {args: bridgeArgs3_1_2, position: bridgePos3_1_2, rotation: bridgeRot3_1, type: "Box",},
          {args: bridgeArgs3_1_3, position: bridgePos3_1_3, rotation: bridgeRot3_1, type: "Box",},
          {args: bridgeArgs3_1_4, position: bridgePos3_1_5, rotation: bridgeRot3_1, type: "Box",},
          {args: bridgeArgs3_1_5, position: bridgePos3_1_5, rotation: bridgeRot3_1, type: "Box",},
          {args: bridgeArgs3_1_6, position: bridgePos3_1_6, rotation: bridgeRot3_1, type: "Box",},


        ],
        position: [0, 0, 0],
      }),
      useRef(null)
    );

  const treeInfos: TreeProps[] = [
    {
      position: [10.8, 0, 6.9],
      name: "1",
    },
    {
      position: [5.3, 0, 4.65],
      name: "1",
    },
    {
      position: [-0.2, 0, 2.4],
      name: "1",
    },
    {
      position: [-5.7, 0, 0.2],
      name: "1",
    },
    {
      position: [-11.2, 0, 0.1],
      name: "1",
    },
    {
      position: [-16.7, 0, 0.03],
      name: "1",
    },
    {
      position: [-22.2, 0, -0.05],
      name: "1",
    },
    {
      position: [-27.7, 0, -0.13],
      name: "1",
    },
    {
      position: [-33.2, 0, -0.21],
      name: "1",
    },
    {
      position: [-38.7, 0, -0.29],
      name: "1",
    },
    {
      position: [-44.2, 0, -0.37],
      name: "1",
    },
    {
      position: [-49.7, 0, -0.45],
      name: "1",
    },
    {
      position: [-55.2, 0, -0.53],
      name: "1",
    },
    {
      position: [-60.7, 0, -0.61],
      name: "1",
    },
  ];
  const houseInfos: HouseProps[] = [
    {
      position: [-8, 0, -2.2],
      rotation: (0.5 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [-14, 0, -2.2],
      rotation: (0.5 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [-20, 0, -2.2],
      rotation: (0.5 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [-26, 0, -2.2],
      rotation: (0.5 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [-32, 0, -2.31],
      rotation: (-1.55 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [-38, 0, -2.43],
      rotation: (-1.55 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [-44, 0, -2.55],
      rotation: (-1.55 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [-50, 0, -2.67],
      rotation: (-1.55 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [-56, 0, -2.79],
      rotation: (-1.55 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [-62, 0, -2.91],
      rotation: (-1.55 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [-66, 0, -1.5],
      rotation: (-90 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [-68.8, 0, -1.65],
      rotation: (-95 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [-71.5, 0, -2],
      rotation: (-99 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [-74.2, 0, -2.5],
      rotation: (-100 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [-76.5, 0, -3.8],
      rotation: (-136 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [-78.6, 0, -5.6],
      rotation: (-128 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [-80.8, 0, -7.6],
      rotation: (-140 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [-2.2, 0, -0.8],
      rotation: (-21.7 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [3.3, 0, 1.33],
      rotation: (-21.2 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [8.8, 0, 3.47],
      rotation: (-21.7 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [14.3, 0, 5.64],
      rotation: (-21.6 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [10, 0, 28],
      rotation: (65.3 * Math.PI) / 180,
      name: "Fancy",
    },
    {
      position: [4, 0, 25.2],
      rotation: (65.3 * Math.PI) / 180,
      name: "Fancy",
    },
    {
      position: [61, -0.22, -4.8],
      rotation: (67.1 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [56, -0.22, -7],
      rotation: (67.2 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [51, -0.22, -9.2],
      rotation: (67.2 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [46, -0.22, -11.4],
      rotation: (67.1 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [41, -0.22, -13.6],
      rotation: (67.1 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [36, -0.22, -15.8],
      rotation: (67.1 * Math.PI) / 180,
      name: "Modern",
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
      
      <mesh ref={ref1} castShadow receiveShadow>
        <Newground />
        <mesh position={rightlandPos0} rotation={rightlandRot0}>
              <boxGeometry args={rightlandArgs0} />
              <meshBasicMaterial transparent={true} opacity={1} color="orange"/>
        </mesh>
        <mesh position={rightlandPos1} rotation={rightlandRot1}>
              <boxGeometry args={rightlandArgs1} />
              <meshBasicMaterial transparent={true} opacity={1} color="brown"/>
        </mesh>
        <mesh position={rightlandPos2}>
              <cylinderGeometry args={rightlandArgs2} />
              <meshBasicMaterial transparent={true} opacity={1} color="yellow"/>
        </mesh>
        <mesh position={bridgePos3_1_1} rotation={bridgeRot3_1}>
              <boxGeometry args={bridgeArgs3_1_1} />
              <meshBasicMaterial transparent={true} opacity={1} color="gray"/>
        </mesh>
        <mesh position={bridgePos3_1_2} rotation={bridgeRot3_1}>
              <boxGeometry args={bridgeArgs3_1_2} />
              <meshBasicMaterial transparent={true} opacity={1} color="orange"/>
        </mesh>
        <mesh position={bridgePos3_1_3} rotation={bridgeRot3_1}>
              <boxGeometry args={bridgeArgs3_1_3} />
              <meshBasicMaterial transparent={true} opacity={1} color="yellow"/>
        </mesh>
        <mesh position={bridgePos3_1_4} rotation={bridgeRot3_1}>
              <boxGeometry args={bridgeArgs3_1_4} />
              <meshBasicMaterial transparent={true} opacity={1} color="cyan"/>
        </mesh>
        <mesh position={bridgePos3_1_5} rotation={bridgeRot3_1}>
              <boxGeometry args={bridgeArgs3_1_5} />
              <meshBasicMaterial transparent={true} opacity={1} color="pink"/>
        </mesh>
        <mesh position={bridgePos3_1_6} rotation={bridgeRot3_1}>
              <boxGeometry args={bridgeArgs3_1_6} />
              <meshBasicMaterial transparent={true} opacity={1} color="blue"/>
        </mesh>
      </mesh>
      {houseInfos.map((props, i) => {
        return <House {...props} key={i} />;
      })}
      {treeInfos.map((props, i) => {
        return <Tree {...props} key={i} />;
      })}
      <ArcDeTriomphe position={[-16.6, 0, -23]} rotation={28*Math.PI/180} />
      <EiffelTower position={[-41, 0, -16.5]} rotation={90*Math.PI/180}/>
    
    </>
  );
}
