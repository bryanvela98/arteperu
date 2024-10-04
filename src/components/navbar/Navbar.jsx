import "./Navbar.css";

export const Navbar = () => {
  let name = "pepe";
  const saludar = () => {
    console.log("Hola" + name);
  };

  return (
    <div>
      <h1 className="title">{name}</h1>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <button onClick={saludar}></button>
    </div>
  );
};
