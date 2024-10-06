import { useState } from "react";

export type LandmarkName =
  | "Arc de Triomphe"
  | "Eiffel Tower"
  | null;

export function LandmarkChart({ name }: { name: LandmarkName }) {
  const [open, setOpen] = useState(true);
  const { title, content, image, url } = getLandmarkInfo(name);
  return (
    <div className="info-chart">
      <span
        className="chart-close-button"
        onClick={() => setOpen((open) => !open)}
      >
        {open ? "[close]" : "[open]"}
      </span>
      <span className="chart-title">
        <a href={url} target={"_blank"}>
          {title}
        </a>
      </span>
      {open && (
        <>
          <img src={image} />
          {["", ...content].map((v, i) => (
            <p key={i}>{v}</p>
          ))}{" "}
        </>
      )}
    </div>
  );
}

function getLandmarkInfo(name: LandmarkName): {
  title: string;
  image: string;
  content: string[];
  url: string;
} {
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
          "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower from 1887 to 1888. (Wikipedia)",
        ],
        image: "/Eiffel_Tower_20051010.jpg",
        url: "https://en.wikipedia.org/wiki/Eiffel_Tower",
      };

    default:
      throw new Error("unreachable code");
  }
}
