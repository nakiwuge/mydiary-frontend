import React from "react";
import { mount } from "enzyme";
import "../../setupTests";
import { ViewOneEntry } from "../../components/entries/viewOneEntry";

let getEntry = jest.fn();
let editEntry = jest.fn();

const props = {
  entry: {},
  getEntry,
  editEntry,
  match: { params: { id: "2" } },
  deleteEntry:jest.fn,
  history: { push: jest.fn()}

};
let wrapper;
describe("ViewOneEntry component", () => {
  beforeEach(() => {
    wrapper = mount(<ViewOneEntry {...props} />);
  });
  it("calls handleSave", () => {
    wrapper.instance().handleSave({ preventDefault: jest.fn() });
    expect(props.editEntry).toBeCalled();
  });
  it("calls handleSave", () => {
    expect(wrapper.instance().toggle({
      target: { type: "", value: "user", name: " " },
      preventDefault: jest.fn()
    })).toBeUndefined();
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
});
