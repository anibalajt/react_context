import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import WrapperConsumer, { ActionTypes } from "./store";

class App extends Component {
  componentDidMount = () => {
    const { user, dispatch } = this.props.context;
    if (!user.name) {
      dispatch({ type: ActionTypes.GET_USER });
    }
  };
  render() {
    const { user } = this.props.context;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{user.name && user.name}</p>
      </div>
    );
  }
}

export default WrapperConsumer(App);
