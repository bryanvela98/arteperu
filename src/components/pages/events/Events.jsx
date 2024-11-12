import { useState } from "react";

const Events = () => {
  //onSubmit

  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    descripcion: "",
    valueSelect: "",
  });

  const [nombre, setNombre] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nuevoProducto);
  };

  /*   //onChange
  const capturarDescripcion = (e) => {
    setDescription({ ...nuevoProducto, description: e.target.value });
  };

  const capturarNombre = (event) => {
    setNombre({ ...nuevoProducto, nombre: event.target.value });
  }; */

  const handleChange = (e) => {
    //desectructurando
    const { target } = e;
    const { name, value } = target;
    setNuevoProducto({ ...nuevoProducto, [name]: value }); //name present between [] because this property comes as STRING
  };

  /*   const handleSelect = (e) => {
    const { target } = e;
    const { name, value } = target;
    setNuevoProducto({ ...nuevoProducto, [name]: value });
  };
 */
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={handleChange}
          name="nombre"
        />
        <input
          type="text"
          placeholder="Ingrese descripcion"
          onChange={handleChange}
          name="descripcion"
        />

        <select onChange={handleChange} name="valueSelect">
          <option label="1" value="uno"></option>
          <option label="2" value="dos"></option>
          <option label="3" value="tres"></option>
        </select>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Events;
