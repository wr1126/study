import "./App.css";
//import styled from "styled-components";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState("버튼");

  const onClick = () => {
    if (clicked === "버튼") {
      setClicked("클릭");
    } else {
      setClicked("버튼");
    }
  };

  const ToggleBtn = () => {
    return (
      <button id="toggle" onClick={onClick}>
        {clicked}
      </button>
    );
  };

  /* const Button = styled.button`
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
 */
  return (
    <div className="App">
      <ToggleBtn></ToggleBtn>
    </div>
  );
}

export default App;
