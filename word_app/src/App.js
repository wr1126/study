import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
import EmptyPage from "./component/EmptyPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch /* Switch의 내부는 url에 따라 다른 페이지를 보여주고, 바깥쪽은 바뀌지 않고 유지되는 페이지. */
        >
          <Route
            exact
            path="/"
            /* Switch로 route들을 감싸면 일치하는 것(/)들 중 가장 처음 것을 보여줌 -> 주소에 exact를 써주어야 함. 그러면 / 페이지에서는 정확히 / 안에 들어있는 요소만 보여줌. */
          >
            <DayList />
          </Route>
          <Route path="/day/:day">
            {/* url에 있는 값을 사용하기 위해 dayNum 변수로 url의 값(day)을 받아옴 */}
            <Day />
          </Route>
          <Route path="/create_word">
            <CreateWord />
          </Route>
          <Route path="/create_day">
            <CreateDay />
          </Route>
          <Route>
            {/* 앞에 있는 Route의 조건들에 모두 부합하지 않으면 가장 마지막의 이 페이지가 보여지게 됨. 따라서 가장 마지막에 위치해야 함. */}
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
