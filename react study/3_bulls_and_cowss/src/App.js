import "./App.css";
import { useState } from "react";
//exports 되는 게(import해오는 대상이) 객체나 배열이면
//저렇게 구조분해 방식({})으로 작성할 수 있음.
//맨 아래로 내려가기

const Try = ({tryInfo}) => {
  return(
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  )
}

const BullsNCows = () => {
  const [result, setResult] = useState(""); //결과를 알려주는 문구
  const [value, setValue] = useState(""); //사용자가 입력한 input 값
  const [answer, setAnswer] = useState(getNumbers); //문제의 답
  //함수를 넣되, 리렌더링 될 때마다 이 함수도 새로 실행되는 불필요한 실행을 막기 위해
  //함수명만 넣어주고 ()를 빼서 실행은 막아줌.
  //-> 이렇게 함수를 넣어주는 경우를 lazy init(늦은 초기화)이라고 부름.
  //   함수가 실행돼서 return 값을 낼 때까지 기다려준다는 의미에서.
  //useState안에 인자로 함수를 넣어주면 초기에 한번 실행된 return 값이 answer로 들어가고
  //이후부터는 함수가 실행되기는 하지만. 쓰지도 않을 값을 계속 계산하고 있으면 비효율적이므로.
  const [tries, setTries] = useState([]); //사용자가 입력했던 숫자들의 배열

  function getNumbers() {
    //문제를 내는 함수
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
      const chosenNum = candidate.splice(Math.floor(Math.random() * 9));
      array.push(chosenNum);
    }
    return array;
  }

  function onSubmit(e) {
    e.preventDefault();
    if (value === answer.join("")) {
      //답을 맞췄을 때
      setResult("홈런!");
      setTries((prevTries) => {
        //예전 값을 새로운 값을 만들어내는 데 이용할 때는 함수형으로 작성해주기.
        return [...prevTries, { try: value, result: "홈런" }];
        //원본을 수정하지 말고 react가 변경사항을 감지할 수 있도록
        //이전값을 복제하여 새로운 배열에 넣고, 새로운 값을 연달아 넣어줘야 함.
      });
      alert("게임을 다시 시작합니다.");
      setValue(""); //input 비우기
      setAnswer(getNumbers()); //맞출 숫자를 다시 뽑기. 여기는 일반적인 함수 호출 방식으로 써야 함.
      setTries([]); //사용자가 시도한 배열값 초기화
    } else {
      //답을 틀렸을 때
      if (tries.length >= 9) {
        //10번 넘게 틀린 경우
        setResult(`실패. 답은 ${answer.join(",")}였습니다.`);
        alert("게임을 다시 시작합니다.");
        setValue("");
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prevTries) => {
          return [
            ...prevTries,
            { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.` },
          ];
        });
        setValue("");
      }
    }
  }
  function onChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmit}>
        <input maxLength={4} value={value} onChange={onChange}></input>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {
          {tries.map(v, i) => {
            return(
              <Try key={`${i + 1}차 시도: `}>tryInfo={v}</Try>
            )
          }}
        }
      </ul>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BullsNCows></BullsNCows>
    </div>
  );
}

export default App;
//여기로 이동하기
//export default 태그명; 이런 식으로 export한 것을 받아올 때는 그냥 import 태그명 from '경로명';
//export const hello = "hello"; 이런 식으로 export한 것을 받아올 때는 import { hello } from '경로명' 이렇게 받아와야 함.
//default는 파일 당 딱 한 번만 쓸 수 있지만, 아래와 같은 변수 선언 방식은 여러 번 사용 가능.

//react의 렌더링의 기준은 어쨌든 데이터가 setState를 통해 변경되어야 하는 건데,
//만약 원본 배열에 push를 하여 데이터를 변경시킨다든지 하게 되면 react 입장에서는 변경을 감지를 하지 못함.
//그래서 새로고침 및 변경사항을 적용한 새로운 컴포넌트 렌더 자체를 안 하게 되는 것.
//따라서 원본 데이터를 복사한 배열을 만들고 그 안에 새로운 데이터를 넣은 다음
//setState로 그 새로운 배열을 넣어주면, react가 배열이 변경되었음을 알게 되므로 정상적으로 렌더링이 이루어지게 됨.
//비교대상들의 차이를 확실히 해줘야 한다는 뜻.
