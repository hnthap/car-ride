import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import * as dat from "dat.gui";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls as VanillaOrbitControls } from "three-stdlib";
import { LandmarkChart, LandmarkName } from "./LandmarkChart.tsx";
import MainScene from "./MainScene.tsx";
import { useProgress } from "@react-three/drei";
import { useMessages } from "./hooks/useMessages.ts";

export function App() {
  const [carPosition, setCarPosition] = useState(
    new THREE.Vector3(NaN, NaN, NaN)
  );
  const [landmark, setLandmark] = useState<LandmarkName>(null);
  const debug = useRef(false);
  const orbit = useRef<VanillaOrbitControls>(null);
  const [thirdPerson, setThirdPerson] = useState(false);
  const [message, setMessage, subMessage] = useMessages();
  const [loading, setLoading] = useState<string | null>(null);
  const { progress, item } = useProgress();

  const authors: {
    className: "profile-1" | "profile-2" | "profile-3";
    github: string;
    profileUri: string;
    alt: string;
  }[] = [
    {
      github: "hnthap",
      profileUri: "https://avatars.githubusercontent.com/u/94937751?v=4",
      className: "profile-1",
      alt: "Huynh Nhan Thap",
    },
    {
      github: "VuNamPhuong",
      profileUri: "https://avatars.githubusercontent.com/u/96564836?v=4",
      className: "profile-2",
      alt: "Vu Nam Phuong",
    },
    {
      github: "daccuong-uit",
      profileUri: "https://avatars.githubusercontent.com/u/96415329?v=4",
      className: "profile-3",
      alt: "Nguyen Dac Cuong",
    },
  ];

  useEffect(() => {
    const s: string = item.startsWith("/")
      ? `Loading ${item.split("/").pop()} ${progress.toFixed(1)} %`
      : `Loading ${progress.toFixed(1)} %`;
    setLoading(progress === 100 ? null : s);
  }, [progress, item]);

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
          "press WASD to move",
          "press SPACE to brake",
          "press ENTER to change person",
          "press R to reset location",
        ].map((v, i) => (
          <p key={i}>{v}</p>
        ))}
      </div>
      {loading && <div className="loading">{loading}</div>}
      {message && (
        <div className="message">
          <img src="/warning.png" alt="warning" width={"100px"} />
          <p>{message}</p>
          <p>{subMessage}</p>
          <div className="chart-close-button" onClick={() => setMessage(null)}>
            {"[x]"}
          </div>
        </div>
      )}
      {landmark && <LandmarkChart name={landmark} />}
      <a target="_blank" href="https://github.com/hnthap/car-ride">
        <img className="logo-1" src="/github.png" alt="GitHub" />
      </a>
      {authors.map(({ github, className, profileUri, alt }, i) => (
        <a target="_blank" href={`https://github.com/${github}`} key={i}>
          <img className={className + " profile"} src={profileUri} alt={alt} />
        </a>
      ))}
      <img className="control-keys" src="/controls.png" alt="control keys" />
    </>
  );
}
