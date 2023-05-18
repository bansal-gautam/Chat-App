import React from "react";
import classes from "./Input.module.css";
import SendIcon from "@mui/icons-material/Send";

const Input = () => {
  return (
    <div className={classes.container}>
      <input type="text" placeholder="Type a Message"/>
      <SendIcon />
    </div>
  );
};

export default Input;
