import { PagesRoutes } from "features/constants/routes";
import { Router } from "components/Router";
import { Avatar, HeaderWrapper, Navbar, NavbarItem } from "./Header.styles";
import logoStore from "assets/icons/logoStore.svg";
import React from "react";
import { Box } from "@mui/material";
import { Logo } from "components/Logo";
export const Header: React.FC = () => {
  return ( 
    <HeaderWrapper>
      <Logo />
      <Navbar>
        <NavbarItem href="">INICIO</NavbarItem>
        <NavbarItem href="" >PRODUTOS</NavbarItem>
        <NavbarItem href="" >CARRINHO</NavbarItem>
      </Navbar>
      <Avatar
          src="https://avatars.githubusercontent.com/u/50854183?v=4"
          alt="user avatar"
        />
    </HeaderWrapper>
   );
};