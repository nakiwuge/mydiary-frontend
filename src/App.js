import React, { Component } from "react";
import { Provider } from "react-redux";

import AppRoutes from "./routes";

class App extends Component {
  render() {
    return (
      <Provider >
        <AppRoutes/>
      </Provider>
    );
  }
}

export default App;
