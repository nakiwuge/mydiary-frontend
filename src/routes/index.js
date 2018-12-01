import React from "react";
import LoginComponent from "../components/authComponents/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterComponent from "../components/authComponents/register";
import  ViewEntriesComponent from "../components/entries/viewEntries";
import CreateEntryComponent from "../components/entries/createEntry";
import ViewOneEntryComponent from "../components/entries/viewOneEntry";
import ProtectedRoute from "./protectedRoute";

export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginComponent} exact strict />
          <Route path="/register" component={RegisterComponent} exact strict />
          <ProtectedRoute path="/home" component={ViewEntriesComponent} exact strict/>
          <ProtectedRoute path="/home/:id" component={ViewOneEntryComponent } exact strict/>
          <ProtectedRoute  path="/create" component={CreateEntryComponent} exact strict />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
