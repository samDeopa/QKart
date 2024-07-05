import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card">
      <img src={product.image}></img>
      <CardContent>
        <Typography color="primary" variant="h5">
          {product.name}
        </Typography>
        <Typography fontWeight="700" paddingY={1}>
          {`$${product.cost}`}
        </Typography>
        <Rating name="read-only" value={product.rating} readOnly />
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          className="card-button"
          startIcon={<AddShoppingCartOutlined />}
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
