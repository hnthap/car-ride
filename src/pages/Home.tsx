import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { Car, Landscape, Loader } from "../components";
import { Sky } from "../models";
import { AppConfig } from "../utils/config";

export default function Home(props: { config: AppConfig }) {
  const { config } = props;
  const skyRef = useRef<THREE.Group>(null);
  return (
    <section className="w-full h-screen relative">
      <Canvas
        shadows
        camera={{ position: [-12, 2.25, 15], near: 0.1, far: 1000 }}
        className="w-full h-screen bg-transparent"
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[10, 10, 10]} intensity={10} castShadow />
          <ambientLight intensity={0.5} />
          <Sky innerRef={skyRef} />
          <Landscape config={config} receiveShadow castShadow />
          <Car config={config} skyRef={skyRef} receiveShadow castShadow />
        </Suspense>
      </Canvas>
      <p className="measurement-chart">
        {[
          "(press SPACE to stop)",
          "(press ENTER to move",
          " outside/inside the car)",
        ]
          .map((value) => <>{value}</>)
          .reduce((prev, curr) => (
            <>
              {prev}
              <br />
              {curr}
            </>
          ))}
      </p>
      <img className="control-keys" src="/controls.png" alt="control keys" />
    </section>
  );
}
