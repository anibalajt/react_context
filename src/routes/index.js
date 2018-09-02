import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ContextStore } from "../store";
import App from "../App";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={props => <ContextStore component={<App />} />}
      />
    </Switch>
  </BrowserRouter>
);
