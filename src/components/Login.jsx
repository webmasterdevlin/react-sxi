import React, { Component } from "react";
import Form from "./Form";

class Login extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    console.log("typing", e.currentTarget.value);
    this.setState({ text: e.currentTarget.value });
  };

  render() {
    return (
      <>
        <h2>Login Works!</h2>
        <Form eventItoNiParent={this.handleChange} />
        <p>
          {this.state.text && "Your password is: "} {this.state.text}
        </p>
      </>
    );
  }
}

export default Login;
