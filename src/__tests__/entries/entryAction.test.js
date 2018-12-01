import { BASE_URL } from "../../baseUrl";
import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { getEntries, addEntry,getEntry } from "../../actions/entries/entries";

const response_data = {
  message: ""
};
let id = 2;
describe("entry actions", () => {
  let store;
  let mock;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    const mockStore = configureMockStore();
    store = mockStore({});
  });
  it("the getEntry action should be able to entries ", () => {
    mock.onGet(BASE_URL + "/entries").reply(200, response_data);
    getEntries(response_data)(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
  it("the getEntries action should be able to entries ", () => {
    mock.onPost(BASE_URL + "/entries").reply(200, response_data);
    addEntry(response_data)(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
  it("the getEntry action should be able to entries ", () => {
    mock.onGet(BASE_URL + `/entries/${id}`).reply(200, response_data);
    getEntry(response_data)(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
  it("the getEntry action should be able to entries ", () => {
    mock.onGet(BASE_URL + `/entries/${id}`).reply(200, response_data);
    getEntry(response_data)(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });

});
