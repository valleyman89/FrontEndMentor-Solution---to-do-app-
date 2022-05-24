import React, { useState } from "react";
import Check from "./common/Check";
import Delete from "./common/Delete";

const Item = (props) => {
  const { data, onDelete, onComplete } = props;
  return (
    <div>
      <li>
        <Check id={data.id} complete={data.completed} onComplete={onComplete} />{" "}
        {data.content}
        <Delete id={data.id} onDelete={onDelete} />
      </li>
    </div>
  );
};

export default Item;
