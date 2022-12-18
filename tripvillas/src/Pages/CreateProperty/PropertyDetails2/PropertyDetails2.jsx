import React from "react";
import styles from "./PropertyDetails2.module.css";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData, saveData } from "../../../utils/accesslocalStorage";
import { propertyType } from "../../../Redux/DataReducer/action";

const PropertyDetails2 = () => {
  const [value, setValue] = React.useState(loadData("propertyType") || "");
  // const data = useSelector((store) => store.dataReducer);
  const disptach = useDispatch();

  useEffect(() => {
    saveData("propertyType", value);
    disptach(propertyType(value));
  }, [value]);

  // console.log("value:", data);
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.box_1}>
          <h1>What type of property do you have?</h1>
        </div>
        <div className={styles.box_2}>
          <div className={styles.box_2_selection_1}>
            <h1>
              Select one of these if you have rooms that you rent out
              individually
            </h1>
            <RadioGroup>
              <Radio value="Resort">Resort</Radio>
              <Radio value="Homestay">Homestay</Radio>
              <Radio value="Farm">Farm</Radio>
              <Radio value="Tented Campsite">Tented Campsite</Radio>
              <Radio value="Bed and Breakfast">Bed and Breakfast</Radio>
              <Radio value="Hotel">Hotel</Radio>
              <Radio value="Serviced Apartment">Serviced Apartment</Radio>
            </RadioGroup>
          </div>
          <div className={styles.box_2_selection_2}>
            <h1>OR</h1>
          </div>
          <div className={styles.box_2_selection_3}>
            <h1>
              Select one of these if you rent out entire properties of the types
              below
            </h1>
            <RadioGroup onChange={(e) => setValue(e)} checked={value}>
              <Radio value="Room In Your House">Room In Your House</Radio>
              <Radio value="Studio">Studio</Radio>
              <Radio value="Villa">Villa</Radio>
              <Radio value="Apartment">Apartment</Radio>
              <Radio value="Cottage">Cottage</Radio>
              <Radio value="Caravan">Caravan</Radio>
              <Radio value="Houseboat">Houseboat</Radio>
              <Radio value="Luxury Yacht">Luxury Yacht</Radio>
              <Radio value="Cabin">Cabin</Radio>
              <Radio value="Condo">Condo</Radio>
            </RadioGroup>
          </div>
        </div>
        <div className={styles.box_3}>
          <Link to="/host/create-property">
            <button>PREVIOUS</button>
          </Link>
          <Link to="/host/create-property/3">
            <button>NEXT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails2;
