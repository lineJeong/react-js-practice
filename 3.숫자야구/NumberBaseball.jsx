import React, { Component } from "react";
import Try from "./Try";

function getNumbers() {
  // 숫자 4개를 랜덤하게 뽑는 함수 (중복X)
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

class NumberBaseball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      result: "",
      answer: getNumbers(),
      tries: [],
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onSubmitForm(e) {
    e.preventDefault();
    if (this.state.value === this.state.answer.join("")) {
      this.setState((prevState) => {
        return {
          result: "홈런",
          tries: [
            ...prevState.tries,
            { try: this.state.value, result: "홈런!" },
          ],
        };
      });
      alert("게임을 다시 시작합니다.");
      this.setState({
        value: "",
        answer: getNumbers(),
        tries: [],
      });
    } else {
      const answerArray = this.state.value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) {
        this.setState({
          result: `10번 이상 틀려서 실패! 답은 ${answer.join(",")}였습니다.`,
        });
        alert("게임을 다시 시작합니다.");
        this.setState({
          value: "",
          answer: getNumbers(),
          tries: [],
        });
      } else {
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState((prevState) => {
          return {
            tries: [
              ...prevState.tries,
              {
                try: this.state.value,
                result: `${strike} 스트라이크, ${ball} 볼입니다.`,
              },
            ],
          };
        });
      }
    }
  }

  onChangeInput(e) {
    this.setState({ value: e.target.value });
  }

  text = [
    { id: 1, text: "1번" },
    { id: 2, text: "2번" },
    { id: 3, text: "3번" },
  ];

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
          {this.state.tries.map((v, i) => (
            <Try key={`${i + 1}차 시도:`} tryInfo={v} />
            // <li key={el.id + el.text}>{`${el.id} - ${el.text}`}</li>
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
