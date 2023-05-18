import React from "react";
import Header from "../header/Header";
import classes from "./RightSection.module.css";
import Input from "./input/Input";
import MessageContainer from "./messages/MesssageContainer";

const RightSection = (props) => {
  return (
    <>
      {props.clicked && (
        <div className={classes.container}>
          <Header
            section="right-section"
            data={props.data}
            onToggle={props.onToggle}
            width={props.width}
          />
          <MessageContainer data={props.data} />
          <Input />
        </div>
      )}
    </>
  );
};

export default RightSection;
