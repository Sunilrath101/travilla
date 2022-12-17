import React from "react";
import AddProperty from "./AddProperty";
import styles from "./DashBoard.module.css";
import NoResults from "./NoResults";
import {
  Divider,
  Image,
  ButtonGroup,
  Button,
  CardFooter,
  Tabs,
  TabPanel,
  Tab,
  TabList,
  TabPanels,
  Radio,
  Stack,
  Box,
  Card,
  CardHeader,
  CardBody,
  StackDivider,
  Text,
  RadioGroup,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";
import MyProfile from "./MyProfile";
import AllMyProperties from "./AllMyProperties";
import MyBookings from "./MyBookings";

const DashBoard = () => {
  return (
    <>
      <div className={styles.container}>
        {/* <div className={styles.nav}>i m nav</div> */}
        <div className={styles.mainpanel}>
          <div className={styles.leftpanel}>
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
              <Breadcrumb>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">MyProfile</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </div>

            {/* <AddProperty /> */}
            {/* 
              addProperty is a component
           
            noresults is a component which should render when length is 0
            <NoResults /> */}

            {/* <AllMyProperties /> */}

            {/* 
              // my profile is a component which shows myProfile when visited my profile section
           */}

            <MyProfile />

            {/* <MyBookings/> */}

            <div className={styles.privatetag}>
              {" "}
              <p>(c) Tripvillas Pte. Ltd.</p> <button>leave a message</button>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
