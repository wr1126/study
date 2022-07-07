import "./App.css";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState("false");
  const [tempClicked, setTempClicked] = useState("false");

  const onClick = () => {
    setTempClicked("false");
    setClicked("true");
  };

  const tempClick = () => {
    setClicked("false");
    setTempClicked("true");
  };

  const Button = () => {
    return (
      <button
        value={clicked}
        onClick={onClick}
        className={clicked === "true" ? "clickedBtn" : null}
      >
        button
      </button>
    );
  };

  const TempButton = () => {
    return (
      <button
        value={tempClicked}
        onClick={tempClick}
        className={tempClicked === "true" ? "clickedBtn" : null}
      >
        tempBtn
      </button>
    );
  };

  return (
    <div className="App">
      <Button></Button>
      <TempButton></TempButton>
    </div>
  );
}

export default App;
