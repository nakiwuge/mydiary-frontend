import { ACTION_TYPES } from "../../actions/actionTypes";
import entryReducer from "../../reducers/entries";

describe("entryReducer", () => {
  it("has a default state", () => {
    expect(entryReducer(undefined, { type: "unexpected" })).toEqual({
      entries: [],
      message:{}
    });
  });
  it("updates state on FETCH_ALL action type", () => {
    expect(
      entryReducer(undefined, {
        type: ACTION_TYPES.FETCH_ALL,
        payload: { message: "register" }
      })
    ).toEqual({
      entries: { message: "register" },
      message:{}
    });
  });
  it("updates state on ADD_ action type", () => {
    expect(
      entryReducer(undefined, {
        type: ACTION_TYPES.ADD_ENTRY,
        payload: { message: "register" }
      })
    ).toEqual({
      entries: [],
      message: "register" 
    });
  });
});
