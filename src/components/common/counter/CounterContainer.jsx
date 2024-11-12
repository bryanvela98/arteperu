import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ onAdd, stock, totalItems }) => {
  // States

  const [counter, setCounter] = useState(totalItems); // x is array, x = [variable, function that makes this variable change]

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("Se supero el stock");
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      alert("No puedes agregar menos de uno.");
    }
  };
  let childProps = {
    counter,
    sumar,
    restar,
    onAdd,
  };
  return <Counter {...childProps} />;
};

export default CounterContainer;
