import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import * as dat from "dat.gui";
import { useRef, useState } from "react";
import * as THREE from "three";
import MainScene from "../MainScene.tsx";
import { LandmarkInfo, LandmarkName } from "../util.ts";

export default function Home() {
  const [carPosition, setCarPosition] = useState(new THREE.Vector3());
  const debug = useRef(true);
  const [mainGui] = useState(() => {
    try {
      if (mainGui) return;
    } catch {
      // Expected error
    }
    const gui = new dat.GUI();
    gui.add(debug, "current").name("Debug mode");
    return gui;
  });
  const [landmark, setLandmark] = useState<LandmarkName>("Arc de Triomphe");
  return (
    <section className="w-full h-screen relative">
      <Canvas
        shadows
        className="w-full h-screen bg-transparent"
        style={{ backgroundColor: "lightblue" }}
      >
        <Physics gravity={[0, -9.81, 0]}>
          <MainScene
            debug={debug}
            setCarPosition={setCarPosition}
            setLandmark={setLandmark}
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
      {landmark && (
        <LandmarkChart name={landmark} onClose={() => setLandmark(null)} />
      )}
      <img className="control-keys" src="/controls.png" alt="control keys" />
    </section>
  );
}

function LandmarkChart({
  name,
  onClose,
}: {
  name: LandmarkName;
  onClose: () => void;
}) {
  const { title, content, image, url } = getLandmarkInfo(name);
  return (
    <div className="info-chart">
      <span className="chart-close-button" onClick={onClose}>
        {"(close) X"}
      </span>
      <span
        style={{
          fontSize: "20pt",
          fontWeight: "bold",
          paddingBottom: "10pt",
          textIndent: "0%",
        }}
      >
        <a href={url} target={"_blank"}>{title}</a>
      </span>
      <img
        style={{
          paddingLeft: "20%",
          paddingRight: "20%",
          paddingTop: "10px",
          paddingBottom: "5px",
        }}
        src={image}
      />
      {["", ...content].map((v, i) => (
        <p key={i}>{v}</p>
      ))}
    </div>
  );
}

function getLandmarkInfo(name: LandmarkName): LandmarkInfo {
  switch (name) {
    case "Arc de Triomphe":
      return {
        title: "Arc de Triomphe",
        content: [
          "The Arc de Triomphe de l'Étoile, often called simply the Arc de Triomphe, is one of the most famous monuments in Paris, France, standing at the western end of the Champs-Élysées at the centre of Place Charles de Gaulle [...].",
          "The Arc de Triomphe honours those who fought and died for France in the French Revolutionary and Napoleonic Wars, with the names of all French victories and generals inscribed on its inner and outer surfaces. Beneath its vault lies the Tomb of the Unknown Soldier from World War I. (Wikipedia)",
        ],
        image: "/Crowds_of_French_patriots_line_the_Champs_Elysees-edit2.jpg",
        url: "https://en.wikipedia.org/wiki/Arc_de_Triomphe",
      };

    case "Eiffel Tower":
      return {
        title: "Eiffel Tower",
        content: [
          "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower from 1887 to 1889. (Wikipedia)",
        ],
        image:
          "/640px-American_soldiers_watch_as_the_Tricolor_flies_from_the_Eiffel_Tower_again.jpg",
        // "/Eiffel_Tower_20051010.jpg",
        // "/640px-Tour_Eiffel_depuis_un_bateau_sur_la_Seine.jpg",
        url: "https://en.wikipedia.org/wiki/Eiffel_Tower",
      };

    case "Notre-Dame de Paris":
      return {
        title: "Notre-Dame de Paris",
        content: [
          'Notre-Dame de Paris (meaning "Our Lady of Paris"), referred to simply as Notre-Dame, is a medieval Catholic cathedral on the Île de la Cité (an island in the Seine River), in the 4th arrondissement of Paris, France. The cathedral, dedicated to the Virgin Mary, is considered one of the finest examples of French Gothic architecture. ',
          "Several attributes set it apart from the earlier Romanesque style, particularly its pioneering use of the rib vault and flying buttress, its enormous and colourful rose windows, and the naturalism and abundance of its sculptural decoration. Notre-Dame also stands out for its three pipe organs (one historic) and its immense church bells.(Wikipedia) ",
        ],
        image: "/NotreDameDeParis/rozeta.JPG",
        url: "https://www.notredamedeparis.fr/",
      };

    default:
      throw new Error("unreachable code");
  }
}
