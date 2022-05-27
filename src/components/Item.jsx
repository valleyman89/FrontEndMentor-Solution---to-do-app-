import React from "react";
import Check from "./common/Check";
import Delete from "./common/Delete";

const Item = (props) => {
  const { data } = props;

  return (
    <div className="item">
      <div className="item-complete">
        <Check id={data.id} complete={data.completed} />
      </div>
      <div className="item-content">
        <span className={data.completed ? "strike" : ""}>{data.content}</span>
      </div>
      <div className="item-delete">
        <Delete id={data.id} />
      </div>
    </div>
  );
};

export default Item;
