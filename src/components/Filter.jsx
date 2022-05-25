import React, { useState } from "react";

const Filter = (props) => {
  const { onFilter, onClearComplete } = props;

  return (
    <div>
      Filter:
      <button onClick={() => onFilter("")}>All</button>
      <button onClick={() => onFilter("active")}>Active</button>
      <button onClick={() => onFilter("completed")}>Completed</button>
      <button onClick={() => onClearComplete()}>Clear</button>
    </div>
  );
};

export default Filter;
