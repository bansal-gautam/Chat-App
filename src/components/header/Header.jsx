import React from "react";
import Filter from "./Filter";
import Chat from "./Chat";

const Header = (props) => {
  const filterHandler = (value) => {
    props.onChange(value);
  };
  return (
    <>
      {props.section === "left-section" ? (
        <Filter getfilter={filterHandler} />
      ) : (
        <Chat
          src={props.data.imageURL}
          title={props.data.title}
          onToggle={props.onToggle}
          width={props.width}
        />
      )}
    </>
  );
};

export default Header;
