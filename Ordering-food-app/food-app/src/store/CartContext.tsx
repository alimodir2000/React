import { createContext, useReducer } from "react";

export interface MealDto {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface CartMealDto extends MealDto {
  quantity: number;
}

export interface CartContextType {
  items: CartMealDto[];
  addItem: (item: MealDto) => void;
  removeItem: (id: number) => void;
  totalPrice: () => number;
  totalItems: () => number;
}

interface cartReducerState {
  items: CartMealDto[];
}

type CartReducerAction =
  | { type: "item_add"; item: MealDto }
  | { type: "item_remove"; id: number };

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  totalPrice: () => 0,
  totalItems: () => 0,
});

export interface CartContextProviderProps {
  children: React.ReactNode;
}

function cartReducer(
  state: cartReducerState,
  action: CartReducerAction
): cartReducerState {
  switch (action.type) {
    case "item_add": {
      const idx = state.items.findIndex(x => x.id === action.item.id);
      if (idx === -1) {
        return { items: [...state.items, { ...action.item, quantity: 1 }] };
      }
      return {
        items: state.items.map((x, i) =>
          i === idx ? { ...x, quantity: x.quantity + 1 } : x
        ),
      };
    }

    case "item_remove": {
      const idx = state.items.findIndex(x => x.id === action.id);
      if (idx === -1) return state;

      const target = state.items[idx];
      if (target.quantity === 1) {
        return { items: state.items.filter((_, i) => i !== idx) };
      }
      return {
        items: state.items.map((x, i) =>
          i === idx ? { ...x, quantity: x.quantity - 1 } : x
        ),
      };
    }

    default:
      return state;
  }
}


export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function handleAddItem(item: MealDto): void {
    console.log(cart.items);
    dispatchCartAction({ type: "item_add", item: item });
  }

  function handleRemoveItem(id: number): void {
    dispatchCartAction({ type: "item_remove", id });
  }

  function handleGetTotalPrice(): number {
    if (!cart.items) return 0;
    const t = cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return t;
  }

  function handleTotalNumber():number {
    if(!cart.items)
        return 0;
     const t = cart.items.reduce(
      (total, item) => total + item.quantity,
      0
    );
    console.log(t);
    console.log(cart.items);
    return t;
  }

  const cartContext: CartContextType = {
    items: cart.items,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
    totalPrice: handleGetTotalPrice,
    totalItems: handleTotalNumber
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
