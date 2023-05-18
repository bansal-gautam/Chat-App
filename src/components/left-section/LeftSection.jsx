import React, { useState } from "react";
import Header from "../header/Header";
import ChatContainer from "./chats/ChatContainer";
import classes from "./LeftSection.module.css";

const LeftSection = (props) => {
  const [filter, setFilter] = useState("");
  const filterHandler = (value) => {
    setFilter(value);
  };

  const classSelector = () => {
    if (props.width <= 1032 && !props.toggle) {
      return classes.container;
    }
    if (props.toggle) {
      return classes.toggle;
    }
    if (props.width > 1032 && props.clicked) {
      return classes.con
    }
  };
  return (
    <>
      <div className={classSelector()}>
        <Header section="left-section" onChange={filterHandler} />
        <ChatContainer
          data={props.data}
          filter={filter}
          onClick={props.onClick}
        />
      </div>
    </>
  );
};

export default LeftSection;
