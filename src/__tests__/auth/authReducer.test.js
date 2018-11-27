import { ACTION_TYPES } from "../../actions/actionTypes";
import authReducer from "../../reducers/auth";

describe("authReducer", () => {
  it("has a default state", () => {
    expect(authReducer(undefined, { type: "unexpected" })).toEqual({
      user: {}
    });
  });
  it("updates state on SOCIAL_AUTH action type", () => {
    expect(
      authReducer(undefined, {
        type: ACTION_TYPES.REGISTER,
        payload: { message: "register" }
      })
    ).toEqual({
      user: { message: "register" }
    });
  });
});
