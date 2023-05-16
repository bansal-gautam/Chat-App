import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <h3>Filter by Title / Order ID</h3>
      <input
        className={classes.search}
        type="text"
        placeholder="Start typing to search"
      />
    </div>
  );
};

export default Header;
