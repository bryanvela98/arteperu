import { Button } from "@mui/material";
import "./Counter.css";

const Counter = ({ counter, sumar, restar, onAdd }) => {
  return (
    <div>
      <div className="container-main">
        <Button size="small" variant="contained" onClick={sumar}>
          +
        </Button>
        <h3>{counter} </h3>
        <Button size="small" variant="contained" onClick={restar}>
          -
        </Button>
      </div>
      <Button
        variant="contained"
        color="success"
        onClick={() => onAdd(counter)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
