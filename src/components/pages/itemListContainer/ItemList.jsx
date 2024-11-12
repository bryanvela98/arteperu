import { Skeleton } from "@mui/material";
import ProductCart from "../../common/productCart/ProductCard";

const ItemList = ({ items }) => {
  //Rendering techniques
  //if with early return
  if (items.length === 0) {
    return (
      <>
        <Skeleton variant="rectangular" width={"300px"} height={"150px"} />
        <Skeleton variant="text" sx={{ fontSize: "4rem" }} width={"200px"} />
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={"150px"} />
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={"100px"} />
        <Skeleton
          variant="rounded"
          sx={{ fontSize: "2rem", borderRadius: "50px" }}
          width={"100px"}
        />
      </>
    );
  }
  // ternary

  return (
    <div>
      <h1>Listado de Productos</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        {items.map((item) => {
          //each lap will return a ProductCart item
          return (
            //key needed per map item to be unique element
            <ProductCart
              key={item.id}
              //key={item.id}
              //title={item.title}
              //price={item.price}
              //img={item.img}
              //description={item.description}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
