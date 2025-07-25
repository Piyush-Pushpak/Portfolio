// src/components/Projects.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Wander Lust",
    tech: "HTML, CSS, JavaScript, Node.js, Express.js, MongoDB",
    description: "A travel booking platform like Airbnb with secure authentication, user listings, and reviews.",
    live: "https://airbnb-project-xkcy.onrender.com/listings",
    github: "https://github.com/Piyush-Pushpak/Wander-Lust-project.git"
  },
  {
    title: "Chatify",
    tech: "MERN, Socket.io, Zustand, JWT, Tailwind CSS, DaisyUI",
    description: "Real-time chat app with JWT-based auth, online user status, and Zustand for state management.",
    live: "https://chatify-u3te.onrender.com/login",
    github: "https://github.com/Piyush-Pushpak/chatify.git"
  },
  {
    title: "React Quiz App",
    tech: "React, Tailwind CSS, REST API",
    description: "Responsive quiz app with a countdown timer, score tracking, answer editing, and early submission.",
    live: null,
    github: "https://github.com/Piyush-Pushpak/Quiz-Web.git"
  }
];

const Projects = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="py-16 px-6 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">Projects</h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-teal-600 dark:text-orange-400">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">{project.description}</p>
              <button
                onClick={() => setActive(project)}
                className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition"
              >
                Preview
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {active && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-[90%] max-w-lg relative shadow-xl">
              <button
                onClick={() => setActive(null)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold text-teal-600 dark:text-orange-400 mb-2">{active.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">{active.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4"><strong>Tech Stack:</strong> {active.tech}</p>
              <div className="flex gap-4 justify-end">
                {active.live && (
                  <a
                    href={active.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={active.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-teal-600 text-teal-600 rounded hover:bg-teal-600 hover:text-white transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
