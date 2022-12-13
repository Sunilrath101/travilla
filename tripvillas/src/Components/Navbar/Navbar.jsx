import styles from "./Navbar.module.css";
import React from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.website_icon}>
        <img
          src="https://d2v8elt324ukrb.cloudfront.net/static/riotuikit/images/logo.c72056a22f91.png"
          alt="tripvillas-img"
          height="21px"
          width="171px"
        />
      </div>
      <div className={styles.navbar_items}>
        <div className={styles.navbar_items_profile}>
          <Menu>
            <MenuButton
              background={"#262626"}
              as={IconButton}
              _hover={{ background: "#262626" }}
              _focus={{
                background: "#262626",
                color: "red",
                backgroundColor: "#262626",
              }}
              icon={<RxAvatar fontSize={"28px"} color="#fff" />}
            />
            <MenuList textAlign={"center"}>
              <MenuItem textAlign={"center"}>SIGN IN</MenuItem>
              <MenuItem textAlign={"center"}>SIGN UP</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div>
          <Select
            placeholder="INR"
            border={"none"}
            color="#fff"
            icon={<MdArrowDropDown />}
            width="89px"
            _focus={{ border: "none" }}
          >
            <option  style={{color:'#666666'}} value="option1">AED</option>
            <option style={{color:'#666666'}} value="option2">AUD</option>
            <option style={{color:'#666666'}} value="option3">Option 3</option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
