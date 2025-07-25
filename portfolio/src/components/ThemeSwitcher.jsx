// src/components/ThemeSwitcher.jsx
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 bg-teal-600 dark:bg-orange-500 text-white p-3 rounded-full shadow-lg hover:scale-105 transition z-50"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeSwitcher;
