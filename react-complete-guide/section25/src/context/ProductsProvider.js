import { useState } from "react";
import {
  ProductsActionsContext,
  ProductsValueContext,
} from "./products-context";

function ProductsProvider({ children }) {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (productId) => {
    setProductsList((prevProductsList) => {
      const productIdx = prevProductsList.findIndex(
        (product) => product.id === productId
      );
      const newFavStatus = !prevProductsList[productIdx].isFavorite;
      const updatedProductsList = [...prevProductsList];
      updatedProductsList[productIdx] = {
        ...prevProductsList[productIdx],
        isFavorite: newFavStatus,
      };
      return updatedProductsList;
    });
  };

  const value = {
    productsList,
  };

  const actions = {
    toggleFavorite,
  };

  return (
    <ProductsValueContext.Provider value={value}>
      <ProductsActionsContext.Provider value={actions}>
        {children}
      </ProductsActionsContext.Provider>
    </ProductsValueContext.Provider>
  );
}

export default ProductsProvider;
