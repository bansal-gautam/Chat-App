import React from "react";
import "./LeftSection.css";

import Header from "./header/Header";
import ChatContainer from "./chat/ChatContainer";

const LeftSection = (props) => {
  return (
    <div className={`container ${props.className}`}>
      <Header />
      <ChatContainer onClick={props.onClick} onData={props.onData} />
    </div>
  );
};

export default LeftSection;
