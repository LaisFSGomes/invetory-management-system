import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CardWrapper,
  Image,
  ProductDescription,
  ProductPrice,
  ProductTitle,
  Button,
} from "./ProductCard.styles";
import { CartContext } from "contexts";

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  price,
  image,
}) => {
  const link = useNavigate();
  const { addToCart } = React.useContext(CartContext);

  const onCardClick = () => link(`/product/${id}`);
  const onAddToCartButtonClick = () => {
    addToCart({
      id,
      title,
      price,
      image,
    });
  };
  const formatToDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <CardWrapper>
       <Image src={image} alt={title} onClick={onCardClick} />  
        <ProductTitle variant="h1" onClick={onCardClick}>
          {title.length > 60? title.slice(0, 60) + "..." : title}
        </ProductTitle> 
        <ProductDescription>
          {description.length > 100? description.slice(0, 100) + "..." : description}
        </ProductDescription>   
        <ProductPrice>{formatToDollar.format(price)}</ProductPrice>
        <Button onClick={onAddToCartButtonClick}>
          Add to cart
        </Button>
    </CardWrapper>
  );
};
