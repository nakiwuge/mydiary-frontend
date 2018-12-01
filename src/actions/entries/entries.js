import axios from "axios";
import { ACTION_TYPES } from "../actionTypes";
import { BASE_URL } from "../../baseUrl";
import { headers } from "../../utils.js";

export const getEntries = () => dispatch => {
  axios.get(BASE_URL + "/entries", headers()).then(res => {
    dispatch({
      type: ACTION_TYPES.FETCH_ALL,
      payload: res.data.entries
    });
  });
};
export const addEntry = data => dispatch => {
  
  axios.post(BASE_URL + "/entries", data, headers()).then(res => {
    dispatch({
      type: ACTION_TYPES.ADD_ENTRY,
      payload: res.data
    });
  });
};
export const getEntry = id => dispatch => {
  
  axios.get(BASE_URL + `/entries/${id}`, headers()).then(res => {
    dispatch({
      type: ACTION_TYPES.GET_ENTRY,
      payload:res.data.entry[0]
    });
  });
};
