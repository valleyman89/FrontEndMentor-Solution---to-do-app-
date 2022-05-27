import React from "react";
import { ReactComponent as DeleteIcon } from "../../svg/icon-cross.svg";
import { useItemContext } from "../../ItemsContext";

const Delete = (props) => {
  const { id } = props;
  const { setItems, items } = useItemContext();

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <button
      type="button"
      onClick={() => {
        handleDeleteItem(id);
      }}
    >
      <DeleteIcon />
    </button>
  );
};

export default Delete;
