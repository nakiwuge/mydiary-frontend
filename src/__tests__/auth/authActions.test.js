import { registerUser, loginUser} from "../../actions/authActions/auth";
import { BASE_URL } from "../../baseUrl";
import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const response_data = {
  message: ""
};

describe("auth actions", () => {
  let store;
  let mock;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    const mockStore = configureMockStore();
    store = mockStore({});
  });

  it("the registerUser action should be able to return a user ", () => {
    mock.onPost(BASE_URL + "/auth/signup").reply(200, response_data);
    registerUser(response_data)(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
  it("the loginUser action should be able to return a user ", () => {
    mock.onPost(BASE_URL + "/auth/login").reply(200, response_data);
    loginUser(response_data)(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
});
