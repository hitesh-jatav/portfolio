"use client";

import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const tabs = ["Home", "About", "Projects", "Contact"];

const SideBar = ({
  setCurrentTab,
  currentTab,
}: {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mail = "hkjatav@gmail.com";
  const linkedIn = "https://www.linkedin.com/in/hitesh-jatav-816972134/";
  const github = "https://github.com/hitesh-jatav";

  // Detect screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md:breakpoint
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-screen">
      {/* Sidebar Container */}
      <div
        className={`h-full bg-gray-900 text-white flex flex-col justify-between overflow-hidden transition-[width] duration-500 ease-in-out ${
          collapsed ? "w-1" : "w-64"
        }`}
      >
        {/* Sidebar Content */}
        <div
          className={`flex flex-col justify-between h-full transition-opacity duration-300 ${
            collapsed ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="p-4">
            <h1 className="text-2xl font-bold border-b-2 border-yellow-400 pb-2 mb-6">
              Hitesh
            </h1>

            <ul className="space-y-2 mt-4">
              {tabs.map((tab) => (
                <li
                  key={tab}
                  onClick={() => {
                    setCurrentTab(tab);
                    if (isMobile) setCollapsed(true); // Only collapse if mobile
                  }}
                  className={`cursor-pointer px-4 py-2 transition-colors duration-200 ${
                    currentTab === tab
                      ? "bg-yellow-400 text-black rounded-none"
                      : "hover:bg-gray-800 rounded-none"
                  }`}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center items-center space-x-4 p-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <Github size={20} />
            </a>
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${mail}`} className="hover:text-yellow-400">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={`absolute top-4 ${
          collapsed ? "left-1.5" : "left-64"
        } transform -translate-x-1/2 bg-gray-800 border border-gray-700 text-white p-1 rounded-none hover:bg-yellow-400 hover:text-black transition-all duration-300 z-10`}
      >
        {collapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
      </button>
    </div>
  );
};

export default SideBar;
