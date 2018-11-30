import { ACTION_TYPES } from "../actions/actionTypes";

const initialState = {
  entries: []
};

export default function entryReducer(state = initialState, action) {
  switch (action.type) {
  case ACTION_TYPES.FETCH_ALL:
    return {
      ...state,
      entries: action.payload
    };
  default:
    return state;
  }
}
