import React, { useState } from "react";
import { useLocalStorage } from "../utils/localStorage";
const CreateTask = (props) => {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Create a new todo..."
        aria-label="newtask"
      />
    </form>
  );
};

export default CreateTask;
