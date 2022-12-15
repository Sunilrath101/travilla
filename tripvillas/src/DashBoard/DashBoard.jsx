import React from "react";
import AddProperty from "./AddProperty";
import styles from "./DashBoard.module.css";
import NoResults from "./NoResults";
import {
  Tabs,
  TabPanel,
  Tab,
  TabList,
  TabPanels,
  Radio,
  Stack,
  RadioGroup,
} from "@chakra-ui/react";

const DashBoard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.nav}>i m nav</div>
        <div className={styles.mainpanel}>
          <div className={styles.leftpanel}>
            i m sidebar
            <div className={styles.user_nam}>user name</div>
            <div>my properties</div>
            <div>properties for sale</div>
            <div>bookings</div>
            <div>payouts</div>
            <div>bankAccounts</div>
            <div>Reviews</div>
            <div>My customers</div>
            <div>My Profile</div>
          </div>
          <div className={styles.rightpanel}>
            <div className={styles.pathbread}>
              {" "}
              home /path / path
              {/* <ol>
                <li>Home</li>
                <li>my properties</li>
              </ol> */}
            </div>
            {/* i am right sec
            <br /> */}

            {/* <AddProperty />
            <NoResults /> */}

            <div className="pro_main">
              <Tabs variant="enclosed">
                <TabList>
                  <Tab>Profile</Tab>
                  <Tab>Change Password</Tab>
                  <Tab>Change Profile Image</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <div className={styles.probox}>
                      <div>
                        <p>This will used by TripVillas team to contact you.</p>
                      </div>
                      <div className={styles.firstbox}>
                        <div className={styles.firstlast}>
                          <div>
                            <div>First Name</div>
                            <div className={styles.needsborder}>
                              {" "}
                              <input />
                            </div>

                            <div>Email</div>
                            <div className={styles.needsborder2}>
                              {" "}
                              <input />
                            </div>
                          </div>

                          <div>
                            <div>Last Name</div>
                            <div className={styles.needsborder}>
                              <input />
                            </div>

                            <div className={styles.mobileandcode}>
                              <div>
                                <div>Country Code</div>
                                <div className={styles.needsborder3}>
                                  {" "}
                                  <input />
                                </div>
                              </div>

                              <div>
                                <div>Mobile</div>
                                <div className={styles.needsborder4}>
                                  {" "}
                                  <input />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* //------------------------------------------------------------------------- */}
                      <div className={styles.secondbox}>
                        <div className={styles.firstlast}>
                          <div>
                            <div>About Yourself</div>
                            <div className={styles.needsborder}>
                              {" "}
                              <input type="textarea" />
                            </div>
                          </div>

                          <div>
                            <div>Skype Id</div>
                            <div className={styles.needsborder}>
                              <input />
                            </div>

                            <div>Twitter Id</div>
                            <div className={styles.needsborder2}>
                              {" "}
                              <input />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 3rd box//--------------------------------------------------------------- */}
                      <div className={styles.secondbox}>
                        <div className={styles.firstlast}>
                          <div className="radiobtn">
                            Food Habits
                            <RadioGroup defaultValue="2">
                              <Stack spacing={5} direction="row">
                                <Radio colorScheme="grey" value="1">
                                  Veg
                                </Radio>
                                <Radio colorScheme="grey" value="2">
                                  Non Veg
                                </Radio>

                                <Radio colorScheme="grey" value="2">
                                  Occasionally Non Veg
                                </Radio>

                                <Radio colorScheme="grey" value="2">
                                  Eggetarian
                                </Radio>

                                <Radio colorScheme="grey" value="2">
                                  Jain
                                </Radio>

                                <Radio colorScheme="grey" value="2">
                                  Vegan
                                </Radio>
                              </Stack>
                            </RadioGroup>
                          </div>
                        </div>

                        <br />
                        <br />
                        <br />
                        <br />
                        <div className={styles.firstlast}>
                          <div className="radiobtn">
                            Drinking Habits
                            <RadioGroup defaultValue="2">
                              <Stack spacing={5} direction="row">
                                <Radio colorScheme="grey" value="1">
                                  No
                                </Radio>
                                <Radio colorScheme="grey" value="2">
                                  Occasionally
                                </Radio>

                                <Radio colorScheme="grey" value="2">
                                  Yes
                                </Radio>
                              </Stack>
                            </RadioGroup>
                          </div>
                        </div>

                        <div className={styles.firstlast}>
                          <div className="radiobtn">
                            Smoking Habits
                            <RadioGroup defaultValue="2">
                              <Stack spacing={5} direction="row">
                                <Radio colorScheme="grey" value="1">
                                  No
                                </Radio>
                                <Radio colorScheme="grey" value="2">
                                  Occasionally
                                </Radio>

                                <Radio colorScheme="grey" value="2">
                                  Yes
                                </Radio>
                              </Stack>
                            </RadioGroup>
                          </div>
                        </div>
                      </div>

                      {/* //--------------------------------------------------------------- */}
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>three!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>

            <div className={styles.privatetag}>
              {" "}
              <p>(c) Tripvillas Pte. Ltd.</p> <button>leave a message</button>{" "}
            </div>
          </div>
        </div>

        <h1>hi i am DashBoard</h1>
      </div>
    </>
  );
};

export default DashBoard;
