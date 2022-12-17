import React from "react";
import styles from "./MyProfile.module.css";
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

const MyProfile = () => {
  return (
    <>
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
                  <br />
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
              <div>
                <div className={styles.passcontainer}>
                  <div className={styles.firstsec}>
                    <div className={styles.threesec}>
                      <div>
                        <div>
                          <div>Old Password</div>
                          <div className={styles.needsborder2}>
                            {" "}
                            <input />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>New Password</div>
                        <div className={styles.needsborder2}>
                          {" "}
                          <input />
                        </div>
                      </div>
                      <div>
                        <div>Re-enter New Password</div>
                        <div className={styles.needsborder2}>
                          {" "}
                          <input />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.secondsec}>
                    <button>Change Password</button>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <div className={styles.passcontainer}>
                  <div className={styles.firstsec}>
                    <div className={styles.twosections}>
                      <div className={styles.imagenurl}>
                        <div>
                          <img
                            src="https://th.bing.com/th/id/OIP.N90vXuuexYNR8v_b8gnf3wAAAA?w=219&h=219&c=7&r=0&o=5&pid=1.7"
                            alt=""
                          />
                        </div>
                        <div>
                          <div>Please choose image to upload</div>
                          <div className={styles.needsborder2}>
                            {" "}
                            <input />
                          </div>
                          <div className={styles.changeprofilepic}>
                            <button>Update Image</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};

export default MyProfile;
