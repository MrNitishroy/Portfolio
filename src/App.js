import logo from "./logo.svg";
import "./App.css";
import Desktop from "./Pages/Desktop/Desktop";
import Taskbar from "./components/Taskbar";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import { Col, Row } from "antd";
import { LeftSide } from "./components/LeftSide/LeftSide";
import { RightSide } from "./components/RightSide/RightSide";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setTimeout(() => {
        setX(event.clientX);
        setY(event.clientY);
      }, 200);
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Col className="bg">
          <div
            className="mouseCursor"
            style={{ top: `${y}px`, left: `${x - 130}px` }}
          >
            Nitish kumar
          </div>
          <Taskbar />
          <Col className="leftSide">
            <LeftSide />
          </Col>
          <Col className="rightSide">
            <RightSide />
          </Col>
        </Col>
      </BrowserRouter>
    </>
  );
}

export default App;
