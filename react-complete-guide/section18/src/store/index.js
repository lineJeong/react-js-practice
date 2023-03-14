import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { createStore } from "redux";

// redux-toolkit (createSlice)
const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  //   reducer: counterSlice.reducer,
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

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
