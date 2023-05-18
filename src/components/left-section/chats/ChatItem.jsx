import React from "react";
import classes from "./ChatItem.module.css";

const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${day}/${month}/${year}`;
};

const ChatItem = ({ data, onClick }) => {
  const propsDate = new Date(data.latestMessageTimestamp);
  const formattedDate = formatDate(propsDate);

  const clickHandler = () => {
    onClick(data);
  };
  return (
    <div
      className={classes.container}
      onClick={clickHandler}
      id={`box${data.id}`}
    >
      <div className={classes.imgDiv}>
        <img src={data.imageURL} alt={data.title} className={classes.img} />
      </div>
      <div className={classes.childContainer}>
        <div className={classes.overview}>
          <h6>{data.title}</h6>
          <h6>Order {data.orderId}</h6>
          <p>
            {data.messageList.length !== 0 &&
              data.messageList[data.messageList.length - 1].message}
          </p>
        </div>
        <div className={classes.date}>{formattedDate}</div>
      </div>
    </div>
  );
};

export default ChatItem;
export { formatDate };
