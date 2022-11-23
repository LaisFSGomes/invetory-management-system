import React from "react";
import { Router } from "components";
import { CartProvider, UserProvider } from "contexts";
import { Container } from "./App.styles";

export const App: React.FC = () => (
  <Container>
    <UserProvider>
    <CartProvider>
      <Router />
    </CartProvider>
    </UserProvider>
  </Container>
);
