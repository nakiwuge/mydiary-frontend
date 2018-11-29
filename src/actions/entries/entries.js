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
