import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import AnimatedCursor from "./components/AnimatedCursor/AnimatedCursor";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      clickables={[
        "a",
        ".hamburger-react",
        ".overlay",
        ".recharts-surface",
        ".investNowBtn",
      ]}
      innerStyle={{
        backgroundColor: "#000",
      }}
      outerStyle={{
        border: "3px solid #000",
      }}
    />
    <App />
  </React.StrictMode>
);
