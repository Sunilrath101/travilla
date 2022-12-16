import React from "react";
import styles from "./PropertyDetails4.module.css";
import { Radio, RadioGroup, Checkbox } from "@chakra-ui/react";
const PropertyDetails4 = () => {
  const [value, setValue] = React.useState("1");
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.box_1}>
          <h1>Please specify common/external amenities you have?</h1>
        </div>
        <div className={styles.box_2}>
          <div className={styles.box_2_selection_1}>
            <div onChange={setValue} value={value}>
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
            <RadioGroup onChange={setValue} value={value}>
              <Radio value="Yes">Yes</Radio>
              <Radio value="No">No</Radio>
            </RadioGroup>
          </div>
        </div>
        <div className={styles.box_3}>
          <button>PREVIOUS</button>
          <button>NEXT</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails4;
