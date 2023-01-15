import React, { Component } from "react";

// 클래스의 경우
// constructor -> render -> ref -> componentDidMount
// -> (setState/props 바꿀 때 -> shouldcComponentUpdate -> render -> componentDidUpdate)
// 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

class RSP extends Component {
  state = {
    result: "",
    score: 0,
    imgCoord: 0,
  };

  componentDidMount() {
    // 컴포넌트 첫 렌더링된 후
  }

  componentDidUpdate() {
    // 리렌더링 후
  }

  componentWillUnmount() {
    // 컴포넌트가 제거되기 직전
  }

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        ></div>
        <div>
          <button
            id="rock"
            claaName="btn"
            onClick={() => this.onClickBtn("바위")}
          >
            바위
          </button>
          <button
            id="sissors"
            claaName="btn"
            onClick={() => this.onClickBtn("가위")}
          >
            가위
          </button>
          <button
            id="paper"
            claaName="btn"
            onClick={() => this.onClickBtn("보")}
          >
            보
          </button>
        </div>
        <div>{result}</div>
        <div>전체 {score}점</div>
      </>
    );
  }
}

export default RSP;
