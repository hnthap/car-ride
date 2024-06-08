import * as THREE from "three";
import { usePlane } from "@react-three/cannon";
import { useRef } from "react";
import { Newground } from "../models";

export default function Landscape() {
  usePlane<THREE.Group>(
    () => ({
      type: "Static",
      rotation: [-Math.PI / 2, 0, 0],
    }),
    useRef(null)
  );
  return <Newground />;
}
