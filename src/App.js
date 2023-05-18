import { useEffect, useState } from "react";
import "./App.css";
import LeftSection from "./components/left-section/LeftSection";
import RightSection from "./components/right-section/RightSection";

function App() {
  const [data, setData] = useState([]);
  const [clickedChat, setClickedChat] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/codebuds-fk/chat/chats"
      );
      const result = await response.json();
      setData(result);
    };
    if (data.length === 0) {
      fetchData();
    }
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (windowWidth <= 1032) {
      setIsClicked(false);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [data, windowWidth]);

  const bgChange = (value) => {
    for (let i = 1; i <= 10; i++) {
      if (document.getElementById(`box${i}`) !== null) {
        document.getElementById(`box${i}`).style.backgroundColor = "white";
      }
    }
    document.getElementById(`box${value.id}`).style.backgroundColor =
      "rgb(204, 204, 204)";
  };

  const toggleHandler = () => {
    if (windowWidth <= 1032) {
      setToggle(!toggle);
      setIsClicked(!isClicked);
    }
  };

  const clickHandler = (value) => {
    setClickedChat(value);
    bgChange(value);
    setIsClicked(true);
    toggleHandler();
  };
  return (
    <div className={isClicked && "cont"}>
      <LeftSection
        data={data}
        onClick={clickHandler}
        clicked={isClicked}
        width={windowWidth}
        toggle={toggle}
      />
      <RightSection
        data={clickedChat}
        clicked={isClicked}
        width={windowWidth}
        onToggle={toggleHandler}
      />
    </div>
  );
}

export default App;
