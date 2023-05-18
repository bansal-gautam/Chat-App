import React from "react";
import classes from "./Filter.module.css";

const Filter = (props) => {
  const filterHandler = (event) => {
    props.getfilter(event.target.value);
  };
  return (
    <div className={classes.container}>
        <h4>Filter by Title / Order ID</h4>
      <input
        type="text"
        onChange={filterHandler}
        placeholder="Search by Order ID"
      />
    </div>
  );
};

export default Filter;
