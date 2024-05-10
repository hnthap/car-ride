/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: kevin (ケビン) (https://sketchfab.com/sohyalebret)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bugatti-chiron-b28585c3e5bc4fc78db39d80fcd6b604
Title: Bugatti chiron
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import scene from "/Bugatti.glb";

export default function Bugatti(props) {
  const { nodes, materials } = useGLTF(scene);
  return (
    <group
      {...props}
      dispose={null}
      ref={props.innerRef}
      position={[-12, 0, 15]}
      rotation={[0, (140 * Math.PI) / 180, 0]}
      scale={1.9}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.12}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Base_Material}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.Grille1_Material}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Grille3_Material}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.EXT_PLATE_plastic}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.Glass_frontlights}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.Grille2_Material}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.SeatBelt_Material}
        />
        <mesh geometry={nodes.Object_9.geometry} material={materials.emblem} />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.int_circle}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.material_35}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.glass_inside1}
        />
        <mesh geometry={nodes.Object_13.geometry} material={materials.carpet} />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.light_niz_rear}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.rear_glass}
        />
        <mesh geometry={nodes.Object_16.geometry} material={materials.misc} />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.spoiler_down}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.undercarriage}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials.Badge_Material}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials.Carbon1_Material}
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials.Coloured_Material}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials.Coloured_Material}
        />
        <mesh
          geometry={nodes.Object_23.geometry}
          material={materials.Coloured_Material}
        />
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials.Brake_Disk_rear}
        />
        <mesh
          geometry={nodes.Object_25.geometry}
          material={materials.Brake_Disk}
        />
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials.Details}
        />
        <mesh
          geometry={nodes.Object_27.geometry}
          material={materials.Light_Material}
        />
        <mesh
          geometry={nodes.Object_28.geometry}
          material={materials.Interior_Material}
        />
        <mesh
          geometry={nodes.Object_29.geometry}
          material={materials.Glass_Material}
        />
        <mesh
          geometry={nodes.Object_30.geometry}
          material={materials.EXT_Caliper}
        />
        <mesh
          geometry={nodes.Object_31.geometry}
          material={materials.Window_Material1}
        />
        <mesh geometry={nodes.Object_32.geometry} material={materials.black} />
        <mesh
          geometry={nodes.Object_33.geometry}
          material={materials.alpha_int}
        />
        <mesh
          geometry={nodes.Object_34.geometry}
          material={materials.Window_Material}
        />
        <mesh
          geometry={nodes.Object_35.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Object_36.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Object_37.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Object_38.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Object_39.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Object_40.geometry}
          material={materials.material}
        />
        <mesh geometry={nodes.Object_41.geometry} material={materials.Tyre} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.black2} />
        <mesh
          geometry={nodes.Object_43.geometry}
          material={materials.carbon_int}
        />
        <mesh
          geometry={nodes.Object_44.geometry}
          material={materials.blur_rim}
        />
        <mesh
          geometry={nodes.Object_45.geometry}
          material={materials.blur_rim}
        />
        <mesh geometry={nodes.Object_46.geometry} material={materials.body} />
        <mesh
          geometry={nodes.Object_47.geometry}
          material={materials.bump_plastic5_cp}
        />
        <mesh
          geometry={nodes.Object_48.geometry}
          material={materials.disc_hub_metal}
        />
        <mesh geometry={nodes.Object_49.geometry} material={materials.body2} />
        <mesh
          geometry={nodes.Object_50.geometry}
          material={materials.leather}
        />
        <mesh
          geometry={nodes.Object_51.geometry}
          material={materials.leather}
        />
        <mesh
          geometry={nodes.Object_52.geometry}
          material={materials.chrome3}
        />
        <mesh
          geometry={nodes.Object_53.geometry}
          material={materials.glass_inside}
        />
        <mesh
          geometry={nodes.Object_54.geometry}
          material={materials.metal_int}
        />
        <mesh
          geometry={nodes.Object_55.geometry}
          material={materials.metal_int}
        />
        <mesh
          geometry={nodes.Object_56.geometry}
          material={materials.mirrors}
        />
        <mesh
          geometry={nodes.Object_57.geometry}
          material={materials.rim_screws}
        />
        <mesh
          geometry={nodes.Object_58.geometry}
          material={materials.rim_screws}
        />
        <mesh
          geometry={nodes.Object_59.geometry}
          material={materials.rim_screws}
        />
        <mesh
          geometry={nodes.Object_60.geometry}
          material={materials.rim_screws}
        />
        <mesh
          geometry={nodes.Object_61.geometry}
          material={materials.rim_screws}
        />
        <mesh
          geometry={nodes.Object_62.geometry}
          material={materials.strelka}
        />
        <mesh geometry={nodes.Object_63.geometry} material={materials.tacho} />
        <mesh
          geometry={nodes.Object_64.geometry}
          material={materials.tacho_red}
        />
      </group>
    </group>
  );
}
