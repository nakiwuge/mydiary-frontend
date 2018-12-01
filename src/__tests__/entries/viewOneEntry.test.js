import React from "react";
import { mount} from "enzyme";
import "../../setupTests";
import { ViewOneEntry } from "../../components/entries/viewOneEntry";

let getEntry = jest.fn();
const props = {
  entry: {},
  getEntry,
  match: { params: { id: "2" } }
};

describe("ViewOneEntry component", () => {
  it("recieves props", () => {
    mount(<ViewOneEntry {...props} />);
    expect(props.getEntry).toBeCalled();
  });
});
