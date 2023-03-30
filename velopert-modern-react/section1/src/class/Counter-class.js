import { Component } from "react";

class Counter extends Component {
  // 방법1 : 클래스의 생성자 메서드 constructor 에서 bind 작업 (가장 일반적인 방법)
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       counter: 0,
  //     };
  //     this.handleIncrease = this.handleIncrease.bind(this);
  //     this.handleDecrease = this.handleDecrease.bind(this);
  //   }

  //   handleIncrease() {
  //     console.log(this);
  //   }
  //   handleDecrease() {
  //     console.log(this);
  //   }

  // 방법2 : 화살표 함수 (CRA처럼 class-properties 문법이 적용돼있을 때)
  state = {
    counter: 0,
    fixed: 1,
  };

  // 함수형 업데이트는 보통 한 함수에서 setState를 여러번에 걸쳐서 해야 되는 경우에 사용하면 유용함
  // +2가 아니라 +1이 됨
  handleIncrease = () => {
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => console.log("setState 1")
    );
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => console.log("setState 2")
    );
  };
  // 함수형 업데이트는 -2가 됨
  handleDecrease = () => {
    this.setState((prev) => ({ counter: prev.counter - 1 }));
    this.setState((prev) => ({ counter: prev.counter - 1 }));
  };

  render() {
    return (
      <div>
        <h1>클래스형: {this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-2</button>
        <p>고정된 값: {this.state.fixed}</p>
        {/* 방법3 : 새로운 함수를 만들어서 전달 */}
        {/* 렌더링 할 때마다 함수가 새로 만들어지기 때문에 최적화가 까다로움 => 비추천 */}
        {/* <button onClick={() => this.handleIncrease()}>+1</button>
        <button onClick={() => this.handleDecrease()}>+1</button> */}
      </div>
    );
  }
}

export default Counter;
