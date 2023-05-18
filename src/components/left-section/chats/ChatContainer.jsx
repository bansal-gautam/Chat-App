import React from "react";
import ChatItem from "./ChatItem";

const ChatContainer = (props) => {
  return (
    <div>
      {props.data
        .filter((item) => item.orderId.includes(props.filter))
        .map((item) => (
          <ChatItem key={item.id} data={item} onClick={props.onClick} />
        ))}
    </div>
  );
};

export default ChatContainer;
