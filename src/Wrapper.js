import React from "react";
import App from './App'
import { ItemsProvider } from "./ItemsContext";

function Wrapper() {
  return (
    <ItemsProvider>
      <App />
    </ItemsProvider>
  );
}

export default Wrapper;
