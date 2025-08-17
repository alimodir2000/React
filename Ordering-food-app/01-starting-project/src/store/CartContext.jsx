import { act, createContext, useReducer } from "react";

const CardContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "add_item") {
    const existingItemIndex = state.items.findIndex(
      (item) => action.item.id === item.id
    );

    const updatedItems = [...state.items];
    if (existingItemIndex > -1) {
      const updatedItem = {
        ...state.items[existingItemIndex],
        quantity: state.items[existingItemIndex].quantity + 1,
      };

      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push(action.item);
    }
    return { ...state, items: updatedItems };
  }
  if (action.type === "rem_item") {
    const existingItemIndex = state.items.findIndex(
      (item) => action.id === item.id
    );

    const existingCartItem = state.items[existingItemIndex];

    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingItemIndex, 1);
    } else {
      const updatedItem = {
        ...updatedItems,
        quantity: existingCartItem.quantity - 1,
      };

      updatedItems[existingItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }

  return state;
}

export function CardContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });
  
  const cartContext = {
    items: cart.items,
    addItem: addItem,
    removeItem: removeItem
  };

  function addItem(item) {
    dispatchCartAction({ type: "add_item", item: item });
  }

  function removeItem(id) {
    dispatchCartAction({type:"rem_item", id});
  }

  return (
    <CardContext.Provider value={cartContext}>{children}</CardContext.Provider>
  );
}

export default CardContext;
