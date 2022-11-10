import React from "react";
import { AppBarResponsive, Footer } from "components";
import { CartContext } from "contexts";
import { useLocation, useNavigate } from "react-router-dom";
import { PagesRoutes } from "features/constants/routes";
import {
  Button,
  Description,
  Image,
  ProductDescWrapper,
  Price,
  Rating,
  Title,
  InfoWrapper,
  CardContainer,
} from "./ProductInfo.styles";
import { TextWithLimite } from "components/TextWithLimite";
import { ValueDollar } from "components/ValueDollar";

export interface ProductInfoProps {
  id: number;
  title: string;
  image: string;
  price: number;
  description?: string;
  rating?: {
    count: number;
    rate: number;
  };
}

export const ProductInfo: React.FC = () => {
  const [product, setProduct] = React.useState<ProductInfoProps | undefined>(
    {} as ProductInfoProps,
  );
  const { getProduct, addToCart } = React.useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  const onAddToCartButtonClick = () => {
    if (product) addToCart(product);
    navigate(PagesRoutes.cart);
  };

  React.useEffect(() => {
    const productID = Number(location.pathname.split("/").reverse()[0]);
    const prod = getProduct(productID);
    if (!prod) navigate(PagesRoutes.products);
    setProduct(prod);
  }, [getProduct, location, navigate]);

  return (
    <React.Fragment>
      <AppBarResponsive />
      <ProductDescWrapper>
        <CardContainer>
          <Image src={product?.image} alt={product?.title} />
          <InfoWrapper>
            <Title>
              <TextWithLimite title={product?.title} charactersLimit={1000} />
            </Title>
            <Rating>Rating: {product?.rating?.rate}</Rating>
            <Price>
              <ValueDollar price={product?.price || 0} />
            </Price>
            <Description>
              <TextWithLimite
                title={product?.description}
                charactersLimit="unlimited"
              />
            </Description>
          </InfoWrapper>
          <Button onClick={onAddToCartButtonClick}>Add to cart</Button>
        </CardContainer>
      </ProductDescWrapper>
      <Footer />
    </React.Fragment>
  );
};
