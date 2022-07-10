//custom hooks
import { useState, useEffect } from "react";

export default function useFetch(url) {
  //요소를 사용하는 부분들로부터 url을 인자로 받아 바뀌는 부분에 따로 넣어줌.
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url) //데이터를 받아올 json 파일이 존재하는 주소. useFetch 함수에 인자로 받은 주소를 useEffect로 연결
      .then((res) => {
        return res.json(); //실제로 받아오는 응답은 Json 형식이 아니기 때문에 그냥 res 가 아니라 변환하는 과정 필요
      })
      .then((data) => {
        setData(data);
        //받아온 데이터를 위에 정의한 빈 배열에 넣어줌. 이 때 id랑 day가 함께 있는데 아마도 id는 자동으로 생략되는 듯?
      });
  }, [url]);
  //useEffect 내부에서 day와 같이 특정 값을 사용하는 경우 의존성 배열 안에 저 변수 값을 적어줘야 함.
  //빈 배열을 입력하는 자체가 최초에만 호출되고 말겠다는 뜻이므로, day 값이 변경되어도 새로운 값을 가져올 수 없음.
  //그 특정 값을 입력해주면 항상 최신값을 불러올 수 있게 됨.

  return data;
  //서버로부터 데이터를 받아 json 형식으로 변환 완료된 데이터를 반환함.
}
