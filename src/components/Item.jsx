import React, { useState } from "react";
import Check from "./common/Check";
import Delete from "./common/Delete";

const Item = (props) => {
  const { data, onDelete, onComplete } = props;
  return (
    <div className="item">
      <div className="div1">
        <Check id={data.id} complete={data.completed} onComplete={onComplete} />
      </div>
      <div className="div2"> {data.content}</div>
      <div className="div3">
        <Delete id={data.id} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default Item;
