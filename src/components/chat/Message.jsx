import React from "react";
import "./Message.css";

const Message = ({ message }) => {
  return (
    <div className="message-div">
      {message.messageType === "text" && (
        <p className={`${message.sender} message`}>{message.message}</p>
      )}
      {message.messageType === "optionedMessage" && (
        <div className="optionDiv">
          <p className={`message`}>{message.message}</p>
          <div className="options">
            {message.options.map((option) => {
              return (
                <>
                  <p className="optionText">{option.optionText}</p>
                  <p className="optionSubText">{option.optionSubText}</p>
                </>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
