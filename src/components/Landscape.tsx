import { GroupProps } from "@react-three/fiber";
import { DriftClashUluru, Ground } from "../models";
import { useBox } from "@react-three/cannon";
import * as THREE from "three";
import { useRef } from "react";

export default function Landscape(props: GroupProps) {

  const [box] = useBox<THREE.Group>(
    () => ({
      allowSleep: true,
      args: [100, 100, 0.3],
      mass: 1,
      type: "Static"
    }),
    useRef(null)
  );

  return <Ground {...props} />;
  // return <SportsCarRacingMoscow {...props} />;
  // return <SportCarRacingParis {...props} />;
}
