import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

// redux-toolkit (createSlice)
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
  //   reducer: { counter: counterSlice.reducer },
});

// redux (reducer function)
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
