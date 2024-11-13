import { Button } from "@mui/material";
import ProductCart from "../../common/productCart/ProductCard";
import "./ItemListContainer.css";

const ItemList = ({
  items,
  currentArray,
  nextPage,
  prevPage,
  totalPages,
  currentPage,
  setCurrentPage,
  setItemsPerPage,
  itemsPerPage,
}) => {
  return (
    <div className="item-list-container">
      <h1 className="item-list-title">Listado de Productos</h1>
      <div className="item-list-flex">
        {currentArray.map((item) => {
          return <ProductCart key={item.id} {...item} />;
        })}
      </div>
      <div className="paginated">
        <h2>Estas en la página {currentPage}</h2>
        <div
          style={{
            gap: "10px",
            display: "flex",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <div>
            <Button
              variant="contained"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              {"<"}
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              {">"}
            </Button>
          </div>
        </div>
        {/* Number of items of the array we'll see per page. */}
        <div style={{ gap: "10px", display: "flex", justifyContent: "center" }}>
          <div>
            <Button
              variant={itemsPerPage === 5 ? "contained" : "outlined"}
              onClick={() => {
                setItemsPerPage(5);
                setCurrentPage(1);
              }}
            >
              5
            </Button>
          </div>
          <div>
            <Button
              variant={itemsPerPage === 10 ? "contained" : "outlined"}
              onClick={() => {
                setItemsPerPage(10);
                setCurrentPage(1);
              }}
            >
              10
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
