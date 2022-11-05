import React from "react";

export interface CartInfo {
  id: number;
  title: string;
  image: string;
  price: number;
  count: number;
};
export interface ProductInfo {
  id: number;
  title: string;
  image: string;
  price: number;
  description?: string;
  rating?: {
    count: number;
    rate: number;
  };
};
interface CartProviderProps {
  children: React.ReactNode;
};
interface CartContextData {
  products: ProductInfo[];
  cart: CartInfo[];
  setProducts: React.Dispatch<React.SetStateAction<ProductInfo[]>>;
  getProduct: (id: number) => ProductInfo | undefined;
  addToCart: (product: ProductInfo) => void;
  removeFromCart: (id: number) => void;
  incrementCountCart: (id: number) => void;
  decrementCountCart: (id: number) => void;
  getItemsQuantity: () => number;
  getTotal: () => number;
};

export const CartContext = React.createContext<CartContextData>(
  {} as CartContextData,
);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = React.useState<CartInfo[]>([]);
  const [products, setProducts] = React.useState<ProductInfo[]>([]);

  const getProduct = (id: number) =>
    products.find(product => product.id === id);
  const addToCart = (product: ProductInfo) => {
    const cartList = [...cart];
    const insideCart = cartList.some(item => item.id === product.id);
    if (!insideCart){
      cartList.push({
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
        count: 1,
      });
      setCart(cartList);
    } else {
      return;
    }
  };
  const removeFromCart = (id: number) => {
    const cartList = cart.filter((product) => product.id !== id);
    setCart(cartList);
  };
  const getItemsQuantity = () =>
    cart.reduce((total, product) => total + product.count, 0);
  const getTotal = () =>
    cart.reduce((total, product) => total + product.count * product.price, 0);
  const incrementCountCart = (id: number) => {
    const cartList = cart.map(product => {
      if (product.id === id) product.count += 1;

      return product;
    });
    setCart(cartList);
  };
  const decrementCountCart = (id: number) => {
    const cartList = cart.map(product => {
      if (product.id === id && product.count > 1) product.count -= 1;

      return product;
    });
    setCart(cartList);
  };
  
  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        setProducts,
        getProduct,
        addToCart,
        removeFromCart,
        incrementCountCart,
        decrementCountCart,
        getItemsQuantity,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
