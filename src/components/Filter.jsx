import React from "react";
import { useItemContext } from "../ItemsContext";

const Filter = (props) => {
  const { onFilter } = props;
  const { setItems, items } = useItemContext();

  const clearCompleted = () => {
    setItems(items.filter((item) => !item.completed));
  };

  return (
    <div>
      Filter:
      <button onClick={() => onFilter("")}>All</button>
      <button onClick={() => onFilter("active")}>Active</button>
      <button onClick={() => onFilter("completed")}>Completed</button>
      <button onClick={() => clearCompleted()}>Clear</button>
    </div>
  );
};

export default Filter;
