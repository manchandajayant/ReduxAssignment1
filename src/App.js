import React, { Component } from "react";
import "./App.css";
import Developerslist from "./components /DevelopersList";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components /Homepage";
import Toolbar from "./components /Toolbar";
import PostPage from "./components /PostPage";
import LoginPage from "./components /LoginPage";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <Route path="/developers" component={Developerslist} />
          <Route path="/read/:id" component={PostPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}
