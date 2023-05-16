import { useState } from "react";
import "./App.css";
import LeftSection from "./components/LeftSection";
import Chat from "./components/chat/Chat";

const App = () => {
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const clickHandler = () => {
    setShow(true);
  };

  const handleData = (info) => {
    setData(info);
  };

  return (
    <div className={show ? "showChats" : undefined}>
      <LeftSection
        className={show ? "widthf" : undefined}
        onClick={clickHandler}
        onData={handleData}
      />
      {show && <Chat chatInformation={data} />}
    </div>
  );
};

export default App;
