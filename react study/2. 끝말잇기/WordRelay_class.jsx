const React = require("react");

class WordRelay_class extends React.Component {
  state = {
    word: "신신",
    value: "",
    result: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: "딩동댕",
        word: this.state.value,
        value: "",
      });
      this.input.focus();
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
      this.input.focus();
    }
  };
  onChange = (e) => {
    this.setState({ value: e.target.value });
  };
  onRefInput = (c) => {
    this.input = c;
  };

  input;

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmit}>
          <input
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChange}
          />
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay_class;
