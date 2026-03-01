import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: true, //this is to enable the dev tools we can see the state in the browser called an extension called redux dev tools
});

