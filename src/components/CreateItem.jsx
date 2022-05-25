import React, { useState } from "react";

const CreateItem = (props) => {
  const { data, onNewItem } = props;
  const [item, setItem] = useState("");
  const [id, setId] = useState(data.length + 1);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setId((prev) => prev + 1);
    if (item.length < 1) {
      return;
    } else {
      const newItem = {
        id: id,
        content: item,
        completed: false,
        orderId: 1,
      };
      onNewItem(newItem);
      setItem("");
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="create-item shadow">
        <input
          type="text"
          name="newItemInput"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Create a new todo..."
          aria-label="newtask"
          maxLength="50"
        />
      </div>
    </form>
  );
};

export default CreateItem;
