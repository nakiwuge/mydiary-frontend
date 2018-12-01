import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import ProtectedRoute from "../../routes/protectedRoute";

describe("ViewOneEntry component", () => {
  it("renders", () => {
    shallow(<ProtectedRoute />);
  });
});
