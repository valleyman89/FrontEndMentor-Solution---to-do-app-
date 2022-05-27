import "./App.css";
import Items from "./components/Items";
import CreateItem from "./components/CreateItem";
import Filter from "./components/Filter";
import React, { useState } from "react";
import { useItemContext } from "./ItemsContext";

function App() {
  const { items, setItems } = useItemContext();
  const [filter, setFilter] = useState("");

  return (
    <div className="container">
      <CreateItem />
      {items.length < 1 ? (
        <div className="items item shadow">Empty...</div>
      ) : (
        <Items filter={filter} />
      )}
      <Filter onFilter={setFilter} />
    </div>
  );
}

export default App;
