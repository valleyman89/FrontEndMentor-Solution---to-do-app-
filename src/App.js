import { useItemContext } from "./ItemsContext";
import CreateItem from "./components/CreateItem";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Items from "./components/Items";
import React, { useState } from "react";

function App() {
  const { items } = useItemContext();
  const [filter, setFilter] = useState("");

  return (
    <div className="container">
      <Header />
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
