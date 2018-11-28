import { ACTION_TYPES } from "../../actions/actionTypes";
import authReducer from "../../reducers/auth";

describe("authReducer", () => {
  it("has a default state", () => {
    expect(authReducer(undefined, { type: "unexpected" })).toEqual({
      user: {}
    });
  });
  it("updates state on REGISTER action type", () => {
    expect(
      authReducer(undefined, {
        type: ACTION_TYPES.REGISTER,
        payload: { message: "register" }
      })
    ).toEqual({
      user: { message: "register" }
    });
  });
  it("updates state on LOGIN action type", () => {
    expect(
      authReducer(undefined, {
        type: ACTION_TYPES.LOGIN,
        payload: { message: "login",token:"hh34jj" }
      })
    ).toEqual({
      user: { message: "login",token:"hh34jj" }
    });
  });
});
