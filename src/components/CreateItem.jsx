import React, { useState } from "react";

const CreateItem = (props) => {
  const { data, onNewItem } = props;
  const [item, setItem] = useState("");
  const [id, setId] = useState(data.length + 1);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setId((prev) => prev + 1);

    const newItem = {
      id: id,
      content: item,
      completed: false,
      orderId: 1,
    };
    onNewItem(newItem);
    setItem("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        name="newItemInput"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Create a new todo..."
        aria-label="newtask"
      />
    </form>
  );
};

export default CreateItem;
