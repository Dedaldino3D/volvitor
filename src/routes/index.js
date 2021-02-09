import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MainApp } from "../components/App";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "./PrivateRoute";

export const DefaultRoutes = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute component={MainApp} />
    </Switch>
  </Router>
);

export default DefaultRoutes;
