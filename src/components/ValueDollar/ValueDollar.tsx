import React from "react";
interface valueDollarProps {
  price: number | undefined;
}
export const ValueDollar: React.FC<valueDollarProps> = ({ price }) => {
  const formatToDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return <>{price ? formatToDollar.format(price) : ""}</>;
};
