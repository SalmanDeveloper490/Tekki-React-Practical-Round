import React, { createContext, useContext, useReducer, useState } from "react";
import { cartReducer } from "./Reducers";

const Cart = createContext();

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const cartState = () => {
  return useContext(Cart);
};
