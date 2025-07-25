// src/components/Home.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-teal-100 dark:from-gray-900 dark:to-gray-800 px-6">
      <div className="text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4"
        >
          Hi, I'm <span className="text-teal-600 dark:text-orange-400">Piyush Pushpak</span>
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
          Full Stack Developer | MERN Stack Enthusiast
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a href="https://github.com/Piyush-Pushpak" target="_blank" rel="noreferrer">
            <FaGithub className="text-3xl text-gray-700 dark:text-white hover:text-teal-600 dark:hover:text-orange-400 transition" />
          </a>
          <a href="https://linkedin.com/in/piyush-pushpak" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-3xl text-gray-700 dark:text-white hover:text-teal-600 dark:hover:text-orange-400 transition" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="https://drive.google.com/file/d/1Oq7TuLBR0jnGnNrjr0C1Dk6rvQRNDB9f/view"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition shadow-md"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-full border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition shadow-md"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
