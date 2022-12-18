import React, { useEffect } from "react";
import styles from "./PropertyDetails4.module.css";
import { Radio, RadioGroup, Checkbox } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  commonAmenities,
  petsAllowed,
} from "../../../Redux/DataReducer/action";
import { useState } from "react";

const PropertyDetails4 = () => {
  const [value, setValue] = React.useState([]);
  const [isPet, setIsPet] = useState(false);
  const disptach = useDispatch();
  const data = useSelector((store) => store.dataReducer);
  console.log("data:", data);

  const amenitieshandler = (prop) => {
    let newValue;
    if (value.includes(prop)) {
      value.splice(value.indexOf(prop), 1);
      newValue = [...value];
    } else {
      newValue = [...value, prop];
    }
    setValue(newValue);
  };

  useEffect(() => {
    disptach(commonAmenities(value));
    disptach(petsAllowed(isPet));
  }, [value, isPet, disptach]);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.box_1}>
          <h1>Please specify common/external amenities you have?</h1>
        </div>
        <div className={styles.box_2}>
          <div className={styles.box_2_selection_1}>
            <div
              value={value}
              onChange={(e) => amenitieshandler(e.target.value)}
            >
              <Checkbox value="Common Swimming Pool">
                Common Swimming Pool
              </Checkbox>
              <Checkbox value="Wifi">Wifi</Checkbox>
              <Checkbox value="Power Backup">Power Backup</Checkbox>
              <Checkbox value="Inhouse Restaurant">Inhouse Restaurant</Checkbox>
              <Checkbox value="Spa">Spa</Checkbox>
              <Checkbox value="Garden/Lawn">Garden/Lawn</Checkbox>
              <Checkbox value="Conference Hall">Conference Hall</Checkbox>
              <Checkbox value="Parking">Parking</Checkbox>
              <Checkbox value="Pool/Snooker Table">Pool/Snooker Table</Checkbox>
              <Checkbox value="Table Tennis">Table Tennis</Checkbox>
              <Checkbox value="Carrom">Carrom</Checkbox>
              <Checkbox value="Foosball Table">Foosball Table</Checkbox>
              <Checkbox value="Laundry & Dry Cleaning Service">
                Laundry & Dry Cleaning Service
              </Checkbox>
            </div>
          </div>
          <div className={styles.box_2_selection_2}>
            <h1>Are pets allowed at your property?</h1>
            <RadioGroup
              onChange={(e) => setIsPet(e === "Yes" ? true : false)}
              checked={isPet}
            >
              <Radio value="Yes">Yes</Radio>
              <Radio value="No">No</Radio>
            </RadioGroup>
          </div>
        </div>
        <div className={styles.box_3}>
          <Link to="/host/create-property/3">
            <button>PREVIOUS</button>
          </Link>
          <Link to="/host/create-property/5">
            <button>NEXT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails4;
