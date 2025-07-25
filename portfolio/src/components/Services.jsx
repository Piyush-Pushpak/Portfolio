// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaCloud } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-3xl text-orange-500" />,
    title: "Full Stack Development",
    desc: "Design and develop complete web applications using the MERN stack."
  },
  {
    icon: <FaCloud className="text-3xl text-orange-500" />,
    title: "Real-Time Web Apps",
    desc: "Build real-time features with Socket.io for chat, notifications, and more."
  },
  {
    icon: <FaServer className="text-3xl text-orange-500" />,
    title: "REST API Development",
    desc: "Create secure and scalable RESTful APIs using Express.js and MongoDB/MySQL."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-6 bg-gray-100 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition text-left"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-teal-600 dark:text-orange-400 mb-2">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
