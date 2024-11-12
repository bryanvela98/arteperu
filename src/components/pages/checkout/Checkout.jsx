const Checkout = ({ user, handleSubmit, handleChange, orderId, isLoading }) => {
  if (isLoading) {
    <h2>Cargando............</h2>;
  }

  return (
    <div>
      {orderId ? (
        <h1>Gracias por tu compra, el numero de orden es: {orderId}</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            onChange={handleChange}
            name="name"
          />
          <input
            type="text"
            placeholder="telefono"
            onChange={handleChange}
            name="phone"
          />
          <input
            type="text"
            placeholder="email"
            onChange={handleChange}
            name="email"
          />
          <button>Comprar</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
