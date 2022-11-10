import { Footer, ProductCard,  AppBarResponsive } from "components";
import { api } from "config/api";
import { CartContext } from "contexts";
import React from "react";
import { ProductsWrapper } from "./Home.styles";

export const Home: React.FC = () => {
  const { products, setProducts } = React.useContext(CartContext);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("/products");
      setProducts(result.data);
    };
    fetchData();
  }, [setProducts]);

  return (
    <React.Fragment>
      <AppBarResponsive />
      <ProductsWrapper>
        {products?.map(product => (
          <ProductCard
            key={product?.id}
            id={product?.id}
            image={product?.image}
            title={product?.title}
            description={product?.description || ""}
            price={product?.price}
          />
        ))}
      </ProductsWrapper>
      <Footer />
    </React.Fragment>
  );
};
