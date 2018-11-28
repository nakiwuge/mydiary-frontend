import { registerUser } from "../../actions/authActions/auth";
import { BASE_URL } from "../../baseUrl";
import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const response_data = {
  message: ""
};

describe("socialAuth actions", () => {
  let store;
  let mock;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    const mockStore = configureMockStore();
    store = mockStore({});
  });

  it("the facebookAuth action should be able to return a user ", () => {
    mock.onPost(BASE_URL + "/auth/signup").reply(200, response_data);
    registerUser(response_data)(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
});
