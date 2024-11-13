import { useState } from "react";
import "./navbar.css";
import Navbar from "./Navbar";
import { categories } from "./categories";

const NavbarContainer = ({ darkMode, setDarkMode }) => {
  //Fun that makes switch
  const tooggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Navbar
      darkMode={darkMode}
      tooggleMode={tooggleMode}
      categories={categories}
    />
  );
};

export default NavbarContainer;
