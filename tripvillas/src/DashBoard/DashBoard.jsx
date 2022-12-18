import React from "react";
import AddProperty from "./AddProperty";
import styles from "./DashBoard.module.css";
import MyProfile from "./MyProfile";
import AllMyProperties from "./AllMyProperties";
import MyBookings from "./MyBookings";
import { loadData } from "../utils/accesslocalStorage";
import { RxAvatar } from "react-icons/rx";
import { TagItems } from "./TagItems/TagItems";
import { CardFooter } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const DashBoard = () => {
  const { isAuth } = useSelector((store) => store.authReducer);
  const user = loadData("user");
  const [activeTab, setActiveTab] = React.useState("Properties");
  const getCorrectScreen = (tab) => {
    switch (tab) {
      case "Properties":
        return <AddProperty />;
      case "PropertiesSale":
        return <AllMyProperties />;
      case "Bookings":
        return <MyBookings />;
      case "Payouts":
        return <AddProperty />;
      case "Payouts":
        return <AddProperty />;
      case "Accounts":
        return <AddProperty />;
      case "Profile":
        return <MyProfile />;
      default:
        return <AddProperty />;
    }
  };
  const navigate = useNavigate();
  if (!isAuth) {
    return navigate("/");
  }
  console.log("welcome");
  return (
    <>
      <div className={styles.dashboard_container}>
        <div className={styles.dashboard_container_leftpanel}>
          <div className={styles.dashboard_avatar}>
            <div style={{ border: "1px solid " }}>
              <img
                src="https://d2v8elt324ukrb.cloudfront.net/static/dashboard/img/avatars/male.cc4fc62d561f.png"
                width={"40px"}
                alt=""
              />
            </div>
            <div style={{ fontWeight: "500", fontSize: "20px" }}>{user}</div>
          </div>
          <div className={styles.dashboard_tagItems}>
            <TagItems activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
        <div className={styles.dashboard_container_rightpanel}>
          <div
            style={{
              height: "50px",
              display: "flex",
              alignItems: "center",
              marginLeft: "13px",
              color: "GrayText",
            }}
          >
            / home / {activeTab}
          </div>
          <div className={styles.dashboard_render}>
            {getCorrectScreen(activeTab)}
          </div>
          <div className={styles.dashboard_footer}>
            (c) Tripvillas Pte. Ltd.
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
