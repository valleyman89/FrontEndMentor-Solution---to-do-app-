import React, { useState } from "react";
import { ReactComponent as DeleteIcon } from "../../svg/icon-cross.svg";

const Delete = (props) => {
  const { id, onDelete } = props;

  const handleDeleteItem = (id) => {
    onDelete(id);
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
