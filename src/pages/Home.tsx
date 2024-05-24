import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import MainScene from "../MainScene";

export default function Home() {
  return (
    <section className="w-full h-screen relative">
      <Canvas
        camera={{ position: [-12, 2.25, 15], near: 0.1, far: 1000 }}
        className="w-full h-screen bg-transparent"
      >
        <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
          <MainScene />
        </Physics>
      </Canvas>

      <p className="measurement-chart">
        {[
          "press space to stop",
          "press enter to move",
          "outside/inside the car",
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
