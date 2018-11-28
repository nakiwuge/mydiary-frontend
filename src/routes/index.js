import React from "react";
import Login from "../components/authComponents/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterComponent from "../components/authComponents/register";

export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact strict />
          <Route path="/register" component={RegisterComponent} exact strict />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
