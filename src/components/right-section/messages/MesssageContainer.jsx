import React from "react";
import classes from "./MessageContainer.module.css";
import MessageItem from "./MessageItem";
import { formatDate } from "../../left-section/chats/ChatItem";
// import MessageItem from "./MessageItem";

const MessageContainer = (props) => {
  const messageArray = props.data.messageList;
  const date = formatDate(new Date(props.data.latestMessageTimestamp));
  return (
    <div className={classes.container}>
      {messageArray.length !== 0 && (
        <div className={classes.messageContainer}>
          <div className={classes.dummy}></div>
          <p className={classes.date}>{date}</p>
          {messageArray.map((item,index) => (
            <MessageItem key={`${item.messageId}${index}`} messageInfo={item} />
          ))}
        </div>
      )}
      {messageArray.length === 0 && (
        <div className={classes.empty}>
          <p>Send a message to start chatting</p>
        </div>
      )}
    </div>
  );
};

export default MessageContainer;
