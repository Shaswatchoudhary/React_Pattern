import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => { //this is the first reducer to add items to the cart
      state.push(action.payload); // we can also use stte(...state , action.payload)
    },
  },
});

export const getItemsSelector = (state) => state.cart;

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
