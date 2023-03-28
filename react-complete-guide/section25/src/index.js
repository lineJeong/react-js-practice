import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';

import "./index.css";
import App from "./App";
import configureProductsStore from "./hooks-store/products-store";
// import productReducer from './store/reducers/products';
// import ProductsProvider from "./context/ProductsProvider";

// const rootReducer = combineReducers({
//   shop: productReducer
// });

// const store = createStore(rootReducer);
configureProductsStore();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
