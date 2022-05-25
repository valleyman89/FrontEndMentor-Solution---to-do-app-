import "./App.css";
import Items from "./components/Items";
import CreateItem from "./components/CreateItem";
import Filter from "./components/Filter";
import React, { useState } from "react";
import { useLocalStorage } from "./utils/localStorage";

function App() {
  const [items, setItems] = useLocalStorage("items", "");
  const [filter, setFilter] = useState("");

  const handleNewItem = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (id) => {
    const ogItems = items;
    const newItems = ogItems.filter((c) => c.id !== id);
    setItems(newItems);
  };

  const handleCompleteItem = (item, state) => {
    const updateItem = items.map((i) => {
      if (i.id === item) {
        return { ...i, completed: state };
      } else {
        return i;
      }
    });
    setItems(updateItem);
  };

  const clearCompleted = () => {
    setItems(items.filter((item) => !item.completed));
  };

  return (
    <div className="container">
      <CreateItem data={items} onNewItem={handleNewItem} />
      {items.length < 1 ? (
        <div className="items item shadow">Empty...</div>
      ) : (
        <Items
          onDelete={handleDeleteItem}
          onComplete={handleCompleteItem}
          onClearComplete={clearCompleted}
          data={items}
          filter={filter}
        />
      )}
      <Filter data={items} onFilter={setFilter} />
    </div>
  );
}

export default App;
