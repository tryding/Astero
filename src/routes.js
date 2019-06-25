import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Home from "./components/home";
import Media from "./components/GameMedia";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game/media" component={Media} />
      </Switch>
    );
  }
}
