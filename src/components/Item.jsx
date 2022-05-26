import React from "react";
import Check from "./common/Check";
import Delete from "./common/Delete";

const Item = (props) => {
  const { data, onDelete, onComplete } = props;
  return (
    <div className="item">
      <div className="item-complete">
        <Check id={data.id} complete={data.completed} onComplete={onComplete} />
      </div>
      <div className="item-content">
        <span className={data.completed ? "strike" : ""}>{data.content}</span>
      </div>
      <div className="item-delete">
        <Delete id={data.id} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default Item;
