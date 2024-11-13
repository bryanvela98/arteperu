import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ title, price, description, img, id }) => {
  return (
    <Card className="product-card">
      <CardMedia
        component="img"
        alt={title}
        height="180"
        image={img}
        className="product-image"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="product-title"
        >
          {title}
        </Typography>
        <Typography variant="body2" className="product-description">
          {description}
        </Typography>
        <Typography variant="h6" className="product-price">
          S/.{price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/productDetail/${id}`} className="product-link">
          <Button variant="outlined" size="small" className="product-button">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
