import React, { useState } from "react";
import { ReactComponent as CheckIcon } from "../../svg/icon-check.svg";
const Check = (props) => {
  const { id, complete, onComplete } = props;
  const [checked, setChecked] = useState(complete);

  const handleCompleteItem = (e, id) => {
    setChecked(e.target.checked);
    onComplete(id, e.target.checked);
  };
  return (
    <input
      className="check"
      type="checkbox"
      defaultChecked={checked}
      onChange={(e) => handleCompleteItem(e, id)}
    />
  );
};

export default Check;
