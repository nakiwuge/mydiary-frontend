import React from "react";
import Login from "../components/authComponents/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact strict />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
