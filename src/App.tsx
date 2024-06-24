import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import * as dat from "dat.gui";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls as VanillaOrbitControls } from "three-stdlib";
import { LandmarkChart, LandmarkName } from "./LandmarkChart.tsx";
import MainScene from "./MainScene.tsx";

export function App() {
  const [carPosition, setCarPosition] = useState(
    new THREE.Vector3(NaN, NaN, NaN)
  );
  const [landmark, setLandmark] = useState<LandmarkName>(null);
  const debug = useRef(false);
  const orbit = useRef<VanillaOrbitControls>(null);

  useEffect(() => {
    if (orbit.current === null) return;
    const gui = new dat.GUI();
    gui.add(debug, "current").name("Debug mode");
    gui.add(orbit.current!, "autoRotate").name("Auto rotate");
    return () => {
      gui.destroy();
    };
  }, [orbit.current]);

  return (
    <>
      <Canvas shadows style={{ backgroundColor: "lightblue" }}>
        <Physics gravity={[0, -9.81, 0]}>
          <MainScene
            landmark={landmark}
            debug={debug}
            setCarPosition={setCarPosition}
            setLandmark={setLandmark}
            orbit={orbit}
          />
        </Physics>
      </Canvas>
      <div className="measurement-chart">
        {[
          `📍 ${carPosition.x.toFixed(2)} -- ${carPosition.y.toFixed(
            2
          )} -- ${carPosition.z.toFixed(2)}`,
          "press SPACE to brake",
          "press ENTER to change person",
          "press R to reset location",
        ].map((v, i) => (
          <p key={i}>{v}</p>
        ))}
      </div>
      {landmark && <LandmarkChart name={landmark} />}
      <img className="control-keys" src="/controls.png" alt="control keys" />
    </>
  );
}
