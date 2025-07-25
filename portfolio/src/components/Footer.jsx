import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 py-6 text-center">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Piyush Pushpak. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
