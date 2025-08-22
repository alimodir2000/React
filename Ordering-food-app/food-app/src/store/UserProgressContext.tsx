import React, { createContext, useState } from "react";

export interface UserProgressContextContract {
  progress: string;
  showCart: () => void;
  hideCart: () => void;
  showCheckout: () => void;
  hideCheckout: () => void;
}
const UserProgressContext = createContext<UserProgressContextContract>({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export interface UserProgressContextProviderProps {
  children: React.ReactNode;
}

export const UserProgressContextProvider = ({
  children,
}: UserProgressContextProviderProps) => {
  const [progress, setProgress] = useState("");

  const showCart = () => {
    setProgress("cart");
  };
  const showCheckout = () => {
    setProgress("checkout");
  };
  const hideCart = () => {
    setProgress("");
  };
  const hideCheckout = () => {
    setProgress("");
  };

  const ctx: UserProgressContextContract = {
    progress,
    hideCart,
    hideCheckout,
    showCart,
    showCheckout
  };

  return (
    <UserProgressContext.Provider value={ctx}>
      {children}
    </UserProgressContext.Provider>
  );
};

export default UserProgressContext;
