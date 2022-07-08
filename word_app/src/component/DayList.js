//단어가 배당된 각 날짜 나타내기 ex) Day 1, Day 2 ...
import { Link } from "react-router-dom";
import dummy from "../db/data.json";

export default function DayList() {
  return (
    <ul className="list_day">
      {dummy.days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          {/* 각 날짜에 따른 단어 페이지로 이동하도록 */}
        </li>
      ))}
    </ul>
  );
}
