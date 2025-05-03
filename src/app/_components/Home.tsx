"use client";

import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-cente px-4 w-full">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-fit p-[10px] border-[10px] border-yellow-500 shadow-lg">
          <div className="relative w-64 h-96 sm:w-80 sm:h-[30rem] md:w-96 md:h-[36rem]">
            <Image
              src="https://avatars.githubusercontent.com/u/72374919?v=4"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I&rsquo;m Hitesh
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            I&rsquo;m a Full-Stack Developer with over 3 years of experience
            building fast, scalable, and user-friendly web applications using
            the MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js.
            I specialize in crafting intuitive frontends with React.js, Vue.js,
            and Bootstrap, and building robust backend services with a strong
            focus on API design, performance optimization, and security.
            I&rsquo;ve also worked on seamless integrations with third-party
            platforms like Stripe, Customer.io, and Microsoft Clarity. I&rsquo;m
            passionate about clean code, problem-solving, and continuous
            learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
