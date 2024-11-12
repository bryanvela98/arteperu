import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { artesanias } from "../../../productsMocks";
import { useParams } from "react-router-dom";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../configFirebase";

const ItemListContainer = ({ greeting }) => {
  /* greeting is object */

  //fetching de datos ----> returns a promise
  const [items, setItems] = useState([]);

  //getting category name from dinamic route
  const { categoryName } = useParams();

  //using useEffect to avoid infinite loop of creating promise
  useEffect(() => {
    //Firebase

    let productsCollection = collection(db, "productos");

    //filtering
    let consult = productsCollection;
    if (categoryName) {
      consult = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consult).then((response) =>
      setItems(
        response.docs.map((product) => ({ ...product.data(), id: product.id }))
      )
    );

    //local JSON with DB

    /* const filteredProducts = artesanias.filter(
      (artesania) => artesania.category.toLowerCase() === categoryName
    );

    //creating a promise
    const getProductos = new Promise((res, rej) => {
      res(categoryName ? filteredProducts : artesanias);
    });
    //manage promise
    //resolve >> them , reject >> catch
    getProductos
      .then((response) => {
        setTimeout(() => {
          setItems(response);
        }, 1000);
      })
      .catch((error) => {
        console.log("Entro al catch", error);
      }); */
  }, [categoryName]);

  useEffect(() => {});

  let childProps = {
    greeting,
    items,
  };

  /* const agregarProductos = () => {
    artesanias.forEach((element) => {
      addDoc(collection(db, "productos"), element);
    });
  }; */

  /* <button onClick={agregarProductos}>agregar productos</button> */

  return <ItemList {...childProps} />;
};

export default ItemListContainer;

//props = {greeting: {saludo} y: "2" maria:"aasdasd"}
//props.maria
