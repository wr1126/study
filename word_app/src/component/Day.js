//날짜를 클릭해서 들어가면 그 날짜에 해당하는 단어들 보여주기
import dummy from "../db/data.json";
import { useParams } from "react-router-dom"; //url에 포함되어 있는 값을 변수로 받아올 때 사용하는 기능

export default function Day() {
  const { day } = useParams(); //url 뒤에 :로 지정해준 변수명을 가져와 불러줌.
  const wordList = dummy.words.filter((word) => word.day === Number(day)); //url로 들어오는 값은 문자이므로 비교하기 위해 숫자로 변경
  //단어의 날짜(day 값)가 1인 것만 출력되도록

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
