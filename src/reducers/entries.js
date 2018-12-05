import { ACTION_TYPES } from "../actions/actionTypes";

const initialState = {
  entries: [],
  message: {},
  result: {},
  display:"none",
  messageEmpty:{}
};

export default function entryReducer(state = initialState, action) {

  switch (action.type) {
  case ACTION_TYPES.FETCH_ALL:
    return {
      ...state,
      messageEmpty:"",
      entries: action.payload.entries,
      display:""
    };
  case ACTION_TYPES.ADD_ENTRY:
    return {
      ...state,
      message: action.payload.message
    };
  case ACTION_TYPES.GET_ENTRY:
    return {
      ...state,
      result: action.payload
    };
  case ACTION_TYPES.EDIT_ENTRY:
    return {
      ...state,
      result: action.payload
    };
  case ACTION_TYPES.DELETE:
    return {
      ...state,
      message: action.payload
    };
  case ACTION_TYPES.NO_ENTRY:
    return {
      ...state,
      messageEmpty: action.payload,
      display:""
    };
  default:
    return state;
  }
}
