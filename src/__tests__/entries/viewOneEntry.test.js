import React from "react";
import { mount, shallow } from "enzyme";
import "../../setupTests";
import { ViewOneEntry } from "../../components/entries/viewOneEntry";
import { MemoryRouter } from "react-router-dom";
let getEntry = jest.fn();
let editEntry = jest.fn();

const props = {
  entry: {},
  getEntry,
  editEntry,
  match: { params: { id: "2" } },
  deleteEntry: jest.fn,
  history: { push: jest.fn() },
  getEntries: jest.fn()
};
let wrapper;
describe("ViewOneEntry component", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <ViewOneEntry {...props} />
      </MemoryRouter>
    );
    wrapper = component.find("ViewOneEntry");
  });
  it("calls handleSave", () => {
    wrapper.instance().handleSave({ preventDefault: jest.fn() });
    expect(props.editEntry).toBeCalled();
  });
  it("toggles when edit is clicked", () => {
    expect(
      wrapper.instance().toggle({
        target: { type: "", value: "user", name: " ", id: "edit-btn" },
        preventDefault: jest.fn()
      })
    ).toBeUndefined();
  });
  it("toggles when delete is clicked is clicked", () => {
    expect(
      wrapper.instance().toggle({
        target: { type: "", value: "user", name: " ", id: "delete-btn" },
        preventDefault: jest.fn()
      })
    ).toBeUndefined();
  });

  it("render changes state", () => {
    wrapper.instance().handleChange({
      target: { type: "", value: "user", name: " " },
      preventDefault: jest.fn()
    });
  });
  it("handles delete", () => {
    wrapper.instance().handleDelete({
      preventDefault: jest.fn()
    });
  });
  it("handles click", () => {
    wrapper.instance().handleClick({
      preventDefault: jest.fn()
    });
  });

  it("redirects when recieves message in nextProps", () => {
    wrapper = shallow(<ViewOneEntry {...props} />);
    wrapper.setProps({
      message: "the update was successfull"
    });
  });
});
