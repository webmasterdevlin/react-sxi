import React, { Component, Fragment } from "react";
import { Router } from "./Router";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <NavBar />
          <Router />
        </Fragment>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById("root"));
