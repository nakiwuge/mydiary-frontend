import { ACTION_TYPES } from "../actions/actionTypes";

const initialState = {
  entries: [],
  message:{}
};

export default function entryReducer(state = initialState, action) {
  switch (action.type) {
  case ACTION_TYPES.FETCH_ALL:
    return {
      ...state,
      entries: action.payload
    };
  case ACTION_TYPES.ADD_ENTRY:
    return {
      ...state,
      message: action.payload.message
    };
  default:
    return state;
  }
}
