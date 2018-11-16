import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Profile from "./components/Profile";

export const Router = () => (
  <div className="container-fluid m-3 p-3">
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/profile/:id" component={Profile} />

      <Redirect from="/" exact to="/home" />
    </Switch>
  </div>
);
export default Router;
