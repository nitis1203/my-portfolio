import React from "react";
import "./App.css";
import Background from "./background/Backround";
import About from "./components/About";

const App = () => {
  return (
    <>
      <header>
        <Background />
      </header>
      <nav></nav>
      <main>
        <About />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
