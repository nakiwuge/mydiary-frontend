import React from "react";
import LoginComponent from "../components/authComponents/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterComponent from "../components/authComponents/register";
import Home from "../views/entriesViews/home";
export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginComponent} exact strict />
          <Route path="/home" component={Home} exact strict />
          <Route path="/register" component={RegisterComponent} exact strict />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
