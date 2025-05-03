"use client";

import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const mail = "hkjatav@gmail.com";
  const linkedIn = "https://www.linkedin.com/in/hitesh-jatav-816972134/";
  const github = "https://github.com/hitesh-jatav";

  return (
    <div className="min-h-screen bg-white px-6 py-20 flex items-center justify-center w-full">
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Whether you want to collaborate, hire, or just say hello &mdash;
          I&rsquo;m always open to new opportunities and conversations.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Email Card */}
          <div className="bg-gray-50 shadow-md hover:shadow-yellow-300 rounded-2xl p-6 transition duration-300">
            <Mail className="w-7 h-7 mx-auto text-yellow-600 mb-4" />
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Email</h4>
            <a
              href={`mailto:${mail}`}
              className="text-yellow-600 hover:underline break-words"
            >
              {mail}
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-gray-50 shadow-md hover:shadow-yellow-300 rounded-2xl p-6 transition duration-300">
            <Linkedin className="w-7 h-7 mx-auto text-yellow-600 mb-4" />
            <h4 className="text-lg font-semibold text-gray-800 mb-1">
              LinkedIn
            </h4>
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 hover:underline break-words"
            >
              linkedin.com/in/hitesh-jatav
            </a>
          </div>

          {/* GitHub Card */}
          <div className="bg-gray-50 shadow-md hover:shadow-yellow-300 rounded-2xl p-6 transition duration-300">
            <Github className="w-7 h-7 mx-auto text-yellow-600 mb-4" />
            <h4 className="text-lg font-semibold text-gray-800 mb-1">GitHub</h4>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 hover:underline break-words"
            >
              github.com/hitesh-jatav
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 mt-16">
          Built with ❤️ by Hitesh Jatav &mdash; Let&rsquo;s build something
          great together!
        </p>
      </div>
    </div>
  );
};

export default Contact;
