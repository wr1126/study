import "./App.css";
import { useState } from "react";

function GuGuDan() {
  const [firstNum, setFirstNum] = useState(Math.ceil(Math.random() * 9));
  const [seconNum, setSeconNum] = useState(Math.ceil(Math.random() * 9));
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  function onChange(e) {
    setInputValue(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (Number(e.target[0].value) === firstNum * seconNum) {
      setResult("정답");
      setInputValue("");
      setFirstNum(Math.ceil(Math.random() * 9));
      setSeconNum(Math.ceil(Math.random() * 9));
    } else {
      setResult("땡");
      setInputValue("");
    }
  }

  return (
    <>
      <div>
        {firstNum} X {seconNum} ?
      </div>
      <form onSubmit={onSubmit}>
        <input type="number" value={inputValue} onChange={onChange}></input>
        <input type="button" value="입력"></input>
      </form>
      <div>{result}</div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <GuGuDan></GuGuDan>
    </div>
  );
}

export default App;
