import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    //add to cart array, not replace actual value
    //manage right cart functionality
    //verify if exist
    let exist = cart.some((element) => element.id === product.id);

    if (exist) {
      let newArray = cart.map((element) => {
        if (element.id === product.id) {
          return { ...element, quantity: product.quantity };
        } else {
          return element;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  //deleteProduct
  const deleteProductById = (id) => {
    let filteredArray = cart.filter((product) => product.id !== id);
    setCart(filteredArray);
  };

  //total due to pay
  const getTotalAmount = () => {
    let totalCarrito = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    return totalCarrito;
  };

  const getTotalItems = () => {
    let totalItems = cart.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
    return totalItems;
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalQuantityById = (id) => {
    let product = cart.find((element) => element.id === id);
    return product ? product.quantity : 1;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteProductById,
    getTotalAmount,
    getTotalItems,
    getTotalQuantityById,
  };
  //value can be access through all CartContext children.
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
