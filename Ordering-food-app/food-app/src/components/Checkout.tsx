import React, { useContext } from "react";
import Modal from "./UI/Modal";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../utils/currencyFormatter";
import CartContext from "../store/CartContext";
import Input from "./UI/Input";
import Button from "./UI/Button";

const Checkout = () => {
  const progressContext = useContext(UserProgressContext);
  const cartContext = useContext(CartContext);

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const postData = Object.fromEntries(fd.entries());

    const res = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartContext.items,
          customer: postData,
        },
      }),
    });

    console.log(await res.json());
  }
  return (
    <Modal
      open={progressContext.progress === "checkout"}
      onClose={() => progressContext.hideCheckout()}
    >
      <form onSubmit={handleFormSubmit}>
        <h2>Checkout</h2>
        <p>
          Total Amount: {currencyFormatter.format(cartContext.totalPrice())}
        </p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="Email Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-action">
          <Button
            textOnly
            type="button"
            onClick={() => progressContext.hideCheckout()}
          >
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
