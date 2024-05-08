import { useState, useEffect, useContext, createContext } from "react";

const CardContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let existingCartItem = localStorage.getItem(`cart`);
    if (existingCartItem) setCart(JSON.parse(existingCartItem));
  }, []);

  return (
    <CardContext.Provider value={[cart, setCart]}>
      {children}
    </CardContext.Provider>
  );
};

// custom hook
const useCard = () => useContext(CardContext);

export { useCard, CartProvider };
