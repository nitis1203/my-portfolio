import React from "react";
import "./App.css";
import Background from "./background/Backround";

const App = () => {
  return (
    <div className="app-wrapper">
      <Background />
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>This is a sample content over the animated background.</p>
      </div>
    </div>
  );
};

export default App;
