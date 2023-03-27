import { createContext } from "react";

export const ProductsValueContext = createContext({
  products: [],
});

export const ProductsActionsContext = createContext({
  toggleFavorite: () => {},
});
