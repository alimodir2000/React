import { useContext } from "react";
import Modal from "./Modal";
import CardContext from "../../store/CartContext";
import { currencyFormatter } from "../../util/formatting";
import Button from "./Button";
import UserProgressContext from "../../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const cartContext = useContext(CardContext);
  const userProgressContext = useContext(UserProgressContext);

  const cardTotal = cartContext.items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );

  function handleCloseCart() {
    userProgressContext.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressContext.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartContext.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncrease={() => cartContext.addItem(item)}
            onDecrease={() => cartContext.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cardTotal)}</p>
      <p className="modal-action">
        <Button onClick={handleCloseCart} textOnly>
          Close
        </Button>
        {cartContext.items.legnth > 0  && (<Button textOnly={false}>Go to Checkout</Button>)}
      </p>
    </Modal>
  );
}
