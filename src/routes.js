import React, {Component} from "react";
import { Route, Switch } from "react-router";
import Home from './components/home'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}
