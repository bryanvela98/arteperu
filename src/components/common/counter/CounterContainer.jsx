import { useState } from "react";
import Counter from "./Counter";
import { toast } from "sonner";

const CounterContainer = ({ onAdd, stock, totalItems }) => {
  // States

  const [counter, setCounter] = useState(totalItems); // x is array, x = [variable, function that makes this variable change]

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      toast.error("Se supero el Stock, no se puede agregar mas unidades.", {
        closeButton: true,
        position: "bottom-center",
      });
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      toast.error("No se pueden agregar menos de 1 unidad.", {
        closeButton: true,
        position: "bottom-center",
      });
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
