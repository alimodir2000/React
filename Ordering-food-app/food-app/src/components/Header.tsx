import React, { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export const Header = () => {
  const cartContext = useContext(CartContext);
  const useProgressContext = useContext(UserProgressContext);
  console.log(cartContext.items.length);
  console.log(cartContext.items.length);

  function showCart(){
    useProgressContext.showCart();
  }

  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="My Food App" />
        <h1>My Food App</h1>
      </div>
      <Button onClick={showCart} textOnly>Cart ({cartContext.totalItems()})</Button>
    </div>
  );
};
