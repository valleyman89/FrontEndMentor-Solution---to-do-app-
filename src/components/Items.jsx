import React from "react";
import Item from "./Item";
import { useItemContext } from "../ItemsContext";

const Items = (props) => {
  const { setItems, items } = useItemContext();

  const { filter } = props;

  const onClearComplete = () => {
    setItems(items.filter((item) => !item.completed));
  };

  return (
    <div className="items shadow">
      {items
        .filter((item) => {
          switch (filter) {
            case "active":
              return !item.completed;
              break;
            case "completed":
              return item.completed;
              break;
            default:
              return item;
          }
        })
        .map((item) => {
          return (
            <div key={item.id}>
              <Item data={item} />
            </div>
          );
        })}
      <div className="end">
        <div className="end-items">
          {
            items.filter((item) => {
              return !item.completed;
            }).length
          }{" "}
          item
          {items.filter((item) => {
            return !item.completed;
          }).length === 1
            ? ""
            : "s"}{" "}
          left
        </div>
        <div className="end-clear">
          <button onClick={() => onClearComplete()}>Clear Completed</button>
        </div>
      </div>
    </div>
  );
};

export default Items;
