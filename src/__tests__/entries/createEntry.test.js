import React from "react";
import { mount, shallow } from "enzyme";
import "../../setupTests";
import { CreateEntry } from "../../components/entries/createEntry";
import { MemoryRouter } from "react-router-dom";
let addEntry = jest.fn();
const props = {
  message: {},
  history: { push: "/home" },
  addEntry,
  getEntries: jest.fn()
};

describe("CreateEntry component", () => {
  let wrapper;

  beforeEach(() => {
    let component = mount(
      <MemoryRouter>
        <CreateEntry {...props} />
      </MemoryRouter>
    );
    wrapper = component.find("CreateEntry");
  });
  it("render changes state", () => {
    wrapper.instance().handleChange({
      target: { type: "", value: "user", name: " " },
      preventDefault: jest.fn()
    });
  });
  it("submits data on click", () => {
    const spy = jest.spyOn(wrapper.instance(), "handleSubmit");
    wrapper.instance().forceUpdate();
    wrapper.find("form").simulate("submit");
    expect(spy).toBeCalled();
  });

  describe("handleSubmit", () => {
    it("should call addEntry prop when invoked ", () => {
      wrapper.instance().handleSubmit({ preventDefault: jest.fn() });
      expect(props.addEntry).toBeCalled();
    });
  });

  it("redirects when recieves message in nextProps", () => {
    wrapper = shallow(<CreateEntry {...props} />);
    wrapper.setProps({
      message: "entry has been added successfully",
      history: { push: jest.fn() }
    });
  });
  it("recieves nextProps", () => {
    wrapper = shallow(<CreateEntry {...props} />);
    wrapper.setProps({});
  });
});
