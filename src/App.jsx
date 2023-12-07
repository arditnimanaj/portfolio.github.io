import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hero from "./Hero";
import SideBar from "./SideBar";

// import "./index.css";
import "./App.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className=" bg-[#1F2937] flex">
      <SideBar />
      <div className="flex flex-col w-full">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
