// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

const skills = {
  "Frontend": ["JavaScript", "React.js", "Redux", "Tailwind CSS"],
  "Backend": ["Node.js", "Express.js", "REST APIs"],
  "Database": ["MongoDB", "MySQL"],
  "Languages": ["Java", "C"],
  "Tools": ["Git", "GitHub", "Postman"]
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring"
    }
  })
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* Skill Card Template */}
          {[
            {
              title: 'Frontend', skills: [
                { name: 'JavaScript', icon: '💻' },
                { name: 'React.js', icon: '⚛️' },
                { name: 'Redux', icon: '🔁' },
                { name: 'Tailwind CSS', icon: '🎨' }
              ]
            },
            {
              title: 'Backend', skills: [
                { name: 'Node.js', icon: '🟢' },
                { name: 'Express.js', icon: '🚂' },
                { name: 'REST APIs', icon: '🔗' }
              ]
            },
            {
              title: 'Database', skills: [
                { name: 'MongoDB', icon: '🍃' },
                { name: 'MySQL', icon: '🐬' }
              ]
            },
            {
              title: 'Languages', skills: [
                { name: 'Java', icon: '☕' },
                { name: 'C', icon: '🔣' }
              ]
            },
            {
              title: 'Tools', skills: [
                { name: 'Git', icon: '🔧' },
                { name: 'GitHub', icon: '🐱' },
                { name: 'Postman', icon: '📬' }
              ]
            },
          ].map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-teal-600 dark:text-orange-400 mb-4">{category.title}</h3>
              <ul className="space-y-3 text-left text-gray-700 dark:text-gray-300">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-lg">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;
