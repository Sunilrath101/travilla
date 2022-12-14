import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
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
  measurementId: "G-EE32ZYV3P7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()

export {app,auth}
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