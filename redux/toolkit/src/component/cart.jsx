import React from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../redux/slices/cartSlice";

const Cart = () => {
  // const items = useSelector(state => state.cart); //this is the first selector to get the items from the store but we have a library for that in redux toolkit if we use this there is chances of rerendering the component on every state change
  const items = useSelector(getItemsSelector); //this is the second selector to get the items from the store but we have a library for that in redux toolkit
  
  console.log('items', items);
  
  const total = items.reduce((a, b) => a + b.price, 0); //this is the second reducer to calculate the total price of the cart
  return (
    <div className="alert alert-success">
      <h3 className="text-center" >
        Total Items: {items.length} (Rs. {total})/-
        {/* TOTAL ITEMS: 5 (Rs. 1000/-) */}
      </h3>
    </div>
  );
};

export default Cart;
