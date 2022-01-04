import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

import MapChart from "./MapChart";

function App() {
  return (
    <div>
      <MapChart />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
