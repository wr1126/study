import "./App.css";
import { useState } from "react";

const Tabmenu = () => {
  const tabNames = ["HTML", "CSS", "JS", "REACT"];
  const tabContents = ["Html is...", "Css is...", "Js is...", "React is..."];
  const [idx, setIdx] = useState("0");
  const [active, setActive] = useState("");

  const onMenuClick = (e) => {
    setIdx(e.target.id);
    setActive("active");
  };

  return (
    <div id="tabMenu">
      <div id="menuWrapper">
        {tabNames.map((name, i) => {
          return (
            <div
              key={name.toString()}
              id={i}
              className={`tabName ${active}`}
              onClick={onMenuClick}
            >
              {name}
            </div>
          );
        })}
      </div>
      <div id="content">{tabContents[idx]}</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Tabmenu></Tabmenu>
    </div>
  );
}

export default App;
