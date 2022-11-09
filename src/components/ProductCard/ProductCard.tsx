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
import { TextWithLimite } from "components/TextWithLimite";
import { ValueDollar } from "components/ValueDollar";

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
  return (
    <CardWrapper>
      <Image src={image} alt={title} onClick={onCardClick} />
      <ProductTitle variant="h1" onClick={onCardClick}>
        <TextWithLimite title={title} charactersLimit={60} />
      </ProductTitle>
      <ProductDescription>
        <TextWithLimite title={description} charactersLimit={100} />
      </ProductDescription>
      <ProductPrice>
        <ValueDollar price={price} />
      </ProductPrice>
      <Button onClick={onAddToCartButtonClick}>Add to cart</Button>
    </CardWrapper>
  );
};
