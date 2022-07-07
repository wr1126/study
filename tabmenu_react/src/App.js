import "./App.css";
import { useState } from "react";

function App() {
  const tabNames = ["HTML", "CSS", "JS", "REACT"];
  const tabContents = {
    0: "Html is...",
    1: "Css is...",
    2: "Js is...",
    3: "React is...",
  };
  const [idx, setIdx] = useState("0");
  const [active, setActive] = useState("");

  const onMenuClick = (e) => {
    setIdx(e.target.id);

    for (let i = 0; i < tabNames.length; i++) {
      console.log(tabNames[i].id);
      if (e.target.id === tabNames[i].id) {
        setActive("active");
      } else {
        setActive("");
      }
    }
  };

  return (
    <div className="App">
      <div id="tabMenu">
        <div id="menuWrapper">
          {tabNames.map((name, i) => {
            return (
              <div
                key={name.toString()}
                id={i}
                className={`tabName ${active === "active" ? "active" : null}`}
                onClick={onMenuClick}
              >
                {name}
              </div>
            );
          })}
        </div>
        <div id="content">{tabContents[idx]}</div>
      </div>
    </div>
  );
}

export default App;
