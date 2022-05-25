import React from "react";
import Item from "./Item";

const Items = (props) => {
  const { data, onDelete, onComplete, onClearComplete, filter } = props;

  return (
    <div className="items shadow">
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
              <Item data={item} onDelete={onDelete} onComplete={onComplete} />
            </div>
          );
        })}
      <div className="end">
        {
          data.filter((e) => {
            return !e.completed;
          }).length
        }{" "}
        items left
        <button onClick={() => onClearComplete()}>Clear Completed</button>
      </div>
    </div>
  );
};

export default Items;
