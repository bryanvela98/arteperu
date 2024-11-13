import { useState } from "react";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import NavbarContainer from "./components/layouts/navbar/NavbarContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";

/* Routing */
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartContainer from "./components/pages/cart/CartContainer";
import { CartContextProvider } from "./context/CartContext";
import { Toaster } from "sonner";
import CheckoutContainer from "./components/pages/checkout/CheckoutContainer";
import Footer from "./components/layouts/footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true); //boolean

  return (
    <div style={{ backgroundColor: darkMode ? "#c4a061" : "white" }}>
      {/* routing system*/}
      <BrowserRouter>
        {/* Here you can set toaster default props */}
        <Toaster richColors toastOptions={{ duration: 4000 }} />
        {/* Must be implemented on App.jsx to be able to use Sonner */}

        <CartContextProvider>
          <NavbarContainer darkMode={darkMode} setDarkMode={setDarkMode} />
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

            {/* Dinamic route "/:" */}
            <Route path={"*"} element={<h2>404 not found</h2>} />
            {/* default not configured route */}
          </Routes>
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
