import React, { useState } from "react";
import { useItemContext } from "../../ItemsContext";

const Check = (props) => {
  const { id, complete } = props;
  const { setItems, items } = useItemContext();

  const [checked, setChecked] = useState(complete);

  const handleCompleteItem = (e, itemId) => {
    setChecked(e.target.checked);

    const updateItem = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: e.target.checked };
      } else {
        return item;
      }
    });
    setItems(updateItem);
  };

  return (
    <React.Fragment>
      <input
        className="check"
        type="checkbox"
        defaultChecked={checked}
        onChange={(e) => handleCompleteItem(e, id)}
        name={id}
      />
      <label htmlFor={id}></label>
    </React.Fragment>
  );
};

export default Check;
