import { useRef } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();
    //저장 버튼을 입력하면 새로운 단어를 생성하는(CREATE) 기능
    fetch(`http://localhost:3001/words/`, {
      //생성할 위치 지정
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //어떤 값들로 구성해서 생성할지 결정
        day: dayRef.current.value, //사용자가 현재 입력창에 입력한 값을 참조하여 그대로 넣어줌.
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료되었습니다.");
        history.push(`/day/${dayRef.current.value}`);
        //단어 생성 완료 후 자동으로 이 페이지로 이동함.
        //Link to처럼 a태그를 사용하지 않고 페이지 전환할 때 사용
      }
    });
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);
  //useRef를 만들어 접근하고 싶은 elements에 연결해주면 해당 요소의 Dom에 접근할 수 있음.

  return (
    <form>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => {
            return (
              <option key={day.id} value={day.day}>
                {day.day}
              </option>
            );
          })}
        </select>
      </div>
      <button onClick={onSubmit}>저장</button>
    </form>
  );
}
