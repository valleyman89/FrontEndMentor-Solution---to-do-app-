import react from "react";
import { useLocalStorage } from "./utils/localStorage";

const ItemsContext = react.createContext({});

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useLocalStorage("items", []);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

export const useItemContext = () => {
  const context = react.useContext(ItemsContext);
  return context;
};
