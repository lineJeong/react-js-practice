import { useContext } from "react";
import { ProductsValueContext } from "./products-context";

export const useProductsValue = () => {
  const value = useContext(ProductsValueContext);
  if (value === undefined) {
    throw new Error(
      "useProductsValue should be used within ProductsValueProvider"
    );
  }
  return value;
};
