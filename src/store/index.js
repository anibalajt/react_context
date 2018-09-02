import React, { Component, createContext } from "react";
import ActionTypes from "./ActionTypes";
const { Provider, Consumer } = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER:
      return { user: { name: "Andres Jarava" } };
    default:
      return null;
  }
};

class ContextStore extends Component {
  state = {
    user: {},
    dispatch: action => {
      const response = reducer(this.state, action);
      this.setState(response);
    }
  };
  render() {
    const { store } = this.props;
    const { dispatch } = this.state;

    return (
      <Provider
        value={store ? { [store]: this.state[store], dispatch } : this.state}
      >
        {this.props.component}
      </Provider>
    );
  }
}
const WrapperConsumer = Component => {
  return props => {
    return (
      <Consumer>
        {context => <Component {...props} context={context} />}
      </Consumer>
    );
  };
};
export default WrapperConsumer;
export { ActionTypes };
export { ContextStore };
