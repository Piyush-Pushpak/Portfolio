// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center text-center md:text-left">
        
        {/* Profile Photo */}
        <img
          src="/Piyush Pic..jpg" // Replace with your actual image path
          alt="Piyush Pushpak"
          className="w-48 h-48 rounded-full mx-auto md:mx-0 shadow-md object-cover"
        />

        {/* About Text + Info */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I'm a motivated developer with experience in Java and full-stack web development. I enjoy building robust web apps using the MERN stack and have a passion for solving real-world problems through code. I’m always eager to learn new technologies and contribute to impactful projects.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Education */}
            <div className="bg-teal-50 dark:bg-gray-800 p-4 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-teal-600 dark:text-orange-400 mb-2">Education</h3>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                <li><strong>B.Tech in ECE</strong> – IIIT Kalyani (Expected 2026)</li>
                <li><strong>Senior Secondary</strong> – RPS School (2020–2022)</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-orange-50 dark:bg-gray-800 p-4 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-orange-600 dark:text-teal-400 mb-2">Soft Skills</h3>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>Problem-solving</li>
                <li>Team collaboration</li>
                <li>Adaptability</li>
                <li>Communication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
