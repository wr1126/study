const React = require("react");

const GuGuDan = () => {
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");

  const inputRef = React.useRef();

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setValue("");
      setResult((prevResult) => {
        return "정답: " + prevResult;
      });
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      inputRef.current.focus();
    } else {
      setValue("");
      setResult("땡");
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>
        {first} X {second} ?
      </div>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} onChange={onChange} type="number" />
        <button>입력</button>
      </form>
      <div id="result">{result}</div>
    </>
  );
};

module.exports = GuGuDan;
