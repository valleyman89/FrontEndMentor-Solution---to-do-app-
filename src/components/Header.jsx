import React from "react";
// import { ReactComponent as DarkTheme } from "../svg/icon-moon.svg";
import { ReactComponent as LightTheme } from "../svg/icon-sun.svg";

const Header = () => {
  return (
    <div className="header">
      <h1>todo</h1>
      <LightTheme />
    </div>
  );
};

export default Header;
