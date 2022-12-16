import * as types from "./actionTypes";

const signUpReq = () => {
  return {
    type: types.SIGN_UP_REQ,
  };
};
const signUpSuccess = () => {
  
  return {
    type: types.SIGN_UP_SUCCESS,
  };
};
const signUpErr = () => {
  return {
    type: types.SIGN_UP_ERROR,
  };
};
const loginReq = () => {
  return {
    type: types.LOGIN_REQ,
  };
};
const loginSuccess = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: user,
  };
};
const loginError = () => {
  return {
    type: types.LOGIN_ERROR,
  };
};
const signOutReq = () => {
  return {
    type: types.SIGN_OUT_REQ,
  };
};
const signOutSuccess = () => {
  return {
    type: types.SIGN_OUT_SUCCESS,
  };
};
const signOutErr = () => {
  return {
    type: types.SIGN_OUT_ERR,
  };
};
export {
  signUpErr,
  signUpReq,
  signUpSuccess,
  loginError,
  loginReq,
  loginSuccess,
  signOutErr,
  signOutReq,
  signOutSuccess,
};
