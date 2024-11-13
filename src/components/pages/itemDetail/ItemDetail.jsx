import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ item, onAdd, totalItems }) => {
  return (
    <div className="main-container">
      <div className="product-preview">
        <img src={item.img} alt="ProductPreview" />
      </div>
      <div className="product-data">
        <h1 className="product-title2">{item.title}</h1>
        <p className="product-description2">{item.description}</p>
        <h3 className="product-price2"> S/. {item.price}</h3>
        <h3 className="section-head">
          Agregue unidades para continuar su compra:
        </h3>
        <CounterContainer
          onAdd={onAdd}
          stock={item.stock}
          totalItems={totalItems}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
