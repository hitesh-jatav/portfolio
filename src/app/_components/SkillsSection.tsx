import React from "react";
import {
  Code2,
  LayoutDashboard,
  Server,
  Database,
  GitBranch,
  Cloud,
  Brain,
  Sparkles,
} from "lucide-react";

const categorizedSkills = [
  {
    title: "Languages & Frameworks",
    icon: <Code2 className="w-5 h-5 text-yellow-600" />,
    skills: ["JavaScript", "Python", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    icon: <LayoutDashboard className="w-5 h-5 text-yellow-600" />,
    skills: ["React.js", "Vue.js", "Next.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    icon: <Server className="w-5 h-5 text-yellow-600" />,
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "WebSockets",
      "JWT",
      "OAuth",
    ],
  },
  {
    title: "Cloud & Integrations",
    icon: <Cloud className="w-5 h-5 text-yellow-600" />,
    skills: [
      "AWS S3",
      "AWS EFS",
      "Stripe",
      "Microsoft Clarity",
      "Customer.io",
      "Nodemailer",
      "Multer",
      "csv-writer",
      "Jimp",
    ],
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5 text-yellow-600" />,
    skills: ["MongoDB", "Mongoose", "SQL"],
  },
  {
    title: "Dev Tools & Version Control",
    icon: <GitBranch className="w-5 h-5 text-yellow-600" />,
    skills: ["Git", "BitBucket", "GitHub", "GitLab"],
  },

  {
    title: "Problem Solving & Optimization",
    icon: <Brain className="w-5 h-5 text-yellow-600" />,
    skills: ["Debugging", "Performance Optimization", "Critical Thinking"],
  },
  {
    title: "Soft Skills",
    icon: <Sparkles className="w-5 h-5 text-yellow-600" />,
    skills: ["Quick Learner", "Teamwork", "Communication"],
  },
];

const SkillsSection = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 !w-full">
      {categorizedSkills.map((category, index) => (
        <div
          key={index}
          className="border border-gray-200 shadow-sm p-5 rounded-xl hover:shadow-md transition-all bg-white"
        >
          <div className="flex items-center mb-3">
            {category.icon}
            <h3 className="text-lg font-semibold text-gray-800 ml-2">
              {category.title}
            </h3>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-700 grid grid-cols-2 gap-x-3 gap-y-1 pl-1">
            {category.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
