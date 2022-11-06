import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {
  CardWrapper,
  Image,
  Price,
  SalesInfo,
  Product,
  Button,
  Title,
  Units,
  UpAndDown,
  Informs,
} from "./CartProductItem.styles";
import { CartContext } from "contexts";

export interface CartProductProps {
  id: number;
  title: string;
  image: string;
  price: number;
  count: number;
};

export const CartProductItem: React.FC<CartProductProps> = ({
  id,
  title,
  image,
  price,
  count,
}) => {
  const navigate = useNavigate();
  const { incrementCart, decrementCart, removeFromCart } =
    React.useContext(CartContext);

  const onArrowUpButtonClick = () => {
    incrementCart(id);
  };
  const onArrowDownButtonClick = () => {
    decrementCart(id);
  };
  const onDeleteButtonClick = () =>{
    removeFromCart(id);
  };
  const onProductItemClick = () => {
    navigate(`/products/${id}`);
  };
  const formatToDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <CardWrapper>
      <Product>
        <Image src={image} alt={title} onClick={onProductItemClick} />
        <Informs>
          <Title onClick={onProductItemClick}>
          {title}
          </Title>
        </Informs>
      </Product>
      <SalesInfo>
        <UpAndDown>
          <Button onClick={onArrowUpButtonClick}>
            <ArrowBackIosNewRoundedIcon />
          </Button>
          <Units>
            {count === 1? `${count} Unit` : `${count} Units`}
          </Units>
          <Button onClick={onArrowDownButtonClick}>
            {
              count !== 1 && 
              <ArrowForwardIosRoundedIcon />
            }
          </Button>
        </UpAndDown>
        <Price> { formatToDollar.format(count * price) } </Price>
        <Button onClick={onDeleteButtonClick}>
          <RemoveCircleOutlineIcon/>
        </Button>
      </SalesInfo>
    </CardWrapper>
  );
};
