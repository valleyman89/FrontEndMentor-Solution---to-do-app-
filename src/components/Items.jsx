import React, { useState } from "react";
import { getItems } from "../services/items";
import Item from "./Item";

const Items = (props) => {
  const [items, setItems] = useState(getItems);

  return (
    <div>
      {items.map((item) => {
        return <Item id={item.id} content={item.content} />;
      })}
    </div>
  );
};

export default Items;
