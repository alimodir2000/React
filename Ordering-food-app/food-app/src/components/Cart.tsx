import React, { useContext } from "react";
import Modal from "./UI/Modal";
import UserProgressContext from "../store/UserProgressContext";

const Cart = () => {
  const progressContext = useContext(UserProgressContext);
  return (
    <Modal open={progressContext.progress === "cart"}>
      <h1>Hi</h1>
    </Modal>
  );
};

export default Cart;
