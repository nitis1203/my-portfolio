import React from "react";
import "./App.css";
import Background from "./background/Backround";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <header>
        <Background />
      </header>
      <nav></nav>
      <main>
        <About />
        <Skills />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
