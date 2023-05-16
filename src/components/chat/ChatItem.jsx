import React from "react";
import classes from "./ChatItem.module.css";

const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${day}/${month}/${year}`;
};

const ChatItem = (props) => {
  const date = new Date(props.date);
  const formattedDate = formatDate(date);

  const clickHandler = () => {
    props.onClick();
    props.onData(props.chat);
  };

  return (
    <div onClick={clickHandler}>
      <hr className={classes.hr} />
      <div className={classes.container}>
        <div>
          <img src={props.src} alt={props.title} />
        </div>
        <div>
          <h3>{props.title}</h3>
          <h4>Order {props.orderId}</h4>
          <p>{props.lastMessage}</p>
        </div>
        <div className={classes.date}>{formattedDate}</div>
      </div>
    </div>
  );
};

export default ChatItem;
