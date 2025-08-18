import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CardContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const cardContext = useContext(CardContext);
  const userProgressContext = useContext(UserProgressContext);

  function handleShowCart(){
    userProgressContext.showCart();

  }


  console.log(cardContext.items);
  const totalItems = (cardContext.items ?? []).reduce((totalNumberOfItems, item) => {
    console.log(item.quantity);
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A Restaurant" />
        <h1>Title</h1>
      </div>
      <nav>
        <Button onClick={handleShowCart} textOnly={true}>Cart ({totalItems})</Button>
      </nav>
    </header>
  );
}
