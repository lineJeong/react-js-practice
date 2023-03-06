import { useReducer } from "react";
import CartContext from "./cart-context";

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, action.item];
      }

      const updatedTotalAmount =
        state.totalAmount + action.item.amount * action.item.price;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case "REMOVE":
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem.amount > 1) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      }

      const updatedTotalAmount = state.totalAmount - existingCartItem.price;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    default:
      return state;
  }
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
