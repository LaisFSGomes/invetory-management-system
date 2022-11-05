import { Footer, Header } from "components";
import { CartProductItem } from "components/CartProductItem";
import { CartContext } from "contexts";
import React from "react";
import {
  Button,
  Container,
  CardProducts,
  BuyCard,
  Title,
  CartWrapper,
  BuyItem,
  BuyText,
  BuyValue,
} from "./Cart.styles";

export const Cart: React.FC = () => {
  const { cart, getTotal, getItemsQuantity } = React.useContext(CartContext);
  const formatToDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <React.Fragment>
      <Header />
      <CartWrapper>
        <Title>Cart ({getItemsQuantity()} items):</Title>
        <Container>
          <BuyCard>
            <BuyItem>
              <BuyText>Shipping: </BuyText>
              <BuyValue>Free</BuyValue>
            </BuyItem>
            <BuyItem>
              <BuyText>Savings: </BuyText>
              <BuyValue>$ 0.00</BuyValue>
            </BuyItem>
            <BuyItem>
              <BuyText>Estimated total: </BuyText>
              <BuyValue>{formatToDollar.format(getTotal())}</BuyValue>
            </BuyItem>
            <Button>Continue to checkout</Button>
          </BuyCard>
          <CardProducts>
            {cart?.map(item => (
              <CartProductItem
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                count={item.count}
              />
            ))}
          </CardProducts>
        </Container>
      </CartWrapper>
      <Footer />
    </React.Fragment>
  );
};
