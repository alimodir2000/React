import React, { useContext } from "react";
import Modal from "./UI/Modal";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/currencyFormatter";

const Cart = () => {
  const progressContext = useContext(UserProgressContext);
  const cartContext = useContext(CartContext);

  function handleCheckoutClick() {
    if (progressContext.progress === "cart") progressContext.showCheckout();
  }
  return (
    <Modal className="cart" open={progressContext.progress === "cart"}>
      <h2>Your Cart!</h2>
      <ul>
        {cartContext.items.map((item) => {
          return (
            <li key={item.id} className="cart-item">
              {item.name} - {currencyFormatter.format(item.price)}
              <p className="cart-item-actions">
                <button onClick={() => cartContext.removeItem(item.id)}>
                  -
                </button>
                <p>{item.quantity}</p>
                <button onClick={() => cartContext.addItem(item)}>+</button>
              </p>
            </li>
          );
        })}
      </ul>
      <p className="cart-total">
        Total Price: {currencyFormatter.format(cartContext.totalPrice())}
      </p>
      <div className="modal-actions">
        <Button onClick={() => progressContext.hideCart()} textOnly>
          Close
        </Button>
        <Button onClick={handleCheckoutClick}>Checkout</Button>
      </div>
    </Modal>
  );
};

export default Cart;
