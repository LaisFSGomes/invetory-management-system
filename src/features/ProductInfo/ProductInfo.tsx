import React from "react";
import { Footer, Header } from "components";
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

export interface ProductInfoProps {
  id: number;
  title: string;
  image: string;
  price: number;
  description?: string;
  rating?: {
    count: number;
    rate: number;
  }
};

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
  const formatToDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  React.useEffect(() => {
    const productID = Number(location.pathname.split("/").reverse()[0]);
    const prod = getProduct(productID);
    if (!prod) navigate(PagesRoutes.products);
    setProduct(prod);
  }, [getProduct, location, navigate]);

  return (
    <React.Fragment>
      <Header />
      <ProductDescWrapper>        
        <CardContainer>
          <Image src={product?.image} alt={product?.title} />
          <InfoWrapper>
            <Title> {product?.title} </Title>
            <Rating>Rating: {product?.rating?.rate}</Rating>
            <Price>
              {formatToDollar.format(product?.price || 0)}
            </Price>
            <Description>{product?.description}</Description>
          </InfoWrapper>
          <Button onClick={onAddToCartButtonClick}>
            Add to cart
          </Button>
        </CardContainer>
      </ProductDescWrapper>
      <Footer />
    </React.Fragment>
  );
};
