import React from "react";
import { useSelector } from "react-redux";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import history from "./config/History";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/dashboard" comp={Dashboard} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

const PrivateRoute = ({ comp: Component, ...rest }) => {
  const isLogged = useSelector((state) => state.auth.isLogged);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isLogged ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
