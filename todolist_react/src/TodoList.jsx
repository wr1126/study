import { useState } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoArr, setTodoArr] = useState([]);
  const [todoList, setTodoList] = useState("");

  const onDeleteBtnClicked = (e) => {
    e.target.parentNode.remove();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newArr = [...todoArr, inputValue];
    setInputValue("");
    setTodoList(
      newArr.map((todo, i) => {
        return (
          <li key={todo + i}>
            <span className="text">{todo}</span>
            <span className="delete" onClick={onDeleteBtnClicked}>
              🅧
            </span>
          </li>
        );
      })
    );
    setTodoArr(newArr);
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div id="todoBox">
      <div id="boxWrap">
        <form onSubmit={onSubmit}>
          <input
            placeholder="Write to-dos."
            value={inputValue}
            onChange={onChange}
          ></input>
        </form>
        <ul id="todoList">{todoList}</ul>
      </div>
    </div>
  );
};

export default TodoList;
