import { useContext, useState } from "react";
import Checkout from "./Checkout";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../../configFirebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

const CheckoutContainer = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [orderId, setOrderId] = useState(null);

  //flag state
  const [isLoading, setIsLoading] = useState(false);

  //consuming context
  const { cart, getTotalAmount, clearCart } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Saving order to Firebase
    let total = getTotalAmount();
    const order = {
      buyer: user,
      items: cart,
      total: total,
    };
    //firebase
    let refCollection = collection(db, "orders");
    addDoc(refCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });

    order.items.forEach((element) => {
      updateDoc(doc(db, "productos", element.id), {
        stock: element.stock - element.quantity,
      });
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  let childProps = {
    user,
    handleSubmit,
    handleChange,
    orderId,
    isLoading,
  };

  return <Checkout {...childProps} />;
};

export default CheckoutContainer;
