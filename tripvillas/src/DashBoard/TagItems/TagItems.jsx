import React from "react";
import { AiFillProfile } from "react-icons/ai";
import { GiPostOffice } from "react-icons/gi";
import { BsCheckLg, BsBank2 } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { BiStar } from "react-icons/bi";
import styles from "./TagItems.module.css";
import { IoIosPeople } from "react-icons/io";
import { IoBody } from "react-icons/io5";
import { VStack } from "@chakra-ui/react";
export const TagItems = ({ setActiveTab, activeTab }) => {
  console.log(activeTab);
  const tags = [
    {
      name: "My Properties",
      icon: <AiFillProfile fontSize={"32px"} />,
      case: "Properties",
    },
    {
      name: "Properties For Sale",
      icon: <GiPostOffice fontSize={"32px"} />,
      case: "PropertiesSale",
    },
    {
      name: "Bookings",
      icon: <BsCheckLg fontSize={"32px"} />,
      case: "Bookings",
    },
    {
      name: "Payouts",
      icon: <FaDollarSign fontSize={"32px"} />,
      case: "Payouts",
    },
    {
      name: "Bank Accounts",
      icon: <BsBank2 fontSize={"32px"} />,
      case: "Accounts",
    },
    {
      name: "Reviews",
      icon: <BiStar fontSize={"32px"} />,
      case: "Reviews",
    },
    {
      name: "My Customers",
      icon: <IoIosPeople fontSize={"32px"} />,
      case: "Customer",
    },
    {
      name: "My Profile",
      icon: <IoBody fontSize={"32px"} />,
      case: "Profile",
    },
  ];
  return (
    <VStack  marginTop={"5"}>
      {tags.map((el) => {
        return (
          <div
            className={styles.tag_item_container}
            onClick={() => setActiveTab(el.case)}
          >
            <div
              style={{ color: `${activeTab == el.case ? "#000" : "#CCCCCC"}` }}
            >
              {el.icon}
            </div>
            <div
              style={{
                fontSize: "14px",
                color: `${activeTab == el.case ? "#000" : "#CCCCCC"}`,
              }}
            >
              {el.name}
            </div>
          </div>
        );
      })}
    </VStack>
  );
};
