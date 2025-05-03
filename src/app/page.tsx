"use client";

import { useEffect, useRef, useState } from "react";
import SideBar from "./_components/SideBar";
import Home from "./_components/Home";
import About from "./_components/About";
import Projects from "./_components/Projects";
import Contact from "./_components/Contact";

export default function Page() {
  const [currentTab, setCurrentTab] = useState("Home");
  
  const sectionRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
    Home: useRef<HTMLDivElement | null>(null),
    About: useRef<HTMLDivElement | null>(null),
    Projects: useRef<HTMLDivElement | null>(null),
    Contact: useRef<HTMLDivElement | null>(null),
  };

  // Scroll to section on click
  const handleTabClick = (tab: string) => {
    sectionRefs[tab]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Scroll spy logic using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // section is visible if 60% is on screen
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("data-section");
          if (sectionId) {
            setCurrentTab(sectionId);
          }
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <SideBar currentTab={currentTab} setCurrentTab={handleTabClick} />

      {/* Scrollable content area */}
      <div className="flex-1 h-full overflow-y-auto scroll-smooth p-4 space-y-20  bg-gray-100">
        <div ref={sectionRefs.Home} data-section="Home">
          <Home />
        </div>
        <div ref={sectionRefs.About} data-section="About">
          <About />
        </div>
        <div ref={sectionRefs.Projects} data-section="Projects">
          <Projects />
        </div>
        <div ref={sectionRefs.Contact} data-section="Contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
