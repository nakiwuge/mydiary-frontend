import React from "react";
import { mount, shallow } from "enzyme";
import RegisterPage, {
  Register
} from "../../components/authComponents/register";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import "../../setupTests";

const mockStore = configureMockStore();
const props = {
  user: {},
  history: { push: "/" }
};
const store = mockStore({
  authReducer: {
    user: {}
  }
});

describe("Register component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <RegisterPage />
      </Provider>
    );
  });
  it("render form with inputs", () => {
    let event = { target: { name } };
    expect(
      wrapper
        .find("#email")
        .first()
        .simulate("change", event)
    ).toBeDefined();
  });
  it("submits user", () => {
    expect(wrapper.find("form").simulate("submit")).toBeDefined();
  });
  it("recieves nextProps", () => {
    wrapper = shallow(<Register {...props} />);
    wrapper.setProps({
      user: { message: "the registration was successful" },
      history: { push: jest.fn() }
    });
  });
  it("submits", () => {
    wrapper = shallow(<Register {...props} />);
    wrapper.setProps({});
  });
});
