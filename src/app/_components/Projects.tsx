"use client";

import React, { useState } from "react";
import { Link } from "lucide-react";
const professionalProjects = [
  {
    title: "Funfull",
    url: "https://funfull.com/",
    description:
      "Funfull is an activity-based business that provides free and discounted access to fun places across seven US regions (MD, DE, VA, IL, MO, PA, ID). Helps families bond over fun activities and create lasting memories away from excessive screen time. Partners include the top entertainment chains such as Chuck E. Cheese, Regal, Cinemark, AMC, and many local family fun centers.",
    highlights: [
      "Funfull is a membership program offering 'all you can play, every day' at various family entertainment locations, including trampoline parks, bowling alleys, arcades, and more, with potential discounts on activities and special offers at places like Chuck E. Cheese and AMC Theatres.",
      "Funfull may offer exclusive discounts and special deals at various fun places. ",
      "Some memberships may include free or discounted movie tickets at major theaters like AMC, Regal Cinemas, and Cinemark. ",
    ],
    tech: ["Nextjs", "Express.js", "MongoDB", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Mloflo",
    url: "https://mloflo.com/",
    description:
      "A cloud-based CRM platform tailored for real estate businesses. Helps manage leads, email marketing, sales pipelines, reporting, and more.",
    highlights: [
      "Loan officers possess knowledge about various loan types and eligibility criteria, helping borrowers navigate the loan application process and choose the most suitable option for their situation.",
      "Loan officers can assist in bridging cash flow gaps and enabling borrowers to seize opportunities that might be otherwise out of reach",
      "Loan officers can simplify the loan application process, making it easier for borrowers to understand and complete the necessary steps.",
      "Loan officers can offer personalized advice based on individual borrower needs and financial situations.",
    ],
    tech: [
      "React.js",
      "Express.js",
      "MongoDB",
      "Bootstrap CSS",
      "Node.js",
      "Chart.js",
    ],
  },
  {
    title: "The Mortgage Processing Company",
    description:
      "Ensures swift, expert mortgage approvals through in-depth reviews by seasoned underwriters, providing a seamless experience for borrowers.",
    highlights: [
      "Operated by a seasoned underwriter with deep expertise in FHA, VA, Conforming, and Jumbo loan approvals.",
      "Every loan undergoes expert-level review by a subject-matter specialist.",
      "Documents are carefully evaluated by trained professionals ensuring sound underwriting decisions.",
      "Red flags are proactively identified and resolved before loan submission.",
      "Streamlined loan process ensures clean approvals and timely closings.",
      "Focused on delivering a smooth, simplified, and pleasant home-buying experience.",
      "Ensures mortgage loans are approved, cleared, and closed efficiently.",
    ],
    tech: [
      "Vue.js",
      "Express.js",
      "csv-writer",
      "Multer",
      "Bootstrap CSS",
      "Nodemailer",
    ],
  },
];

const Projects = () => {
  const [tab, setTab] = useState<"professional" | "personal">("professional");

  return (
    <div className="p-6 w-full">
      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-300">
        <button
          onClick={() => setTab("professional")}
          className={`pb-2 text-lg font-semibold ${
            tab === "professional"
              ? "border-b-2 border-yellow-400 text-yellow-500"
              : "text-gray-600 hover:text-yellow-400"
          }`}
        >
          Professional Projects
        </button>
        <button
          onClick={() => setTab("personal")}
          className={`pb-2 text-lg font-semibold ${
            tab === "personal"
              ? "border-b-2 border-yellow-400 text-yellow-500"
              : "text-gray-600 hover:text-yellow-400"
          }`}
        >
          Personal Projects
        </button>
      </div>

      {/* Professional Projects Content */}
      {tab === "professional" && (
        <div className="grid md:grid-cols-2 gap-6">
          {professionalProjects.map((project, idx) => (
            <div
              key={idx}
              className="border border-gray-300 rounded-xl p-5 bg-white shadow-md transition hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-1 flex place-items-center">
                {project.title}
                {project?.url && (
                  <a href={project.url} target="_">
                    <Link className="mx-2" size={18} />
                  </a>
                )}
              </h3>

              <p className="text-gray-600 mb-3">{project.description}</p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mb-3">
                {project.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Placeholder for Personal Projects */}
      {tab === "personal" && (
        <div className="text-gray-500 text-sm">
          Personal projects coming soon...
        </div>
      )}
    </div>
  );
};

export default Projects;
