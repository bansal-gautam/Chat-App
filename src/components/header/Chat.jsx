import React from "react";
import classes from "./Chat.module.css";
// import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Chat = (props) => {
  return (
    <div className={classes.container}>
      {props.width <= 1032 && (
        <span className={classes.icon} onClick={props.onToggle}>
          <ArrowBackIosIcon />
        </span>
      )}
      <img src={props.src} alt={props.title} />
      <h4>{props.title}</h4>
    </div>
  );
};

export default Chat;
