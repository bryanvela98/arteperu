import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"; //Dimanic Routes
import { CartContext } from "../../../context/CartContext";
import { toast } from "sonner";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../../configFirebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  //Hook to recover dinamic part of the route
  const { id } = useParams();

  let totalItems = getTotalQuantityById(id);

  useEffect(() => {
    //firebase
    let productsCollection = collection(db, "productos");
    let refDoc = doc(productsCollection, id);
    let getProducts = getDoc(refDoc);
    getProducts.then((res) => setItem({ ...res.data(), id: res.id }));
  }, [id]);

  const onAdd = (quantity) => {
    let productForCart = { ...item, quantity: quantity };
    addToCart(productForCart);

    //Sonner
    toast.success("Se agrego el producto", {
      closeButton: true,
      description: `${item.title} exitosamente!`,
      position: "top-center",
    });
  };

  return <ItemDetail item={item} onAdd={onAdd} totalItems={totalItems} />;
};

export default ItemDetailContainer;
