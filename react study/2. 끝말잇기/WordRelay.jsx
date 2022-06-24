//class로 작성한 끝말잇기 hooks로 바꾸기

const React = require("react");
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState("신신");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setWord(value);
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("땡");
      setValue("");
      inputRef.current.focus();
    }
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} value={value} onChange={onChange} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
