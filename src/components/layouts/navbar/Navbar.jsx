import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, tooggleMode, categories }) => {
  return (
    <div className={darkMode ? "container-nav-dark" : "container-nav"}>
      {/* logo or company name */}
      <Link to="/">
        <h3>Tienda Artesanias</h3>
      </Link>
      {/* list of clickeable categories */}
      <ul>
        {categories.map((category) => {
          return (
            <Link key={category.title} to={category.path}>
              {category.title}
            </Link>
          );
        })}
      </ul>
      <button onClick={tooggleMode}>Cambiar Modo</button>

      <Link to="/events">Eventos</Link>

      {/* widget shopping car */}
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default Navbar;
