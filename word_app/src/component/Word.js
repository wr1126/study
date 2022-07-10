import { useState } from "react";

export default function Word({ word: w }) {
  //props로 넘어온 word라는 인자를 새로운 변수명으로 할당할 수 있음
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  //처음에는 뜻이 보이지 않음.
  const [isDone, setIsDone] = useState(word.isDone);
  //원본 데이터를 직접 변경해서는 안됨.

  function toggleShow() {
    setIsShow(!isShow);
  }
  function toggleDone() {
    //체크 상태 업데이트 함수
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        //보내는 데이터의 타입. update이니까 이쪽에서 보내는 데이터가 존재할 것이므로 이에 대한 정보를 지정해줘야 함.
      },
      body: JSON.stringify({
        //실제로 보내는 데이터. 기존 데이터 + isDone 부분을 반대로 바꾸어서 보냄.
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
        //응답을 받아서 정상적으로 작동이 되었으면 화면에도 반대로 요소를 그려줘야 하므로 state를 반대로 변경해줌.
      }
    });
    //명령을 실행할 주소. 단어의 상태를 업데이트하고 저장할 것이므로 각 단어의 아이디가 주소가 됨.
    //두번째 인자로 객체를 넣으면 요청의 옵션들을 지정할 수 있음. 어떤 종류의 요청을 할 것인지 등등
  }
  function del() {
    //단어 삭제 함수
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord({ id: 0 }); //단어가 삭제되면 화면에도 바로바로 반영을 해줘야 하므로.
        }
      });
    }
  }

  if (word.id === 0) {
    return null;
    //기존 데이터를 날리고 null로 대체함. delete를 화면에 그려내는 방법
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone}></input>
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      {/* 뜻은 isShow가 true일 때만 보여지도록 설정 */}
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button onClick={del} className="btn_del">
          삭제
        </button>
      </td>
    </tr>
  );
}
