import React from "react";
import { mount } from "enzyme";
import App from "../App";
import "../setupTests";

it("renders without crashing", () => {
  mount(<App />);
});
