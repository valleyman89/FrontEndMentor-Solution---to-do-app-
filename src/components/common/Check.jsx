import React, { useState } from "react";
const Check = (props) => {
  const { id, complete, onComplete } = props;
  const [checked, setChecked] = useState(complete);

  const handleCompleteItem = (e, id, completeCheck) => {
    setChecked(e.target.checked);
    onComplete(id, checked, completeCheck);
  };
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => handleCompleteItem(e, id, checked)}
    />
  );
};

export default Check;
