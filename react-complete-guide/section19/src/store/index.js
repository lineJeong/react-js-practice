import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cart";
import uiReducer from "./slice/ui";

const store = configureStore({
  reducer: { cart: cartReducer, ui: uiReducer },
});

export default store;
