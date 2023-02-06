import React, { PureComponent } from "react";

class RenderTest extends PureComponent {
  state = {
    counter: 0,
    string: "hello",
    boolean: true,
    object: { a: 1, b: 2 },
    array: [1, 2, 3, 4, 5],
  };

  //   shouldComponentUpdate(nextProps, nextState, nextContext) {
  //     if (this.state.counter !== nextState.counter) {
  //       return true;
  //     }
  //     return false;
  //   }

  onClick = () => {
    this.setState({});
  };

  render() {
    console.log("랜더링", this.state);
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default RenderTest;
