import React from "react";
import { Router } from "components";
import { CartProvider } from "contexts";
import { Container } from "./App.styles";

export const App: React.FC = () => (
  <Container>
    <CartProvider>
      <Router />
    </CartProvider>
  </Container>
);
