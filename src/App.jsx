import { useState } from "react";
import ItemListContainer from "./components/pages/itemListContainer/itemListContainer";
import NavbarContainer from "./components/layouts/navbar/NavbarContainer";
import CounterContainer from "./components/common/counter/CounterContainer";
import PruebaGrid from "./components/common/pruebaGrid/PruebaGrid";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";

/* Routing */
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartContainer from "./components/pages/cart/CartContainer";
import Events from "./components/pages/events/events";
import { CartContextProvider } from "./context/CartContext";
import { Toaster } from "sonner";
import CheckoutContainer from "./components/pages/checkout/CheckoutContainer";

function App() {
  const [montarComponente, setMontarComponente] = useState(true); //boolean
  const montarYdesmontar = () => {
    setMontarComponente(!montarComponente);
  };

  const [saludo, setSaludo] = useState("hola");
  const cambiarSaludo = () => {
    if (saludo === "hola") {
      setSaludo("chau");
    } else {
      setSaludo("hola");
    }
  };
  return (
    <div>
      {/*       {montarComponente ? <ItemListContainer /> : null}
      <button onClick={montarYdesmontar}>Montar/desmontar</button>
      <button onClick={cambiarSaludo}>Cambiar Saludo</button>
      <h4>{saludo}</h4> */}
      {/* <ItemListContainer /> */}
      {/* <ItemDetailContainer /> */}
      {/* <Todos /> */}
      {/* <Users /> */}
      {/* <Comments /> */}
      {/* <CounterContainer /> */}
      {/* <PruebaGrid /> */}

      {/* routing system*/}
      <BrowserRouter>
        {/* Here you can set toaster default props */}
        <Toaster richColors toastOptions={{ duration: 1000 }} />
        {/* Must be implemented on App.jsx to be able to use Sonner */}

        <CartContextProvider>
          <NavbarContainer />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            {/* root route */}
            <Route path={"/cart"} element={<CartContainer />} />
            <Route
              path={"/category/:categoryName"}
              element={<ItemListContainer />}
            />
            <Route
              path={"/productDetail/:id"}
              element={<ItemDetailContainer />}
            />
            {/* checkout route */}
            <Route path={"/checkout"} element={<CheckoutContainer />} />

            {/* events route */}
            <Route path={"/events"} element={<Events />} />

            {/* Dinamic route "/:" */}
            <Route path={"*"} element={<h2>404 not found</h2>} />
            {/* default not configured route */}
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
