import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Cart.css";

const Cart = ({ cart, clearCart, deleteProductById, total }) => {
  const clearWithAlert = () => {
    Swal.fire({
      title: "¿Seguro que desea eliminar items del carrito?",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Si, eliminar",
      denyButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Items del carrito eliminados",
        });
      }
    });
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.map((product) => (
          <div className="cart-item" key={product.id}>
            <img src={product.img} alt={product.title} className="cart-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-title">{product.title}</h3>
              <p>Precio: S/. {product.price}</p>
              <p>Cantidad: {product.quantity}</p>
              <p>Subtotal: S/. {product.price * product.quantity}</p>
              <Button
                onClick={() => deleteProductById(product.id)}
                variant="contained"
                color="error"
              >
                Eliminar
              </Button>
            </div>
          </div>
        ))}
      </div>

      {total > 0 && (
        <div className="cart-actions">
          <Button variant="contained" onClick={clearWithAlert} color="error">
            Limpiar Carrito
          </Button>
          <Link to="/checkout">
            <Button variant="contained" color="primary">
              Finalizar Compra
            </Button>
          </Link>
          <h2 className="cart-total">Total a pagar: S/. {total}</h2>
        </div>
      )}

      {total === 0 && (
        <h2 style={{ height: "600px" }}>
          No tienes items en el carrito todavía.
        </h2>
      )}
    </div>
  );
};

export default Cart;
