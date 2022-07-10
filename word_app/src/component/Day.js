//날짜를 클릭해서 들어가면 그 날짜에 해당하는 단어들 보여주기
import { useParams } from "react-router-dom"; //url에 포함되어 있는 값을 변수로 받아올 때 사용하는 기능
import useFetch from "../hooks/useFetch";
import Word from "./Word";

export default function Day() {
  const { day } = useParams(); //url 뒤에 :로 지정해준 변수명을 가져와 불러줌.
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
