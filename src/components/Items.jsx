import React, { useState } from "react";
import Item from "./Item";

const Items = (props) => {
  const { data, onDelete, onComplete } = props;
  return (
    <div>
      {data.map((item) => {
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
