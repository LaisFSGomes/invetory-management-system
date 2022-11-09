import { Footer, Header } from "components";
import { CartProductItem } from "components/CartProductItem";
import { ValueDollar } from "components/ValueDollar";
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
  DeleteCartButton,
} from "./Cart.styles";

export const Cart: React.FC = () => {
  const { cart, getTotal, getAmountItems, removeAllCart } =
    React.useContext(CartContext);
  const onDeleteCartButton = () => {
    removeAllCart();
  };
  return (
    <React.Fragment>
      <Header />
      <CartWrapper>
        <Title>Cart ({getAmountItems()} items):</Title>
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
              <BuyValue>
                <ValueDollar price={getTotal()} />
              </BuyValue>
            </BuyItem>
            <Button>Continue to checkout</Button>
          </BuyCard>
          <CardProducts>
            {getAmountItems() !== 0 && (
              <DeleteCartButton onClick={onDeleteCartButton}>
                Remove all Cart
              </DeleteCartButton>
            )}
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
