import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";

import authReducer from "./auth";
import counterReducer from "./counter";

// redux-toolkit (createSlice)
const store = configureStore({
  //   reducer: counterReducer.reducer,
  reducer: { counter: counterReducer, auth: authReducer },
});

// redux (reducer function)
// const initialState = { counter: 0, showCounter: true };
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increment":
//       return { ...state, counter: state.counter + action.amount };
//     case "decrement":
//       return { ...state, counter: state.counter - 1 };
//     case "toggle":
//       return { ...state, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);

export default store;
