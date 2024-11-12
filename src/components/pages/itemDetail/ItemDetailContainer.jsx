import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { artesanias } from "../../../productsMocks";
import { useParams } from "react-router-dom"; //Dimanic Routes
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../../configFirebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  //hook context
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

    //with local items

    /*     let product = artesanias.find((artesania) => artesania.id === id);
    if (product) {
      setItem(product);
    } */
  }, [id]); //setting to launch use effect every time ID changes

  const onAdd = (quantity) => {
    let productForCart = { ...item, quantity: quantity };
    addToCart(productForCart);
    //Sweet alert
    /* Swal.fire({
      position: "center",
      icon: "success",
      title: "Se agrego al carrito exitosamente.",
      showConfirmButton: false,
      timer: 1500,
    }); */

    //Sonner
    toast.success("Se agrego el producto", {
      closeButton: true,
      description: "descripcion pequeña",
      position: "top-center",
    });
  };

  return <ItemDetail item={item} onAdd={onAdd} totalItems={totalItems} />;
};

export default ItemDetailContainer;
