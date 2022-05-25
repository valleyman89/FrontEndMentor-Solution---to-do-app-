import "./App.css";
import Items from "./components/Items";
import CreateItem from "./components/CreateItem";
import Filter from "./components/Filter";
import React, { useState } from "react";
import { useItemContext } from "./ItemsContext";

function App() {
  const {items, setItems} = useItemContext()
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
          filter={filter}
        />
      )}
      <Filter
        data={items}
        onFilter={setFilter}
      />
    </React.Fragment>
  );
}

export default App;
