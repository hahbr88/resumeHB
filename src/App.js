import React, { useState } from "react";
import "./App.scss";
import Button from "./components/Button.jsx";
import ColorBox from "./components/ColorBox";
import Layout from "./components/Layout.jsx";
import ColorContext from "./contexts/darkMode";

function App() {
  return (
    <ColorContext.Provider value={{ color: "red" }}>
      <div className="App">
        <Layout />
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
