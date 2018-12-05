import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import Home from "../../views/entriesViews/home";
import NavBar from "../../views/entriesViews/navBar";

const props = {
  entries: { map: jest.fn },
  msg:{}
};

describe("Home component", () => {
  it("has a div", () => {
    const wrapper = shallow(<Home {...props} />);
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
describe("NavBar component", () => {
  it("has a div", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find("div"));
  });
});
