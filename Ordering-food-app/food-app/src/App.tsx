import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import UserProgressContext, {
  UserProgressContextProvider,
} from "./store/UserProgressContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <CartContextProvider>
        <UserProgressContextProvider>
          <Cart />
          <Checkout />
          <Header />
          <Meals />
        </UserProgressContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
