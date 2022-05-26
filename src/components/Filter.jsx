import React from "react";

const Filter = (props) => {
  const { onFilter } = props;

  return (
    <div className="filter shadow">
      <button onClick={() => onFilter("")}>All</button>
      <button onClick={() => onFilter("active")}>Active</button>
      <button onClick={() => onFilter("completed")}>Completed</button>
    </div>
  );
};

export default Filter;
