// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="pt-20"> {/* Offset for sticky Navbar */}
        <Home />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ThemeSwitcher />
      <ScrollToTop />
    </div>
  );
};

export default App;
