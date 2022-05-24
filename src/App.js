import "./App.css";
import Items from "./components/Items";
import CreateItem from "./components/CreateItem";
import Filter from "./components/Filter";
import React, { useState } from "react";
import { useLocalStorage } from "./utils/localStorage";

function App() {
  const [items, setItems] = useLocalStorage("items", "");

  const handleNewItem = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (id) => {
    const ogItems = items;
    const newItems = ogItems.filter((c) => c.id !== id);
    setItems(newItems);
  };

  const handleCompleteItem = (item, state) => {
    console.log("handleCompleteItem" + item + " is " + state);
  };

  return (
    <React.Fragment>
      <CreateItem data={items} onNewItem={handleNewItem} />
      {items.length < 1 ? (
        "nothing here"
      ) : (
        <Items
          onDelete={handleDeleteItem}
          onComplete={handleCompleteItem}
          data={items}
        />
      )}
      <Filter />
    </React.Fragment>
  );
}

export default App;
