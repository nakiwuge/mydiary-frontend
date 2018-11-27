import axios from "axios";
import { ACTION_TYPES } from "../actionTypes";
import { BASE_URL } from "../../baseUrl";

export const registerUser = userData => dispatch => {
  axios.post(BASE_URL + "/auth/signup", userData).then(res => {
    dispatch({
      type: ACTION_TYPES.REGISTER,
      payload: res.data
    });
  });
};
