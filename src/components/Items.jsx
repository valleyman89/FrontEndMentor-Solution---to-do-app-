import React from "react";
import Item from "./Item";

const Items = (props) => {
  const { data, onDelete, onComplete, filter } = props;

  return (
    <div>
      {data
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
