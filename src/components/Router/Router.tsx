import React from "react";
import { PagesRoutes } from "features/constants/routes";
import { Home } from "features/Home";
import { ShoppingCart } from "features/ShoppingCart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Shopping } from "features/Shopping";

export const Router : React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path= {PagesRoutes.home} element={<Home />} />
        <Route path= {PagesRoutes.shopping} element={<Shopping />} />
        <Route path= {PagesRoutes.shoppingCart} element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}