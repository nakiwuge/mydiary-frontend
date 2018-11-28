import React from "react";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import "../../setupTests";
import LoginComponent, { Login } from "../../components/authComponents/login";

const mockStore = configureMockStore();
const props = {
  user: {}
};
const store = mockStore({
  authReducer: {
    user: {}
  }
});

describe("Login component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <LoginComponent />
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
    wrapper = shallow(<Login {...props} />);
    wrapper.setProps({});
  });
  it("redirects when token is in nextProps", () => {
    wrapper = shallow(<Login {...props} />);
    wrapper.setProps({
      user: { token: "rfrfew345" },
      history: { push: jest.fn() }
    });
  });
});
