import styles from "./Navbar.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  updateProfile,
  updatePhoneNumber,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Drawer,
  DrawerBody,
  extendTheme,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  ModalFooter,
  ModalHeader,
  InputGroup,
  InputLeftAddon,
  FormHelperText,
  FormErrorMessage,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowDropDown } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { useState } from "react";
import { auth } from "../Firebase/AuthenticationWithEmail";
import {
  loginError,
  loginReq,
  loginSuccess,
  signOutErr,
  signOutReq,
  signOutSuccess,
  signUpErr,
  signUpReq,
  signUpSuccess,
} from "../../Redux/AuthReducer/action";
import { useEffect } from "react";
const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((store) => store.authReducer);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const btnRef = React.useRef();
  const Auth = getAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isopen, setopen] = useState(false); // for clicking on navbar's profile icon
  const [Isopen, Setopen] = useState(false); // for clicking on signin or signup
  const [showphoneN, setshowEmail] = useState(true);
  const [showotp, setshowOtp] = useState(false);
  const [error, setError] = useState("");
  const [dis, setSubmitdis] = useState(false);
  const [loginErr, setLoginErr] = useState("");
  const [loginbtnDis, setLoginbtndis] = useState(false);
  const [loginWithEmail, setLoginEmail] = useState({
    email: "",
    password: "",
  });
  const [signupFormVal, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(signUpReq());
    if (
      signupFormVal.name == "" ||
      signupFormVal.email == "" ||
      signupFormVal.mobile == "" ||
      signupFormVal.password == ""
    ) {
      //console.log("hello");
      setError("Please, fill all the Credentials!!");
    } else {
      // sign up with email
      setSubmitdis(true);
      createUserWithEmailAndPassword(
        auth,
        signupFormVal.email,
        signupFormVal.password
      )
        .then((re) => {
          setSubmitdis(false);
          const user = re.user;
          updateProfile(user, {
            displayName: signupFormVal.name,
          }).then(() => {
            dispatch(signUpSuccess());
          });
          console.log(user);
          //ispatch(signUpSuccess(user.displayName));
          updatePhoneNumber(user, {
            phoneNumber: signupFormVal.mobile,
          });
        })
        .catch((er) => {
          setSubmitdis(false);
          dispatch(signUpErr());
          setError(er.message);
        });
      setError("");
      Setopen(true);
      handleSignUptoSignIn();
    }
  };
  const signOut = () => {
    dispatch(signOutReq());
    dispatch(signOutSuccess()).then(() => {});
    dispatch(signOutErr());
  };
  const handleLoginWithEmail = () => {
    console.log('hello')
    dispatch(loginReq());
    setLoginbtndis(true);
    if (!loginWithEmail.email || !loginWithEmail.password) {
      setLoginErr("Please, Fill all the credentials!");
    } else {
      signInWithEmailAndPassword(
        auth,
        loginWithEmail.email,
        loginWithEmail.password
      )
        .then((re) => {
          dispatch(loginSuccess(re.user.displayName));
          setLoginbtndis(false);
        })
        .catch((er) => {
          dispatch(loginError());
          setLoginbtndis(false);
        });
    }
  };
  const handleSignInwithEmail = () => {};
  const handleSignInwithPhone = () => {};
  const handleotpevent = (e) => {
    e.preventDefault();
    setshowOtp(true);
    console.log(signupFormVal);
    handleSignUptoSignIn();
  };
  const onclose = () => {
    setopen(false);
  };
  const onopen = () => {
    setopen(true);
  };
  const Onclose = () => {
    Setopen(false);
  };
  const Onopen = () => {
    Setopen(true);
  };
  const handleSignUptoSignIn = () => {
    Setopen(false);
    setopen(true);
  };
  const handleSignIntoSignUp = () => {
    setopen(false);
    Setopen(true);
  };
  const handleEmailChange = () => {
    setshowEmail(!showphoneN);
  };
  useEffect(() => {}, [signOut]);
  return (
    <div className={styles.navbar_container}>
      <div className={styles.website_icon}>
        <img
          src="https://d2v8elt324ukrb.cloudfront.net/static/riotuikit/images/logo.c72056a22f91.png"
          alt="tripvillas-img"
          height="19px"
          width="141px"
        />
      </div>
      <div className={styles.navbar_items}>
        <div className={styles.navbar_items_profile}>
          <Menu
            _focus={{
              background: "#262626",
              backgroundColor: "#262626",
            }}
          >
            <MenuButton
              background={"#262626"}
              as={!isAuth ? IconButton : null}
              _hover={{ background: "#262626" }}
              _focus={{
                background: "#262626",
                backgroundColor: "#262626",
              }}
              _active={{ background: "#262626" }}
              icon={isAuth ? null : <RxAvatar fontSize={"28px"} color="#fff" />}
              fontWeight="500"
              fontSize={"18px"}
              color="#fff"
            >
              {isAuth ? user : null}
            </MenuButton>
            {isAuth ? (
              <MenuList
                textAlign={"center"}
                display={"grid"}
                gridTemplateColumns="1 1"
                // onClick={() => Setopen(false)}
              >
                <Button
                  variant={"ghost"}
                  _hover={{ background: "#fff", color: "#999" }}
                  _focus={{ background: "#fff" }}
                  onClick={signOut}
                  // onClick={() = }
                >
                  SIGN OUT
                </Button>
              </MenuList>
            ) : (
              <MenuList
                textAlign={"center"}
                display={"grid"}
                gridTemplateColumns="1 1"
              >
                {/* <MenuItem textAlign={"center"} onClick={onopen} > */}
                <Button
                  variant={"ghost"}
                  _hover={{ background: "#fff", color: "#999" }}
                  _focus={{ background: "#fff" }}
                  onClick={onopen}
                >
                  SIGN IN
                </Button>
                <Modal
                  initialFocusRef={initialRef}
                  finalFocusRef={finalRef}
                  isOpen={isopen}
                  onClose={onclose}
                  size="lg"
                >
                  <ModalOverlay />
                  <ModalContent borderRadius={"0"}>
                    <ModalHeader>
                      <div className={styles.login_heading}>
                        <div>
                          <h2>SIGN IN</h2>
                        </div>
                        <div
                          style={{
                            color: "#1E87F0",
                            fontSize: "14px",
                            fontWeight: "300",
                            display: "inline-flex",
                            cursor: "pointer",
                          }}
                          onClick={handleSignIntoSignUp}
                        >
                          Sign Up Instead
                        </div>
                      </div>
                    </ModalHeader>

                    <hr
                      style={{
                        color: "#9999",
                        width: "90%",
                        margin: "auto",
                        marginBottom: "15px",
                      }}
                    />
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <FormControl>
                        {showphoneN ? (
                          <>
                            <InputGroup>
                              <InputLeftAddon children="+91" borderRadius="0" />
                              <Input
                                type="tel"
                                placeholder="Mobile number"
                                borderRadius="0"
                              />
                            </InputGroup>
                            <FormHelperText>
                              only digits are allowed
                            </FormHelperText>
                          </>
                        ) : (
                          <>
                            <InputGroup marginBottom={"10px"}>
                              <Input
                                type="email"
                                borderRadius={"0"}
                                placeholder="Email Address"
                                value={loginWithEmail.email}
                                onChange={(e) =>
                                  setLoginEmail((prev) => ({
                                    ...prev,
                                    email: e.target.value,
                                  }))
                                }
                              />
                            </InputGroup>
                            <InputGroup>
                              <Input
                                type="password"
                                value={loginWithEmail.password}
                                borderRadius={"0"}
                                onChange={(e) =>
                                  setLoginEmail((prev) => ({
                                    ...prev,
                                    password: e.target.value,
                                  }))
                                }
                                placeholder="Password"
                              />
                            </InputGroup>

                            {loginErr ? (
                              <Alert status="error" marginTop={"10px"}>
                                <AlertIcon />
                                {loginErr}
                              </Alert>
                            ) : null}
                          </>
                        )}
                        <div style={{ height: "70px" }}>
                          <div
                            style={{
                              color: "#1E87F0",
                              fontSize: "16px",
                              fontWeight: "400",
                              margin: "30px 0px 0px 10px",
                              cursor: "pointer",
                              display: "inline-flex",
                            }}
                            onClick={handleEmailChange}
                          >
                            {showphoneN
                              ? "Sign In With Email?"
                              : "Sign In With Mobile & One Time Password?"}
                          </div>
                        </div>
                        <hr
                          style={{
                            color: "#9999",
                            width: "100%",
                            margin: "auto",
                            marginBottom: "10px",
                          }}
                        />
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <Button
                            onClick={onclose}
                            borderRadius={"0px"}
                            fontWeight="400"
                            mr={3}
                          >
                            Cancel
                          </Button>

                          {showphoneN ? (
                            <Button
                              background={"#1E87F0"}
                              color="#fff"
                              borderRadius={"0px"}
                              fontWeight="400"
                              _hover={{ background: "#1E67F7" }}
                              _focus={{ background: "#1E67F7" }}
                            >
                              Verify with OTP
                            </Button>
                          ) : (
                            <Button
                              background={"#1E87F0"}
                              color="#fff"
                              borderRadius={"0px"}
                              fontWeight="400"
                              _hover={{ background: "#1E67F7" }}
                              _focus={{ background: "#1E67F7" }}
                              onClick={handleLoginWithEmail}
                              disabled={loginbtnDis}
                            >
                              SIGN IN
                            </Button>
                          )}
                        </div>
                      </FormControl>
                    </ModalBody>
                  </ModalContent>
                </Modal>
                {/* </MenuItem> */}

                <Button
                  variant={"ghost"}
                  _hover={{ background: "#fff", color: "#999" }}
                  _focus={{ background: "#fff" }}
                  onClick={Onopen}
                >
                  SIGN UP
                </Button>
                <Modal
                  initialFocusRef={initialRef}
                  finalFocusRef={finalRef}
                  isOpen={Isopen}
                  onClose={Onclose}
                  size="lg"
                >
                  <ModalOverlay />
                  <ModalContent borderRadius={"0"}>
                    <ModalHeader>
                      <div className={styles.login_heading}>
                        <div>
                          <h2>SIGN UP</h2>
                        </div>
                        <div
                          style={{
                            color: "#1E87F0",
                            fontSize: "14px",
                            fontWeight: "300",
                            display: "inline-flex",
                            cursor: "pointer",
                          }}
                          onClick={handleSignUptoSignIn}
                        >
                          Sign In Instead
                        </div>
                      </div>
                    </ModalHeader>
                    <hr
                      style={{
                        color: "#9999",
                        width: "90%",
                        margin: "auto",
                        marginBottom: "15px",
                      }}
                    />
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <FormControl
                        lineHeight={"1.75rem"}
                        noOfLines={""}
                        gap={"3"}
                        //onSubmit={handleSignUp}
                      >
                        <InputGroup>
                          <InputLeftAddon children="+91" borderRadius={"0"} />
                          <Input
                            type="tel"
                            placeholder="Mobile number"
                            borderRadius={"0"}
                            onChange={(e) =>
                              setSignupForm((prev) => ({
                                ...prev,
                                mobile: e.target.value,
                              }))
                            }
                            value={signupFormVal.mobile}
                          />
                        </InputGroup>
                        <FormHelperText marginTop="-10px">
                          only digits are allowed
                        </FormHelperText>
                        <InputGroup>
                          <Input
                            type="email"
                            borderRadius={"0"}
                            placeholder="Email Address"
                            onChange={(e) =>
                              setSignupForm((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            value={signupFormVal.email}
                          />
                        </InputGroup>
                        <InputGroup>
                          <Input
                            type="password"
                            borderRadius={"0"}
                            placeholder="Password"
                            onChange={(e) =>
                              setSignupForm((prev) => ({
                                ...prev,
                                password: e.target.value,
                              }))
                            }
                          />
                        </InputGroup>
                        <InputGroup gap={"3"}>
                          <Input
                            placeholder="First Name"
                            borderRadius={"0"}
                            onChange={(e) =>
                              setSignupForm((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                            value={signupFormVal.name}
                          />
                          <Input placeholder="Last Name" borderRadius={"0"} />
                        </InputGroup>
                        {error ? (
                          <Alert status="error">
                            <AlertIcon />
                            {error}
                          </Alert>
                        ) : null}
                        <hr
                          style={{
                            color: "#9999",
                            width: "100%",
                            margin: "auto",
                            marginTop: "15px",
                          }}
                        />
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <Button
                            onClick={Onclose}
                            borderRadius={"0px"}
                            fontWeight="400"
                            mr={3}
                            float="right"
                          >
                            Cancel
                          </Button>
                          <Button
                            float="right"
                            background={"#1E87F0"}
                            color="#fff"
                            borderRadius={"0px"}
                            fontWeight="400"
                            _hover={{ background: "#1E67F7" }}
                            _focus={{ background: "#1E67F7" }}
                            // type="submit"
                            onClick={handleSignUp}
                            disabled={dis}
                          >
                            SIGN UP
                          </Button>
                        </div>
                      </FormControl>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </MenuList>
            )}
          </Menu>
        </div>
        <div>
          <Select
            // placeholder="INR"
            border={"none"}
            color="#fff"
            icon={<MdArrowDropDown />}
            width="79px"
            _focus={{ border: "none" }}
          >
            {" "}
            <option style={{ color: "#666666" }} value="option1">
              INR
            </option>
            <option style={{ color: "#666666" }} value="option1">
              AED
            </option>
            <option style={{ color: "#666666" }} value="option2">
              AUD
            </option>
            <option style={{ color: "#666666" }} value="option3">
              CAD
            </option>
          </Select>
        </div>
        <div className={styles.navbar_items_drawer}>
          <IconButton
            ref={btnRef}
            background="#262626"
            color="#fff"
            onClick={onOpen}
            _hover={{ background: "#262626" }}
            _focus={{
              background: "#262626",
              backgroundColor: "#262626",
            }}
            icon={<GiHamburgerMenu fontSize={"24px"} />}
          >
            Open
          </IconButton>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton color="#999" />
              <DrawerHeader fontSize={"16px"} background="#262626">
                {/* ARE YOU A PROPERTY OWNER/MANAGER? */}
              </DrawerHeader>
              <DrawerBody background="#262626">
//                 <div className={styles.navbar_items_drawer_body}>
//                   <div className={styles.navbar_items_drawer_top}>
//                     <div>
//                       <div>ARE YOU A PROPERTY OWNER/MANAGER?</div>
//                       <div>List New Property</div>
//                       <div>Sign In to Your Dashboard</div>
//                     </div>
//                     <hr style={{ marginTop: "20px" }} />
//                   </div>
//                   <div className={styles.navbar_items_drawer_middle}>
//                     <div>
//                       <div>HOLIDAY HOMES FOR SALE</div>
//                       <div>
//                         <div>TripVillas Managed</div>
//                         <p>Homes form a grade developers. Rentals guaranteed</p>
//                       </div>
//                       <div>
//                         <div>Marketplace</div>
//                         <p>
//                           See what homes are up for sale from different property
//                           owners.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <hr style={{ marginTop: "20px" }} />
//                   <div className={styles.navbar_items_drawer_bottom}>
//                     <div>
//                       <div>About Us</div>
//                       <div>Privacy Policy</div>
//                       <div>Terms of Use</div>
//                       <div>FAQs</div>
//                       <div>Contact Us</div>
//                     </div>
//                   </div>
//                 </div>
//                 <hr style={{ marginTop: "20px" }} />
//                 <div
                  style={{
                    color: "#999",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                >
                  © Tripvillas Pte Ltd
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;