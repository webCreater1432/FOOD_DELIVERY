import React, { createContext, useState } from "react";
import { food_items } from "../Utils/Food";

export const dataContext = createContext();
const UserContext = ({ children }) => {
  const [cate, setcate] = useState(food_items);
  const [showCart, setshowCart] = useState(false);
  const [input, setinput] = useState("");
  let data = {
    input,
    setinput,
    cate,
    setcate,
    showCart,
    setshowCart
  };
  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
};

export default UserContext;
