import React, { Component } from "react";

class Try extends Component {
  render() {
    return (
      <li
        key={this.props.value.id}
      >{`${this.props.index} - ${this.props.value.text}`}</li>
    );
  }
}

export default Try;
