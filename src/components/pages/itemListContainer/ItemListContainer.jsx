import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../configFirebase";
import { usePaginate } from "../../../utils/hooks/usePaginate";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  const [itemsPerPage, setItemsPerPage] = useState(5);

  //state to use paginate Custom Hook

  useEffect(() => {
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
  }, [categoryName]);
  console.log(items);
  const {
    currentArray,
    nextPage,
    prevPage,
    totalPages,
    currentPage,
    setCurrentPage,
  } = usePaginate(items, itemsPerPage);

  let childProps = {
    items,
    currentArray,
    nextPage,
    prevPage,
    totalPages,
    currentPage,
    setCurrentPage,
    setItemsPerPage,
    itemsPerPage,
  };

  return <ItemList {...childProps} />;
};

export default ItemListContainer;
