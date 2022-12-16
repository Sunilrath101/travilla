import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import * as types from "./actionTypes";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm8wAFl4n_qqWBEI7GfW9Cvm-n9jxh0QQ",
  authDomain: "firbaseforhotelapp.firebaseapp.com",
  projectId: "firbaseforhotelapp",
  storageBucket: "firbaseforhotelapp.appspot.com",
  messagingSenderId: "995641773535",
  appId: "1:995641773535:web:6c51b961ee5474d92e886a",
  measurementId: "G-EE32ZYV3P7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

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
  app,
  auth,
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
/*
{showotp ? (
                        <>
                          <Input
                            placeholder="Enter OTP here"
                            borderRadius={"0"}
                          />
                          <div
                            style={{
                              color: "#1E87F0",
                              fontSize: "14px",
                              fontWeight: "300",
                              display: "inline-flex",
                              cursor: "pointer",
                            }}
                            onClick={() => setshowOtp(false)}
                          >
                            Go Back
                          </div>
                        </>
                      
*/
