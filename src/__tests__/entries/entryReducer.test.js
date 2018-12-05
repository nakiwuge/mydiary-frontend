import { ACTION_TYPES } from "../../actions/actionTypes";
import entryReducer from "../../reducers/entries";

describe("entryReducer", () => {
  it("has a default state", () => {
    expect(entryReducer(undefined, { type: "unexpected" })).toEqual({
      entries: [],
      message: {},
      result: {},
      display:"none",
      messageEmpty:{}
    });
  });
  it("updates state on FETCH_ALL action type", () => {
    expect(
      entryReducer(undefined, {
        type: ACTION_TYPES.FETCH_ALL,
        payload: { message: "register" }
      })
    ).toEqual({
      entries: undefined,
      message: {},
      result: {},
      display:"",
      messageEmpty:""
    });
  });
  it("updates state on ADD_ENTRY action type", () => {
    expect(
      entryReducer(undefined, {
        type: ACTION_TYPES.ADD_ENTRY,
        payload: { message: "register" }
      })
    ).toEqual({
      entries: [],
      message: "register",
      result: {},
      display:"none",
      messageEmpty:{}
    });
  });
  it("updates state on GET_ENTRY action type", () => {
    expect(
      entryReducer(undefined, {
        type: ACTION_TYPES.GET_ENTRY,
        payload: { title: "" }
      })
    ).toEqual({
      entries: [],
      message: {},
      result: { title: "" },
      display:"none",
      messageEmpty:{}
    });
  });
  it("updates state on EDIT_ENTRY action type", () => {
    expect(
      entryReducer(undefined, {
        type: ACTION_TYPES.EDIT_ENTRY,
        payload: { title: "" }
      })
    ).toEqual({
      entries: [],
      message: {},
      result: { title: "" },
      display:"none",
      messageEmpty:{}
    });
  });
  it("updates state on DELETE action type", () => {
    expect(
      entryReducer(undefined, {
        type: ACTION_TYPES.DELETE,
        payload: { title: "" }
      })
    ).toEqual({
      entries: [],
      message: { title: "" },
      result: {},
      display:"none",
      messageEmpty:{}
    });
  });
});
