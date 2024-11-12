import { useState } from "react";
import "./navbar.css";
import Navbar from "./navbar";
import { categories } from "./categories";

const NavbarContainer = () => {
  const [darkMode, setDarkMode] = useState(true);

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
