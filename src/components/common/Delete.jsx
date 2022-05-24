import React, { useState } from "react";

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
      x
    </button>
  );
};

export default Delete;
