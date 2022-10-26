import { Header } from "components/Header";
import { Router } from "components/Router";
import { apiStore } from "config/api";
import React, { useEffect, useState } from "react";


export const App: React.FC = () => {
  const [produtos, setProdutos] = useState([]);
  useEffect (() => {
    const fetchData = async () => {
      try {
        const result = await apiStore.get("/products");
        setProdutos(result?.data);
      } catch (error) {
        console.log("não deu certo");
      }
    }
    fetchData();
    console.log(produtos);
  })
  return (
   <React.Fragment>
    <Header />
    <Router />
   </React.Fragment>
  );
};
