import React from "react";
import AddProperty from "./AddProperty";
import styles from "./DashBoard.module.css";
import NoResults from "./NoResults";
import { Tabs, TabPanel, Tab, TabList, TabPanels } from "@chakra-ui/react";

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
                    <p>one!</p>
                    <div className={styles.probox}></div>









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
