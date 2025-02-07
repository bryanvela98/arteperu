import { useState } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";
import ToogleButom from "../../common/toogleButom/ToogleButom";
import { CiMenuBurger } from "react-icons/ci";
import "./navbar.css";

//Defining NavbarComponent
const Navbar = ({ darkMode, tooggleMode, categories }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h3>Tienda Artesanias</h3>
        </Link>
        <CiMenuBurger
          onClick={() => setMenuOpen(!menuOpen)}
          className="navbar-toggle"
        />

        <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
          {categories.map((category) => (
            <li key={category.title} className="navbar-item">
              <Link to={category.path} className="navbar-link">
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="navbar-actions">
          <ToogleButom darkMode={darkMode} tooggleMode={tooggleMode} />
          <Link to="/cart" className="navbar-cart">
            <CartWidget />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
