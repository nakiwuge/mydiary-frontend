import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import { ViewEntries } from "../../components/entries/viewEntries";

let getEntries = jest.fn;
const props = {
  entries: {},
  getEntries
};

describe("ViewEntries component", () => {
  it("recieves props", () => {
    const wrapper = shallow(<ViewEntries {...props} />);
    wrapper.setProps({ entries: { message: "yes" } });
    expect(wrapper.instance().props.entries).toEqual({ message: "yes" });
  });
});
