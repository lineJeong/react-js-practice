import { useContext } from "react";
import {
  ProductsActionsContext,
  ProductsValueContext,
} from "./products-context";

export const useProductsValue = () => {
  const value = useContext(ProductsValueContext);
  if (value === undefined) {
    throw new Error(
      "useProductsValue should be used within ProductsValueProvider"
    );
  }
  return value;
};

export const useProductsActions = () => {
  const value = useContext(ProductsActionsContext);
  if (value === undefined) {
    throw new Error(
      "useProductActions should be used within ProductActionsProvider"
    );
  }
  return value;
};
