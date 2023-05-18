import React from "react";
import classes from "./MessageItem.module.css";

const MessageItem = ({ messageInfo }) => {
  return (
    <div className={classes.messageContainer}>
      {messageInfo.sender === "BOT" &&
        messageInfo.messageType !== "optionedMessage" && (
          <div className={classes.bot}>
            <p>{messageInfo.message}</p>
          </div>
        )}
      {messageInfo.sender === "USER" && (
        <div className={classes.user}>
          <p>{messageInfo.message}</p>
        </div>
      )}
      {messageInfo.messageType === "optionedMessage" && (
        <div className={classes.optionedMessage}>
          <p className={classes.opt}>{messageInfo.message}</p>
          <div className={classes.option}>
            {messageInfo.options.map((item) => (
              <div className={classes.opti} key={`${Math.random()*10000}`}>
                <p className={classes.first}>{item.optionText}</p>
                <p className={classes.second}>{item.optionSubText}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageItem;
