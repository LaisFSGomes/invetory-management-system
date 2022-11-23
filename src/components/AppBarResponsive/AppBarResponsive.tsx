import React from "react";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Logo } from "components/Logo";
import {
  ContainerLarge,
  ContainerMobile,
  NavItem,
  NavItemCart,
  AmountTotal,
  MenuMobile,
  UserImage,
  AppBarWrapper,
  Navbar,
  ButtonBarr,
} from "./AppBarResponsive.style";
import { PagesRoutes } from "features/constants";
import { AmountItems } from "components/Header/Header.styles";
import { ValueDollar } from "components/ValueDollar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "contexts";

export const AppBarResponsive = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { getAmountItems, getTotal } = React.useContext(CartContext);
  const itemsQuantity = getAmountItems();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBarWrapper position="fixed">
      <Container>
        <Toolbar disableGutters>
          <ContainerLarge>
            <Logo />
            <Navbar>
              <NavItem to={PagesRoutes.products}>Home</NavItem>
              <NavItem to={PagesRoutes.login}>Login</NavItem>
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
            </Navbar>
            <UserImage
              src="https://avatars.githubusercontent.com/u/50854183?v=4"
              alt="user image"
            />
          </ContainerLarge>
          <ContainerMobile>
            <ButtonBarr onClick={handleClick}>
              <MenuIcon />
            </ButtonBarr>
            <MenuMobile
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem>
                <NavItem to={PagesRoutes.products}>Home</NavItem>
              </MenuItem>
              <MenuItem>
                <NavItem to={PagesRoutes.cart}>Cart</NavItem>
              </MenuItem>
              <MenuItem>
                <NavItem to={PagesRoutes.login}>Login</NavItem>
              </MenuItem>
              <MenuItem>
                <NavItem to={PagesRoutes.register}>Register</NavItem>
              </MenuItem>
            </MenuMobile>
            <Logo />
            <UserImage
              src="https://avatars.githubusercontent.com/u/50854183?v=4"
              alt="user image"
            />
          </ContainerMobile>
        </Toolbar>
      </Container>
    </AppBarWrapper>
  );
};
