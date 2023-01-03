import { Component } from "react";

function getNumbers() {
  // 숫자 4개를 랜덤하게 뽑는 함수 (중복X)
}

class NumberBaseball extends Component {
  state = {
    value: "",
    result: "",
    answer: getNumbers(),
    tries: 0,
  };

  onSubmitForm = (e) => {
    e.preventDefault();
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button>입력</button>
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {[1, 2, 3].map((el) => (
            <li>{el}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;

// module.exports NumberBaseball === export default NumberBaseball
// exports.hello = "hello" === export const hello = "hello"

// module.exports = { hello: "a" } === exports.hello = "a"
