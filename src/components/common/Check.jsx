import React, { useState } from "react";
const Check = (props) => {
  const { id, complete, onComplete } = props;
  const [checked, setChecked] = useState(complete);

  const handleCompleteItem = (e, id) => {
    setChecked(e.target.checked);
    onComplete(id, e.target.checked);
  };
  return (
    <input
      type="checkbox"
      defaultChecked={checked}
      onChange={(e) => handleCompleteItem(e, id)}
    />
  );
};

export default Check;
