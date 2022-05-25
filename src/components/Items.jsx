import React, { useState } from "react";
import Item from "./Item";

const Items = (props) => {
  const { data, onDelete, onComplete, filter } = props;
  console.log("filter:\n", filter);
  return (
    <div>
      {data.filter(filter).map((item) => {
        return (
          <div key={item.id}>
            <ul>
              <Item data={item} onDelete={onDelete} onComplete={onComplete} />
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
