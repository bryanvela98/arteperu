import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = ({ cart, clearCart, deleteProductById, total }) => {
  //clear with alert

  const clearWithAlert = () => {
    Swal.fire({
      title: "¿Seguro que desea eliminar items del carrito?",
      showConfirmButton: true,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, eliminar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Items del carrito, eliminados",
        });
      } else if (result.isDenied) {
      }
    });
  };

  return (
    <div>
      <h2>Este es el carrito</h2>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>Titulo: {product.title}</h2>
            <h3>Precio: {product.price}</h3>
            <h3>Cantidad: {product.quantity}</h3>
            <h3>Subtotal: {product.price * product.quantity}</h3>
            <Button onClick={() => deleteProductById(product.id)}>
              Eliminar
            </Button>
          </div>
        );
      })}
      {total > 0 && (
        <>
          <Button
            sx={{ marginTop: 20 }}
            variant="contained"
            onClick={clearWithAlert}
          >
            Limpiar Carrito
          </Button>
          <Link to={"/checkout"}>
            <Button sx={{ marginTop: 20 }} variant="contained">
              Finalizar Compra
            </Button>
          </Link>
        </>
      )}

      {total > 0 ? (
        <h2>El total a pagar es: S/. {total}</h2>
      ) : (
        <h2>No tienes items en el carrito todavia.</h2>
      )}
    </div>
  );
};

export default Cart;
