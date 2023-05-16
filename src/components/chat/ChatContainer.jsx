import React, { useState, useEffect } from "react";
import ChatItem from "./ChatItem";

const ChatContainer = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      fetch("https://my-json-server.typicode.com/codebuds-fk/chat/chats")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    if (data.length === 0) {
      fetchData();
    }
  }, [data]);

  const getLastMessage = (chat) => {
    const messageArray = chat.messageList;
    if (messageArray.length !== 0) {
      const lastMessage = messageArray[messageArray.length - 1];
      return lastMessage.message;
    }
  };
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        data.map((item) => {
          return (
            <ChatItem
              key={item.id}
              title={item.title}
              src={item.imageURL}
              orderId={item.orderId}
              date={item.latestMessageTimestamp}
              lastMessage={getLastMessage(item)}
              onClick={props.onClick}
              onData={props.onData}
              chat={item}
            />
          );
        })}
    </div>
  );
};

export default ChatContainer;
