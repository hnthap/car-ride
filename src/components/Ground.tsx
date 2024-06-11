import { useCompoundBody } from "@react-three/cannon";
import { useRef } from "react";
import { ArcDeTriomphe, House } from "../components";
import { Newground } from "../models";
import Tree, { TreeProps } from "./Tree";
import { HouseProps } from "./House";
import EiffelTower from "./EiffelTower";
import * as THREE from "three";

export default function Ground() {
    const leftlandArgs0: [number, number, number] = [69, 0.1, 50]
    const leftlandArgs1: [number, number, number] = [60, 0.1, 50]
    const leftlandArgs2: [number, number, number] = [18, 0.1, 50]
    const leftlandArgs3: [number, number, number] = [40, 0.1, 17]
    const leftlandArgs4: [number, number, number] = [70, 0.1, 30]
    const leftlandArgs5: [number, number, number] = [36, 0.1, 50]
    const leftlandArgs6: [number, number, number] = [3.5, 0.1, 5]
    const leftlandArgs7: [number, number, number] = [5.5, 0.1, 25]
    const leftlandArgs8: [number, number, number] = [5.5, 0.1, 20]
    const leftlandArgs9: [number, number, number] = [7.5, 0.1, 30]

    const rightlandArgs0: [number, number, number] = [110, 0.1, 100.5]
    const rightlandArgs1: [number, number, number] = [110, 0.1, 25]
    const rightlandArgs2: [number, number, number, number] = [5, 10, 1, 40]
    const rightlandArgs3: [number, number, number] = [24, 0.1, 48]
    const rightlandArgs4: [number, number, number] = [40, 0.1, 130]
    const rightlandArgs5: [number, number, number] = [40, 0.1, 130]
    const rightlandArgs6: [number, number, number] = [15, 0.1, 15]

    const bridgeArgs3_1_1: [number, number, number] = [11, 1, 2]
    const bridgeArgs3_1_2: [number, number, number] = [4, 0.06, 2]
    const bridgeArgs3_1_3: [number, number, number] = [4, 0.06, 2]
    const bridgeArgs3_1_4: [number, number, number] = [2.1, 0.06, 2]

    const bridgeArgs3_2: [number, number, number] = [20, 0.04, 2]

    const bridgeArgs3_3_1: [number, number, number] = [14, 0.06, 2]
    const bridgeArgs3_3_2: [number, number, number] = [4.5, 0.06, 2]
    const bridgeArgs3_3_3: [number, number, number] = [4, 0.06, 2]
    const bridgeArgs3_3_4: [number, number, number] = [4.5, 0.06, 2]
    const bridgeArgs3_3_5: [number, number, number] = [5, 0.06, 2]

    const leftbridgeArgs4_1_1: [number, number, number] = [15, 1, 2]
    const leftbridgeArgs4_1_2: [number, number, number] = [7.5, 0.06, 2]
    const leftbridgeArgs4_1_3: [number, number, number] = [7, 0.06, 2]

    const seablockArgs0: [number, number, number] = [45, 10, 0.01]
    const seablockArgs1: [number, number, number] = [17, 10, 0.01]
    const seablockArgs2: [number, number, number] = [11.5, 10, 0.01]
    const seablockArgs3: [number, number, number] = [18, 10, 0.01]
    const seablockArgs4: [number, number, number] = [59, 10, 0.01]
    const seablockArgs5: [number, number, number] = [44, 10, 0.01]
    const seablockArgs6: [number, number, number] = [3.2, 10, 0.01]
    const seablockArgs7: [number, number, number] = [11, 10, 0.01]
    const seablockArgs8: [number, number, number] = [11, 10, 0.01]
    const seablockArgs9: [number, number, number] = [16, 2, 0.01]
    const seablockArgs10: [number, number, number] = [16, 2, 0.01]
    const seablockArgs11: [number, number, number] = [14, 10, 0.01]
    const seablockArgs12: [number, number, number] = [14, 10, 0.01]

    const leftlandPos0: [number, number, number] = [-81, -0.05, 40.2]
    const leftlandPos1: [number, number, number] = [-39, -0.05, 39]
    const leftlandPos2: [number, number, number] = [-15.5, -0.05, 38.2]
    const leftlandPos3: [number, number, number] = [-14, -0.05, 33.2]
    const leftlandPos4: [number, number, number] = [28, -0.05, 50.55]
    const leftlandPos5: [number, number, number] = [47.6, -0.05, 55.8]
    const leftlandPos6: [number, number, number] = [29.9, -0.05, 31.95]
    const leftlandPos7: [number, number, number] = [66, 0.04, 46.6]
    const leftlandPos8: [number, number, number] = [45.25, 0.01, 37.88]
    const leftlandPos9: [number, number, number] = [5, 0.05, 60.5]

    const rightlandPos0: [number, number, number] = [-60, -0.05, -48.4]
    const rightlandPos1: [number, number, number] = [39.75, -0.05, 8.4]
    const rightlandPos2: [number, number, number] = [-70, rightlandArgs2[2]/2, -58]
    const rightlandPos3: [number, number, number] = [5, -0.26, -48]
    const rightlandPos4: [number, number, number] = [43.15, -0.4, -25.45]
    const rightlandPos5: [number, number, number] = [50, -0.45, -36]
    const rightlandPos6: [number, number, number] = [10, -0.29, -36]

    const bridgePos3_1_1: [number, number, number] = [37.7, -0.5, 25.3]
    const bridgePos3_1_2: [number, number, number] = [38.65, 0.1, 22.7]
    const bridgePos3_1_3: [number, number, number] = [36.6, 0.1, 28.3]
    const bridgePos3_1_4: [number, number, number] = [37.65, 0.2, 25.42]

    const bridgePos3_2: [number, number, number] = [18.7, -0.02, 20]

    const bridgePos3_3_1: [number, number, number] = [-66.4, -0.5, 9]
    const bridgePos3_3_2: [number, number, number] = [-66.2, 0.02, 12]
    const bridgePos3_3_3: [number, number, number] = [-66.2, 0.065, 8]
    const bridgePos3_3_4: [number, number, number] = [-66.2, 0.2, 4]
    const bridgePos3_3_5: [number, number, number] = [-66.3, 0, 14]

    const leftbridgePos4_1_1: [number, number, number] = [14.8, -1.35, 27]
    const leftbridgePos4_1_2: [number, number, number] = [23.2, -0.52, 30.75]
    const leftbridgePos4_1_3: [number, number, number] = [7.6, -0.45, 23.63]

    const seablockPos0: [number, number, number] = [60.8, -0.5, 30.5]
    const seablockPos1: [number, number, number] = [30.7, -0.5, 17]
    const seablockPos2: [number, number, number] = [15.8, -0.5, 10.88]
    const seablockPos3: [number, number, number] = [2, -0.5, 5.88]
    const seablockPos4: [number, number, number] = [-35.7, -0.5, 1.95]
    const seablockPos5: [number, number, number] = [-92.3, -0.5, 1.25]
    const seablockPos6: [number, number, number] = [-68.8, -0.5, 1.2]
    const seablockPos7: [number, number, number] = [38.3, -0.5, 26.6]
    const seablockPos8: [number, number, number] = [36.4, -0.5, 25.9]
    const seablockPos9: [number, number, number] = [19.57, 1, 20.45]
    const seablockPos10: [number, number, number] = [17.8, 1, 19.7]
    const seablockPos11: [number, number, number] = [-65.25, -0.5, 8.3]
    const seablockPos12: [number, number, number] = [-67.2, -0.5, 8.3]

    const leftlandRot0: [number, number, number] = [0, 1.28*Math.PI/180, 0]
    const leftlandRot1: [number, number, number] = [0, 4*Math.PI/180, 0]
    const leftlandRot2: [number, number, number] = [0, -31*Math.PI/180, 0]
    const leftlandRot3: [number, number, number] = [0, 59.5*Math.PI/180, 0]
    const leftlandRot4: [number, number, number] = [0, -24.74*Math.PI/180, 0]
    const leftlandRot5: [number, number, number] = [0, 67*Math.PI/180, 0]
    const leftlandRot6: [number, number, number] = [0, 108.7*Math.PI/180, 0]
    const leftlandRot7: [number, number, number] = [0, 67.2*Math.PI/180, 1.5*Math.PI/180]
    const leftlandRot8: [number, number, number] = [-1*Math.PI/180, 67.2*Math.PI/180, 1.5*Math.PI/180]
    const leftlandRot9: [number, number, number] = [0*Math.PI/180, 65*Math.PI/180, 0*Math.PI/180]

    const rightlandRot0: [number, number, number] = [0, -1*Math.PI/180, 0]
    const rightlandRot1: [number, number, number] = [0, -23*Math.PI/180, 0]
    const rightlandRot3: [number, number, number] = [0*Math.PI/180, -1*Math.PI/180, -1.05*Math.PI/180]
    const rightlandRot4: [number, number, number] = [0*Math.PI/180, -113*Math.PI/180, 1.0*Math.PI/180]
    const rightlandRot5: [number, number, number] = [0*Math.PI/180, -113*Math.PI/180, 0.55*Math.PI/180]
    const rightlandRot6: [number, number, number] = [0*Math.PI/180, -113*Math.PI/180, 0.6*Math.PI/180]

    const bridgeRot3_1_1: [number, number, number] = [0, 69.69*Math.PI/180, 0]
    const bridgeRot3_1_2: [number, number, number] = [0, 69.69*Math.PI/180, -3*Math.PI/180]
    const bridgeRot3_1_3: [number, number, number] = [0, 69.69*Math.PI/180, 3*Math.PI/180]
    const bridgeRot3_1_4: [number, number, number] = [0, 69.69*Math.PI/180, 0]

    const bridgeRot3_2: [number, number, number] = [0, 64*Math.PI/180, 0]

    const bridgeRot3_3_1: [number, number, number] = [0, 90*Math.PI/180, 0]
    const bridgeRot3_3_2: [number, number, number] = [0, 90*Math.PI/180, 1.6*Math.PI/180]
    const bridgeRot3_3_3: [number, number, number] = [0, 90*Math.PI/180, 0]
    const bridgeRot3_3_4: [number, number, number] = [0, 90*Math.PI/180, -1.6*Math.PI/180]
    const bridgeRot3_3_5: [number, number, number] = [0, 90*Math.PI/180, 0*Math.PI/180]

    const bridgeRot4_1: [number, number, number] = [0, -24.3*Math.PI/180, 0]
    const bridgeRot4_2: [number, number, number] = [0, -24.3*Math.PI/180, 7.2*Math.PI/180]
    const bridgeRot4_3: [number, number, number] = [0, -24.3*Math.PI/180, -6.5*Math.PI/180]

    const seablockRot0: [number, number, number] = [0, -23.3*Math.PI/180, 0]
    const seablockRot1: [number, number, number] = [0, -26.3*Math.PI/180, 0]
    const seablockRot2: [number, number, number] = [0, -16.5*Math.PI/180, 0]
    const seablockRot3: [number, number, number] = [0, -22.4*Math.PI/180, 0]
    const seablockRot4: [number, number, number] = [0, -1.04*Math.PI/180, 0]
    const seablockRot5: [number, number, number] = [0, 0.7*Math.PI/180, 0]
    const seablockRot6: [number, number, number] = [0, -7.3*Math.PI/180, 0]
    const seablockRot7: [number, number, number] = [0, 69.69*Math.PI/180, 0]
    const seablockRot8: [number, number, number] = [0, 69.69*Math.PI/180, 0]
    const seablockRot9: [number, number, number] = [0, 64*Math.PI/180, 0]
    const seablockRot10: [number, number, number] = [0, 64*Math.PI/180, 0]
    const seablockRot11: [number, number, number] = [0, 89.7*Math.PI/180, 0]
    const seablockRot12: [number, number, number] = [0, 89.7*Math.PI/180, 0]

    const [ref1] = useCompoundBody<THREE.Mesh>(
      () => ({
        mass: 0,
        shapes: [
          {args: rightlandArgs0, position: rightlandPos0, rotation: rightlandRot0 ,type: "Box",},
          {args: rightlandArgs1, position: rightlandPos1, rotation: rightlandRot1, type: "Box",},
          {args: rightlandArgs2, position: rightlandPos2, type: "Cylinder",},
          {args: rightlandArgs3, position: rightlandPos3, rotation: rightlandRot3, type: "Box",},
          {args: rightlandArgs4, position: rightlandPos4, rotation: rightlandRot4, type: "Box",},
          {args: rightlandArgs5, position: rightlandPos5, rotation: rightlandRot5, type: "Box",},
          {args: rightlandArgs6, position: rightlandPos6, rotation: rightlandRot6, type: "Box",},

          {args: leftlandArgs0, position: leftlandPos0, rotation: leftlandRot0, type: "Box",},
          {args: leftlandArgs1, position: leftlandPos1, rotation: leftlandRot1, type: "Box",},
          {args: leftlandArgs2, position: leftlandPos2, rotation: leftlandRot2, type: "Box",},
          {args: leftlandArgs3, position: leftlandPos3, rotation: leftlandRot3, type: "Box",},
          {args: leftlandArgs4, position: leftlandPos4, rotation: leftlandRot4, type: "Box",},
          {args: leftlandArgs5, position: leftlandPos5, rotation: leftlandRot5, type: "Box",},
          {args: leftlandArgs6, position: leftlandPos6, rotation: leftlandRot6, type: "Box",},
          {args: leftlandArgs7, position: leftlandPos7, rotation: leftlandRot7, type: "Box",},
          {args: leftlandArgs8, position: leftlandPos8, rotation: leftlandRot8, type: "Box",},
          {args: leftlandArgs9, position: leftlandPos9, rotation: leftlandRot9, type: "Box",},

          {args: bridgeArgs3_1_1, position: bridgePos3_1_1, rotation: bridgeRot3_1_1, type: "Box",},
          {args: bridgeArgs3_1_2, position: bridgePos3_1_2, rotation: bridgeRot3_1_2, type: "Box",},
          {args: bridgeArgs3_1_3, position: bridgePos3_1_3, rotation: bridgeRot3_1_3, type: "Box",},
          {args: bridgeArgs3_1_4, position: bridgePos3_1_4, rotation: bridgeRot3_1_4, type: "Box",},

          {args: bridgeArgs3_2, position: bridgePos3_2, rotation: bridgeRot3_2, type: "Box",},

          {args: bridgeArgs3_3_1, position: bridgePos3_3_1, rotation: bridgeRot3_3_1, type: "Box",},
          {args: bridgeArgs3_3_2, position: bridgePos3_3_2, rotation: bridgeRot3_3_2, type: "Box",},
          {args: bridgeArgs3_3_3, position: bridgePos3_3_3, rotation: bridgeRot3_3_3, type: "Box",},
          {args: bridgeArgs3_3_4, position: bridgePos3_3_4, rotation: bridgeRot3_3_4, type: "Box",},
          {args: bridgeArgs3_3_5, position: bridgePos3_3_5, rotation: bridgeRot3_3_5, type: "Box",},

          {args:leftbridgeArgs4_1_1, position: leftbridgePos4_1_1, rotation: bridgeRot4_1, type: "Box",},
          {args:leftbridgeArgs4_1_2, position: leftbridgePos4_1_2, rotation: bridgeRot4_2, type: "Box",},
          {args:leftbridgeArgs4_1_3, position: leftbridgePos4_1_3, rotation: bridgeRot4_3, type: "Box",},

          {args: seablockArgs0, position: seablockPos0, rotation: seablockRot0, type: "Box",},
          {args: seablockArgs1, position: seablockPos1, rotation: seablockRot1, type: "Box",},
          {args: seablockArgs2, position: seablockPos2, rotation: seablockRot2, type: "Box",},
          {args: seablockArgs3, position: seablockPos3, rotation: seablockRot3, type: "Box",},
          {args: seablockArgs4, position: seablockPos4, rotation: seablockRot4, type: "Box",},
          {args: seablockArgs5, position: seablockPos5, rotation: seablockRot5, type: "Box",},
          {args: seablockArgs6, position: seablockPos6, rotation: seablockRot6, type: "Box",},
          {args: seablockArgs7, position: seablockPos7, rotation: seablockRot7, type: "Box",},
          {args: seablockArgs8, position: seablockPos8, rotation: seablockRot8, type: "Box",},
          {args: seablockArgs9, position: seablockPos9, rotation: seablockRot9, type: "Box",},
          {args: seablockArgs10, position: seablockPos10, rotation: seablockRot10, type: "Box",},
          {args: seablockArgs11, position: seablockPos11, rotation: seablockRot11, type: "Box",},
          {args: seablockArgs12, position: seablockPos12, rotation: seablockRot12, type: "Box",},

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
        <mesh position={rightlandPos3} rotation={rightlandRot3}>
              <boxGeometry args={rightlandArgs3} />
              <meshBasicMaterial transparent={true} opacity={1} color="blue"/>
        </mesh>
        <mesh position={rightlandPos2}>
              <cylinderGeometry args={rightlandArgs2} />
              <meshBasicMaterial transparent={true} opacity={1} color="yellow"/>
        </mesh>
        <mesh position={rightlandPos4} rotation={rightlandRot4}>
              <boxGeometry args={rightlandArgs4} />
              <meshBasicMaterial transparent={true} opacity={1} color="yellow"/>
        </mesh>
        <mesh position={rightlandPos5} rotation={rightlandRot5} visible={true}>
              <boxGeometry args={rightlandArgs5} />
              <meshBasicMaterial transparent={true} opacity={1} color="pink"/>
        </mesh>
        <mesh position={rightlandPos6} rotation={rightlandRot6} visible={true}>
              <boxGeometry args={rightlandArgs6} />
              <meshBasicMaterial transparent={true} opacity={1} color="brown"/>
        </mesh>

        <mesh position={leftlandPos0} rotation={leftlandRot0} visible={true}>
              <boxGeometry args={leftlandArgs0} />
              <meshBasicMaterial transparent={true} opacity={1} color="brown"/>
        </mesh>
        <mesh position={leftlandPos1} rotation={leftlandRot1} visible={true}>
              <boxGeometry args={leftlandArgs1} />
              <meshBasicMaterial transparent={true} opacity={1} color="cyan"/>
        </mesh>
        <mesh position={leftlandPos2} rotation={leftlandRot2} visible={true}>
              <boxGeometry args={leftlandArgs2} />
              <meshBasicMaterial transparent={true} opacity={1} color="green"/>
        </mesh>
        <mesh position={leftlandPos3} rotation={leftlandRot3} visible={true}>
              <boxGeometry args={leftlandArgs3} />
              <meshBasicMaterial transparent={true} opacity={1} color="gray"/>
        </mesh>
        <mesh position={leftlandPos4} rotation={leftlandRot4} visible={true}>
              <boxGeometry args={leftlandArgs4} />
              <meshBasicMaterial transparent={true} opacity={1} color="red"/>
        </mesh>
        <mesh position={leftlandPos5} rotation={leftlandRot5} visible={true}>
              <boxGeometry args={leftlandArgs5} />
              <meshBasicMaterial transparent={true} opacity={1} color="pink"/>
        </mesh>
        <mesh position={leftlandPos6} rotation={leftlandRot6} visible={true}>
              <boxGeometry args={leftlandArgs6} />
              <meshBasicMaterial transparent={true} opacity={1} color="brown"/>
        </mesh>
        <mesh position={leftlandPos7} rotation={leftlandRot7} visible={true}>
              <boxGeometry args={leftlandArgs7} />
              <meshBasicMaterial transparent={true} opacity={1} color="red"/>
        </mesh>
        <mesh position={leftlandPos8} rotation={leftlandRot8} visible={true}>
              <boxGeometry args={leftlandArgs8} />
              <meshBasicMaterial transparent={true} opacity={1} color="red"/>
        </mesh>
        <mesh position={leftlandPos9} rotation={leftlandRot9} visible={true}>
              <boxGeometry args={leftlandArgs9} />
              <meshBasicMaterial transparent={true} opacity={1} color="blue"/>
        </mesh>

        <mesh position={bridgePos3_1_1} rotation={bridgeRot3_1_1}>
              <boxGeometry args={bridgeArgs3_1_1} />
              <meshBasicMaterial transparent={true} opacity={1} color="gray"/>
        </mesh>
        <mesh position={bridgePos3_1_2} rotation={bridgeRot3_1_2}>
              <boxGeometry args={bridgeArgs3_1_2} />
              <meshBasicMaterial transparent={true} opacity={1} color="orange"/>
        </mesh>
        <mesh position={bridgePos3_1_3} rotation={bridgeRot3_1_3}>
              <boxGeometry args={bridgeArgs3_1_3} />
              <meshBasicMaterial transparent={true} opacity={1} color="orange"/>
        </mesh>
        <mesh position={bridgePos3_1_4} rotation={bridgeRot3_1_4}>
              <boxGeometry args={bridgeArgs3_1_4} />
              <meshBasicMaterial transparent={true} opacity={1} color="orange"/>
        </mesh>

        <mesh position={bridgePos3_2} rotation={bridgeRot3_2}>
              <boxGeometry args={bridgeArgs3_2} />
              <meshBasicMaterial transparent={true} opacity={1} color="gray"/>
        </mesh>

        <mesh position={bridgePos3_3_1} rotation={bridgeRot3_3_1}>
              <boxGeometry args={bridgeArgs3_3_1} />
              <meshBasicMaterial transparent={true} opacity={1} color="gray"/>
        </mesh>
        <mesh position={bridgePos3_3_2} rotation={bridgeRot3_3_2}>
              <boxGeometry args={bridgeArgs3_3_2} />
              <meshBasicMaterial transparent={true} opacity={1} color="orange"/>
        </mesh>
        <mesh position={bridgePos3_3_3} rotation={bridgeRot3_3_3}>
              <boxGeometry args={bridgeArgs3_3_3} />
              <meshBasicMaterial transparent={true} opacity={1} color="orange"/>
        </mesh>
        <mesh position={bridgePos3_3_4} rotation={bridgeRot3_3_4}>
              <boxGeometry args={bridgeArgs3_3_4} />
              <meshBasicMaterial transparent={true} opacity={1} color="orange"/>
        </mesh>
        <mesh position={bridgePos3_3_5} rotation={bridgeRot3_3_5}>
              <boxGeometry args={bridgeArgs3_3_5} />
              <meshBasicMaterial transparent={true} opacity={1} color="orange"/>
        </mesh>
        <mesh position={leftbridgePos4_1_1} rotation={bridgeRot4_1}>
              <boxGeometry args={leftbridgeArgs4_1_1} />
              <meshBasicMaterial transparent={true} opacity={1} color="gray"/>
        </mesh>
        <mesh position={leftbridgePos4_1_2} rotation={bridgeRot4_2}>
              <boxGeometry args={leftbridgeArgs4_1_2} />
              <meshBasicMaterial transparent={true} opacity={1} color="orange"/>
        </mesh>
        <mesh position={leftbridgePos4_1_3} rotation={bridgeRot4_3}>
              <boxGeometry args={leftbridgeArgs4_1_3} />
              <meshBasicMaterial transparent={true} opacity={1} color="orange"/>
        </mesh>

        <mesh position={seablockPos0} rotation={seablockRot0}>
              <boxGeometry args={seablockArgs0} />
              <meshBasicMaterial transparent={true} opacity={1} color="red"/>
        </mesh>
        <mesh position={seablockPos1} rotation={seablockRot1}>
              <boxGeometry args={seablockArgs1} />
              <meshBasicMaterial transparent={true} opacity={1} color="red"/>
        </mesh>
        <mesh position={seablockPos2} rotation={seablockRot2}>
              <boxGeometry args={seablockArgs2} />
              <meshBasicMaterial transparent={true} opacity={1} color="red"/>
        </mesh>
        <mesh position={seablockPos3} rotation={seablockRot3}>
              <boxGeometry args={seablockArgs3} />
              <meshBasicMaterial transparent={true} opacity={1} color="red"/>
        </mesh>
        <mesh position={seablockPos4} rotation={seablockRot4}>
              <boxGeometry args={seablockArgs4} />
              <meshBasicMaterial transparent={true} opacity={1} color="red"/>
        </mesh>
        <mesh position={seablockPos5} rotation={seablockRot5}>
              <boxGeometry args={seablockArgs5} />
              <meshBasicMaterial transparent={true} opacity={1} color="red"/>
        </mesh>
        <mesh position={seablockPos6} rotation={seablockRot6}>
              <boxGeometry args={seablockArgs6} />
              <meshBasicMaterial transparent={true} opacity={1} color="red"/>
        </mesh>
        <mesh position={seablockPos7} rotation={seablockRot7}>
              <boxGeometry args={seablockArgs7} />
              <meshBasicMaterial transparent={true} opacity={1} color="red"/>
        </mesh>
        <mesh position={seablockPos8} rotation={seablockRot8}>
              <boxGeometry args={seablockArgs8} />
              <meshBasicMaterial transparent={true} opacity={1} color="red"/>
        </mesh>
        <mesh position={seablockPos9} rotation={seablockRot9}>
              <boxGeometry args={seablockArgs9} />
              <meshBasicMaterial transparent={true} opacity={1} color="red"/>
        </mesh>
        <mesh position={seablockPos10} rotation={seablockRot10}>
              <boxGeometry args={seablockArgs10} />
              <meshBasicMaterial transparent={true} opacity={1} color="red"/>
        </mesh>
        <mesh position={seablockPos11} rotation={seablockRot11}>
              <boxGeometry args={seablockArgs11} />
              <meshBasicMaterial transparent={true} opacity={1} color="red"/>
        </mesh>
        <mesh position={seablockPos12} rotation={seablockRot12}>
              <boxGeometry args={seablockArgs12} />
              <meshBasicMaterial transparent={true} opacity={1} color="red"/>
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
