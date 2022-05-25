import React from "react";

const Filter = (props) => {
  const { onFilter } = props;

  function filterItems(type) {
    let result = null;
    switch (type) {
      case "active":
        result = (r) => r.completed;
        onFilter(result);
        break;
      case "completed":
        result = (r) => !r.completed;
        onFilter(result);
        break;
      // case "clear":
      //   result = data.filter((r) => !r.completed);
      //   onFilter(result);
      default:
        result = (r) => r;
        onFilter(result);
        break;
    }
  }
  return (
    <div>
      Filter:
      <button onClick={() => filterItems()}>All</button>
      <button onClick={() => filterItems("active")}>Active</button>
      <button onClick={() => filterItems("completed")}>Completed</button>
      <button onClick={() => filterItems("clear")}>Clear</button>
    </div>
  );
};

export default Filter;
