import React, { Component } from "react";

export default class About extends Component {
  state = {
    counter: 0
  };

  render() {
    return (
      <div>
        <h2>About Works!</h2>
        <p>
          Counter: <strong>{this.state.counter}</strong>
        </p>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increment
        </button>
      </div>
    );
  }
}
