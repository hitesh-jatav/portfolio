"use client";
import SideBar from "./_components/SideBar";
import Home from "./_components/Home";
import About from "./_components/About";
import { useState } from "react";
import Projects from "./_components/Projects";
import Contact from "./_components/Contact";

export default function page() {
  const tabs = ["Home", "About", "Projects", "Contact"];
  const [currentTab, setCurrentTab] = useState("Home");
  return (
    <div className="flex w-full">
      <SideBar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {currentTab === "Home" && <Home />}

      {currentTab === "About" && <About />}

      {currentTab === "Projects" && <Projects />}

      {currentTab === "Contact" && <Contact />}
    </div>
  );
}
