// src/components/ContactForm.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_anjhp2m",     // ✅ Your EmailJS Service ID
        "template_62nq6pq",    // ✅ Your EmailJS Template ID
        form.current,
        "_XH7kYlj0u3n3etp_"    // ✅ Your EmailJS Public Key
      )
      .then(() => {
        setSent(true);
        form.current.reset();

        // ✅ Hide message after 10 seconds
        setTimeout(() => {
          setSent(false);
        }, 10000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setSent(false);
      });
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
          Contact Me
        </h2>

        {/* 📌 Static Info */}
        <div className="space-y-4 text-gray-700 dark:text-gray-300 mb-10">
          <div className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-teal-600 dark:text-orange-400 text-xl" />
            <a
              href="mailto:piyush592005@gmail.com"
              className="hover:underline break-all"
            >
              piyush592005@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaMapMarkerAlt className="text-teal-600 dark:text-orange-400 text-xl" />
            <span>Bihar Sharif, Bihar, India</span>
          </div>

          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/Piyush-Pushpak"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-2xl hover:text-teal-600 dark:hover:text-orange-400 transition" />
            </a>
            <a
              href="https://linkedin.com/in/piyush-pushpak"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-teal-600 dark:hover:text-orange-400 transition" />
            </a>
          </div>
        </div>

        {/* ✍️ Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4 text-left max-w-xl mx-auto"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full transition"
          >
            Send Message
          </button>
          {sent && (
            <p className="text-green-500 mt-2">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
