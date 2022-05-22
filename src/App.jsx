import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import "./App.css";

import Images from "./components/Images";

function App() {
  return (
    <Canvas>
      <ScrollControls pages={2} damping={3}>
        <Scroll>
          <Images />
        </Scroll>
        <Scroll html>
          <h1 style={{ position: "absolute", top: "60vh", left: "1.5em" }}>
            Be
          </h1>
          <h1 style={{ position: "absolute", top: "140vh", left: "20vw" }}>
            Creative
          </h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
