import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./config/Reactotron/ReactotronConfig";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

import history from "./config/History";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/dashboard" comp={Dashboard} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
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

export default App;
