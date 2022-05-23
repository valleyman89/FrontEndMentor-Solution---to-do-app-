import "./App.css";
import Items from "./components/Items";
import CreateTask from "./components/CreateTask";
import Filter from "./components/Filter";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <CreateTask />
      <Items />
      <Filter />
    </React.Fragment>
  );
}

export default App;
