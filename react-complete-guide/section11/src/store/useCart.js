import { useContext } from "react";
import CartContext from "./cart-context";

const useCart = () => {
  const value = useContext(CartContext);
  if (value === undefined) {
    throw new Error("useCartState should be used within CartProvider");
  }
  return value;
};

export default useCart;
