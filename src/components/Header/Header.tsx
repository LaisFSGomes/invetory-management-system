import React from "react";
import {
  AmountItems,
  AmountTotal,
  HeaderWrapper,
  Navbar,
  NavItem,
  NavItemCart,
  UserImage,
} from "./Header.styles";
import { PagesRoutes } from "features/constants/routes";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Logo } from "components";
import { CartContext } from "contexts";
import { ValueDollar } from "components/ValueDollar";

export const Header: React.FC = () => {
  const { getAmountItems, getTotal } = React.useContext(CartContext);
  const itemsQuantity = getAmountItems();
  return (
    <HeaderWrapper>
      <Logo />
      <Navbar>
        <NavItem to={PagesRoutes.products}>Home</NavItem>
        <NavItemCart to={PagesRoutes.cart}>
          <AmountItems>
            <span>{itemsQuantity}</span>
          </AmountItems>
          <ShoppingCartIcon />
          <AmountTotal>
            <span>
              <ValueDollar price={getTotal()} />
            </span>
          </AmountTotal>
        </NavItemCart>
        <UserImage
          src="https://avatars.githubusercontent.com/u/50854183?v=4"
          alt="user image"
        />
      </Navbar>
    </HeaderWrapper>
  );
};
