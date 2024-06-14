import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Three from "./component/three";
import Light from "./component/Light";
import SpaceshipModel from "./component/models/SpaceshipModel";
import AnimationGsap from "./component/animation/AnimationGsap";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas id="three-canvas-container" shadows>
        <perspectiveCamera makeDefault position={[0, 0, 0]} />
        <Suspense fallback={null}>
          {/* Default helpers */}
          <axesHelper
            scale={10}
            setColors={["#000000", "#f20000", "#0014f2"]}
          />
          <OrbitControls />

          {/* Components that render some objects on screen */}
          <Three />
          {/* <Light /> */}
          {/* <AnimationGsap /> */}
          {/* <SpaceshipModel /> */}
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
