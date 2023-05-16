import React from "react";
import classes from "./Chat.module.css";
import SendIcon from "@mui/icons-material/Send";
import Message from "./Message";

const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${day}/${month}/${year}`;
};

const getDate = (chat) => {
  // console.log(chat)
  if (chat.length !== 0) {
    const lastmsg = chat[chat.length - 1];
    const date = lastmsg.timestamp;
    const gotDate = new Date(date);
    const formattedDate = formatDate(gotDate);
    return formattedDate;
  }
};

const Chat = ({ chatInformation }) => {
  const date = getDate(chatInformation.messageList);
  return (
    <div className={classes.container}>
      <header>
        <img src={chatInformation.imageURL} alt={chatInformation.title} />
        <h3>{chatInformation.title}</h3>
      </header>
      {chatInformation.messageList.length === 0 ? (
        <div className={classes.messages}>Send a message to start Chatting</div>
      ) : (
        <div className={classes.foundMessages}>
          <span className={classes.date}>{date}</span>
          {chatInformation.messageList.map((msg) => {
            return <Message key={msg.messageId} message={msg} />;
          })}
        </div>
      )}
      <div className={classes.input}>
        <input type="text" />
        <SendIcon />
      </div>
    </div>
  );
};

export default Chat;
