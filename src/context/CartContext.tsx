import { createContext, useContext, useState } from "react";

type CartItem = {
  id: string;
  quantity: number;
};

type CartProviderProps = {
  children: React.ReactNode;
};

type CartContext = {
  getItemQuantity: (id: string) => number;
  increaseItemQuantity: (id: string, quantity: number) => void;
  decreaseItemQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
};

const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id: string) {
    const item = cartItems.find((item: CartItem) => item.id === id);
    return item ? item.quantity : 0;
  }

  function increaseItemQuantity(id: string, quantity: number) {
    setCartItems((items: any) => {
      const currentIndex = items.findIndex((item: CartItem) => item.id === id);
      if (currentIndex !== -1) {
        items[currentIndex].quantity += quantity;
      } else {
        items.push({ id, quantity });
      }
      return [...items];
    });
  }

  function decreaseItemQuantity(id: string, quantity: number) {
    setCartItems((items: any) => {
      const currentIndex = items.findIndex((item: CartItem) => item.id === id);
      if (currentIndex === -1) return [...items];

      items[currentIndex].quantity -= quantity;
      if (items[currentIndex].quantity <= 0) {
        items.splice(currentIndex, 1);
      }

      return [...items];
    });
  }

  function removeItem(id: string) {
    setCartItems((items: any) => {
      const currentIndex = items.findIndex((item: CartItem) => item.id === id);
      if (currentIndex === -1) return [...items];

      items.splice(currentIndex, 1);
      return [...items];
    });
  }

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
