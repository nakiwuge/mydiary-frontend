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
export const loginUser = userData => dispatch => {
  axios.post(BASE_URL + "/auth/login", userData).then(res => {
    dispatch({
      type: ACTION_TYPES.LOGIN,
      payload: res.data
    });
    localStorage.setItem("token",res.data.token);
  });
};
