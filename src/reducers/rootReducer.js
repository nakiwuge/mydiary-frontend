import { combineReducers } from "redux";
import authReducer from "./auth";
import entryReducer from "./entries";

const reducers = combineReducers({
  authReducer,
  entryReducer
});

export default reducers;
