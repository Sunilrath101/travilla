import React, { useState } from "react";
import style from "./Searchbar.module.css";
import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { RxExit, RxEnter } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Searchbar = ({query}) => {
  const [searchVal, setSearchval] = useState({
    search: query || "",
    checkIn: "",
    checkOut: "",
    guests: "",
  });


  console.log(query)

  const navigate = useNavigate("");
  const handleSearch = () => {
    if (searchVal.search == "") {
      return;
    } else {
      console.log(searchVal);
      navigate(`/hotel-list/${searchVal.search}`);
      setSearchval("");
    }
  };
  return (
    <div className={style.search_container}>
      <FormControl>
        <div className={style.home_search_form}>
          <div className={style.search_bar}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<BiSearch color="gray" fontSize={"19px"} />}
              />
              <Input
                placeholder="Location"
                borderRadius={"0"}
                color="GrayText"
                background={"#fff"}
                value={searchVal.search}
                onChange={(e) =>
                  setSearchval((prev) => ({ ...prev, search: e.target.value }))
                }
              />
            </InputGroup>
          </div>
          <div className={style.search_calender}>
            <InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents={"none"}
                  children={<RxEnter color="gray" fontSize={"19px"} />}
                />
                <Input
                  placeholder="Check-In"
                  borderRadius={"0"}
                  type="date"
                  color={"GrayText"}
                  value={searchVal.checkIn}
                  onChange={(e) =>
                    setSearchval((prev) => ({
                      ...prev,
                      checkIn: e.target.value,
                    }))
                  }
                />
              </InputGroup>
              <InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents={"none"}
                    children={<RxExit color="gray" fontSize={"19px"} />}
                  />
                  <Input
                    placeholder="Check-Out"
                    borderRadius={"0"}
                    type="date"
                    color={"GrayText"}
                    value={searchVal.checkOut}
                    onChange={(e) =>
                      setSearchval((prev) => ({
                        ...prev,
                        checkOut: e.target.value,
                      }))
                    }
                  />
                </InputGroup>
              </InputGroup>
            </InputGroup>
          </div>
          <div className={style.search_guests}>
            <Select
              placeholder="Select Guests"
              color={"GrayText"}
              borderRadius="0"
              value={searchVal.guests}
              onChange={(e) =>
                setSearchval((prev) => ({ ...prev, guests: e.target.value }))
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
              <option value="5"> 5</option>
            </Select>
          </div>
          <div className={style.search_btn}>
            <Button
              background={"#1E87F0"}
              color="#fff"
              borderRadius={"0px"}
              fontWeight="400"
              className={style.search_btn}
              _hover={{ background: "#1E67F7" }}
              _focus={{ background: "#1E67F7" }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </div>
      </FormControl>
    </div>
  );
};

export default Searchbar;
