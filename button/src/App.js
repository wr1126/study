import "./App.css";
import styled from "styled-components";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState("false");

  const Button = styled.button`
    cursor: pointer;
    border: none;
    width: 100px;
    height: 50px;
    background-color: lightgray;
    margin-right: 5px;
    :active {
      background-color: black;
      color: white;
    }
  `;

  return (
    <div className="App">
      <button>얍</button>
      <Button className={clicked ? "active" : ""} onClick={setClicked("true")}>
        버튼1
      </Button>
      <Button className={clicked ? "active" : ""} onClick={setClicked("true")}>
        버튼2
      </Button>
    </div>
  );
}

export default App;
