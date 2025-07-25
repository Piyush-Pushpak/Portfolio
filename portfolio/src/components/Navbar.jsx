// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = ["home", "about", "skills", "projects", "services", "contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-teal-600 dark:text-orange-400">Piyush Pushpak</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="capitalize hover:text-teal-600 dark:hover:text-orange-400 cursor-pointer transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FiX className="text-2xl text-gray-700 dark:text-white" />
            ) : (
              <FiMenu className="text-2xl text-gray-700 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden flex flex-col gap-4 px-6 pb-6 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900"
        >
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="capitalize block py-2 border-b border-gray-200 dark:border-gray-800 hover:text-teal-600 dark:hover:text-orange-400 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
