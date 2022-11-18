import React from "react";
import { Cart } from "features/Cart";
import { PagesRoutes } from "features/constants";
import { ProductInfo } from "features/ProductInfo";
import { Home } from "features/Home";
import { Login } from "features/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "features/Register";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PagesRoutes.products} element={<Home />} />
      <Route path={PagesRoutes.ProductInfo} element={<ProductInfo />} />
      <Route path={PagesRoutes.cart} element={<Cart />} />
      <Route path= {PagesRoutes.login} element={<Login />} />
      <Route path= {PagesRoutes.register} element={<Register />} />
    </Routes>
  </BrowserRouter>
);
