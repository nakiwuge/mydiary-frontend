import React from "react";
import LoginComponent from "../components/authComponents/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterComponent from "../components/authComponents/register";
import  ViewEntriesComponent from "../components/entries/viewEntries";

export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginComponent} exact strict />
          <Route path="/home" component={ViewEntriesComponent} exact strict />
          <Route path="/register" component={RegisterComponent} exact strict />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
