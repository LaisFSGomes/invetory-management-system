import React, { useEffect, useState } from "react";
import { HeaderWrapper } from "./Shopping.styles";
import logo from "assets/icons/logo.svg";

export const Shopping: React.FC = () => {
  return (
    <HeaderWrapper>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Shopping</h1>
    </HeaderWrapper>
  );
};