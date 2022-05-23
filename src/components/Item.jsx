import React, { useState } from "react";

const Item = (props) => {
  const { id, content } = props;
  return (
    <div id={id}>
      <li>{content}</li>
    </div>
  );
};

export default Item;
