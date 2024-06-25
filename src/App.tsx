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
  const [thirdPerson, setThirdPerson] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (orbit.current === null) return;

    const gui = new dat.GUI();

    // Debug mode
    gui.add(debug, "current").name("Debug mode");

    // Person ("first" or "third")
    gui
      .add({ v: thirdPerson ? "third" : "first" }, "v", ["first", "third"])
      .name("Person")
      .onChange((v) => setThirdPerson(v === "third"));

    // Orbit controls's auto rotate
    const orbitAutoRotate = gui
      .add(orbit.current, "autoRotate")
      .name("Auto rotate");
    let lastOrbitAutoRotate: boolean;
    function handleMouseDown() {
      lastOrbitAutoRotate = orbit.current!.autoRotate;
      orbitAutoRotate.setValue(false);
    }
    function handleMouseUp() {
      orbitAutoRotate.setValue(lastOrbitAutoRotate);
    }
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      gui.destroy();
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [orbit.current, thirdPerson]);

  return (
    <>
      <Canvas shadows style={{ backgroundColor: "lightblue" }}>
        <Physics gravity={[0, -9.81, 0]}>
          <MainScene
            landmark={landmark}
            debug={debug}
            thirdPerson={thirdPerson}
            setThirdPerson={setThirdPerson}
            setCarPosition={setCarPosition}
            setLandmark={setLandmark}
            setMessage={setMessage}
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
      {message && (
        <div className="message">
          <img src="public/warning.png" alt="warning" width={"100px"} />
          <p>{message}</p>
          <p style={{ fontSize: "9pt" }} onClick={() => setMessage(null)}>
            {"[click here to close]"}
          </p>
          <div className="chart-close-button" onClick={() => setMessage(null)}>
            {"[x]"}
          </div>
        </div>
      )}
      {landmark && <LandmarkChart name={landmark} />}
      <img className="control-keys" src="/controls.png" alt="control keys" />
    </>
  );
}
