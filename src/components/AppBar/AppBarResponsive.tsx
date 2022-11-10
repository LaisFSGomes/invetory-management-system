import React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Logo } from "components/Logo";
import {
  ContainerLarge,
  ContainerMobile,
  LogoContainerMobile,
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
import { Link } from "react-router-dom";

export const AppBarResponsive = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { getAmountItems, getTotal } = React.useContext(CartContext);
  const itemsQuantity = getAmountItems();
  return (
    <AppBarWrapper position="fixed">
      <Container>
        <Toolbar disableGutters>
          <ContainerLarge>
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
            </Navbar>
          </ContainerLarge>

          <ContainerMobile>
            <ButtonBarr 
              onClick={handleClick}
            >
              <MenuIcon />
            </ButtonBarr>
            <MenuMobile
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={PagesRoutes.products}>Home</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={PagesRoutes.cart}>Carrinho</Link>
              </MenuItem>
            </MenuMobile>
          </ContainerMobile>
          <LogoContainerMobile>
            <Logo />
          </LogoContainerMobile>

          <UserImage
            src="https://avatars.githubusercontent.com/u/50854183?v=4"
            alt="user image"
          />
        </Toolbar>
      </Container>
    </AppBarWrapper>
  );
};
