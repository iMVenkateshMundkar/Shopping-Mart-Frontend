import axios from "axios";
import * as actionTypes from "./userActionTypes";

export const userSignup = (params) => async (dispatch) => {
  dispatch({ type: actionTypes.USER_SIGNUP_REQUEST });
  return await axios({
    method: "post",
    url: "/api/signup",
    data: params,
  })
    .then((r) =>
      dispatch({ type: actionTypes.USER_SIGNUP_SUCCESS, payload: r.data })
    )
    .catch((e) =>
      dispatch({
        type: actionTypes.USER_SIGNUP_FAILURE,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      })
    );
};

export const userLogin = (params) => async (dispatch) => {
  dispatch({ type: actionTypes.USER_LOGIN_REQUEST });
  return await axios({
    method: "post",
    url: "/api/login",
    data: params,
  })
    .then((r) =>
      dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: r.data })
    )
    .catch((e) =>
      dispatch({
        type: actionTypes.USER_LOGIN_FAILURE,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      })
    );
};

export const userLogout = () => (dispatch) => {
  dispatch({ type: actionTypes.USER_LOGOUT_REQUEST });
  try {
    dispatch({ type: actionTypes.USER_LOGOUT_SUCCESS });
  } catch (e) {
    dispatch({
      type: actionTypes.USER_LOGOUT_FAILURE,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const userProfileUpdate = (id, newUser) => async (dispatch) => {
  dispatch({ type: actionTypes.USER_PROFILE_UPDATE_REQUEST });
  return await axios({
    method: "post",
    url: "/api/update",
    baseURL: "https://calm-oasis-08477.herokuapp.com/",
    data: { id, newUser },
  })
    .then((r) => {
      dispatch({
        type: actionTypes.USER_PROFILE_UPDATE_SUCCESS,
        payload: r.data,
      });
    })
    .catch((e) =>
      dispatch({
        type: actionTypes.USER_PROFILE_UPDATE_FAILURE,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      })
    );
};
