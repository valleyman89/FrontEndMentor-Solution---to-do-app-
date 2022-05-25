import "./App.css";
import Items from "./components/Items";
import CreateItem from "./components/CreateItem";
import Filter from "./components/Filter";
import React from "react";
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
    const updateItem = items.map((i) => {
      if (i.id === item) {
        return { ...i, completed: state };
      } else {
        return i;
      }
    });
    setItems(updateItem);
  };
  // TODO:
  const handleFilter = (filterResult) => {
    console.log(filterResult);
    //itemFilter = filterResult;
    return filterResult;
  };
  // TODO:
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
          filter={handleFilter}
        />
      )}
      <Filter data={items} onFilter={handleFilter} />
    </React.Fragment>
  );
}

export default App;
