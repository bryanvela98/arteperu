import { Button } from "@mui/material";
import "./Checkout.css";

const Checkout = ({ user, handleSubmit, handleChange, orderId, isLoading }) => {
  return (
    <div className="checkout-container">
      {orderId ? (
        <div className="thank-you-message">
          <img
            src="https://ih1.redbubble.net/image.1498975011.2136/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
            alt="Thank you"
            className="thank-you-image"
          />
          <h1>Gracias por tu compra</h1>
          <p>
            Tu número de orden es: <strong>{orderId}</strong>
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <h2>Finalizar Compra</h2>
          <input
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
            name="name"
            className="checkout-input"
          />
          <input
            type="text"
            placeholder="Teléfono"
            onChange={handleChange}
            name="phone"
            className="checkout-input"
          />
          <input
            type="text"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            className="checkout-input"
          />
          <input
            type="text"
            placeholder="Dirección"
            onChange={handleChange}
            name="address"
            className="checkout-input"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="checkout-button"
          >
            Comprar
          </Button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
