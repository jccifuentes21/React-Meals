import React from "react";

//Initialize context with default data, which wont be used but will be better for automcompletion later
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) =>{},
  removeItem: (id) => {}
});

export default CartContext;