import { ACTION_TYPES } from "../actions/actionTypes";

const initialState = {
  user: {}
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
  case ACTION_TYPES.REGISTER:
    return {
      ...state,
      user: action.payload
    };
  default:
    return state;
  }
}
