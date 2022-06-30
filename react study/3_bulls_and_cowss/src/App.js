import "./App.css";
import { useState } from "react";
//exports 되는 게(import해오는 대상이) 객체나 배열이면
//저렇게 구조분해 방식({})으로 작성할 수 있음.
//맨 아래로 내려가기

const BullsNCows = () => {};

function App() {
  return <div className="App"></div>;
}

export default App;
//여기로 이동하기
//export default 태그명; 이런 식으로 export한 것을 받아올 때는 그냥 import 태그명 from '경로명';
//export const hello = "hello"; 이런 식으로 export한 것을 받아올 때는 import { hello } from '경로명' 이렇게 받아와야 함.
//default는 파일 당 딱 한 번만 쓸 수 있지만, 아래와 같은 변수 선언 방식은 여러 번 사용 가능.
