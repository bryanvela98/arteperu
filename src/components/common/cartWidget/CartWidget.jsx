import { CiShoppingCart } from "react-icons/ci";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  //will return item in Data array in my context
  const { cart, getTotalItems } = useContext(CartContext);

  const totalItems = getTotalItems();

  return (
    <div>
      <Badge badgeContent={totalItems} color="primary" max={10} showZero={true}>
        <CiShoppingCart />
      </Badge>
    </div>
  );
};

export default CartWidget;
