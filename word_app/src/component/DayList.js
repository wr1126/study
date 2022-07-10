//단어가 배당된 각 날짜 나타내기 ex) Day 1, Day 2 ...
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
  //const [days, setDays] = useState([]);
  //저장된 더미데이터를 직접 이용하지 않고 이제는 서버에 저장된 데이터를 API로 가져와 빈 배열에 넣어줌.
  //배열을 바꾸게 되면 자동 리렌더링이 되면서 화면의 요소들도 업데이트 되게 됨.

  const days = useFetch("http://localhost:3001/days");

  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          {/* 각 날짜에 따른 단어 페이지로 이동하도록 */}
        </li>
      ))}
    </ul>
  );
}
