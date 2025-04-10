"use client";

import React, { useState } from "react";
import SkillsSection from "./SkillsSection";

const About = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "skills">(
    "experience"
  );

  const experience = [
    {
      company: "FamFunInd Tech Private Ltd.",
      title: "Software Engineer",
      duration: "Aug 2021 - Present",
      responsibilities: [
        "Developed and maintained web applications using Next.js, React, Node.js, and MongoDB.",
        "Optimized website performance and SEO using SSR and structured metadata.",
        "Integrated Customer.io, Elfsight, Stripe, and Microsoft Clarity.",
        "Implemented responsive UI using Tailwind CSS.",
        "Optimized queries and reduced bundle sizes for performance.",
      ],
    },
    {
      company: "Agami Technologies Pvt. Ltd.",
      title: "Software Developer Associate",
      duration: "Nov 2021 - May 2024",
      responsibilities: [
        "Built full-stack apps with MERN & Vue.js, with seamless frontend-backend integration.",
        "Designed and implemented RESTful APIs with Node.js & Express.js.",
        "Managed data with MongoDB and improved performance through indexing.",
        "Implemented JWT & OAuth-based authentication.",
        "Used tools like Stripe, Nodemailer, Jimp, csv-writer, and Multer.",
        "Enabled real-time features via WebSockets and event-driven architecture.",
        "Collaborated with cross-functional teams and documented codebases effectively.",
      ],
    },
    {
      company: "Ace Analytics",
      title: "Frontend Developer",
      duration: "Jun 2021 - Sep 2021",
      responsibilities: [
        "Worked on Next.js, React, Node.js, and MongoDB-based web apps.",
        "Focused on SEO optimization using SSR and metadata.",
        "Integrated Stripe, Microsoft Clarity, and Customer.io.",
        "Designed clean UIs with Tailwind CSS.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-10 w-full">
      {/* Sticky Tabs */}
      <div className="sticky top-0 z-10 bg-white border-b-2 border-gray-200 pb-2 w-full">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-4 py-2 font-medium ${
              activeTab === "experience"
                ? "text-yellow-600 border-b-4 border-yellow-600"
                : "text-gray-500 hover:text-yellow-600"
            } transition duration-300`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-4 py-2 font-medium ${
              activeTab === "skills"
                ? "text-yellow-600 border-b-4 border-yellow-600"
                : "text-gray-500 hover:text-yellow-600"
            } transition duration-300`}
          >
            Skills
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6 space-y-8 w-full">
        {activeTab === "experience" && (
          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="border border-gray-200 shadow-sm p-6 rounded-xl hover:shadow-md transition-all bg-white"
              >
                <h4 className="text-lg font-semibold text-gray-800">
                  {exp.company}
                </h4>
                <p className="text-sm text-yellow-600 font-medium mb-1">
                  {exp.title}
                </p>
                <p className="text-xs text-gray-500 mb-3">{exp.duration}</p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === "skills" && <SkillsSection />}
      </div>
    </div>
  );
};

export default About;
