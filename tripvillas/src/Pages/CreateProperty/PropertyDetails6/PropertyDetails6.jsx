import React from "react";
import styles from "./PropertyDetails6.module.css";
import {
  Checkbox,
  Heading,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@chakra-ui/react";
const PropertyDetails6 = () => {
  const [value, setValue] = React.useState("1");
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.box_1}>
          <h1>Specify default rates & the cancellation policy</h1>
        </div>
        <div className={styles.box_2}>
          <div className={styles.box_2_selection_1}>
            <p>Which currency do you operate in?</p>
            <div>
              <Select placeholder="India Rupee (INR)">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
          </div>
          <div className={styles.box_2_selection_2}>
            <p>Default Rates For Cottage</p>
            <div className={styles.divider}></div>

            <div>
              <div>
                <label>Weekday Rate (Mon to Thu)</label>
                <input placeholder="In Number" type="number"></input>
              </div>
              <div>
                <label>Weekend Rate (Fri to Sun)</label>
                <input placeholder="In Number" type="number"></input>
              </div>
              <div>
                <label>Rates Valid For Guests</label>
                <Select placeholder="Select option">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </div>

              <div>
                <label>Meal Plan</label>
                <Select placeholder="Select option">
                  <option value="European Plan">European Plan</option>
                  <option value="Continental Plan">Continental Plan</option>
                  <option value="Modified American Plan">
                    Modified American Plan
                  </option>
                  <option value="All American Plan">All American Plan</option>
                  <option value="Breakfast, Lunch, Dinner">
                    Breakfast, Lunch, Dinner
                  </option>
                </Select>
              </div>
              <div>
                <label>Cancellation Policy</label>
                <Select placeholder="Select option">
                  <option value="Lenient">Lenient</option>
                  <option value="Friendly">Friendly</option>
                  <option value="Common">Common</option>
                  <option value="Stringent">Stringent</option>
                  <option value="Rigorous">Rigorous</option>
                  <option value="Non Refundable">Non Refundable</option>
                </Select>
              </div>
            </div>
          </div>
          <div className={styles.box_2_selection_3}>
            <h1>Select whats applicable for Apartment</h1>
            <div onChange={setValue} value={value}>
              <Checkbox value="Kitchen">Kitchen</Checkbox>
              <Checkbox value="AC">AC</Checkbox>
              <Checkbox value="TV">TV</Checkbox>
              <Checkbox value="Sofa">Sofa</Checkbox>
              <Checkbox value="Microwave">Microwave</Checkbox>
              <Checkbox value="Fridge">Fridge</Checkbox>
              <Checkbox value="Induction Cooktop">Induction Cooktop</Checkbox>
              <Checkbox value="Balcony">Balcony</Checkbox>
              <Checkbox value="Bathtub">Bathtub</Checkbox>
              <Checkbox value="Housekeeping">Housekeeping</Checkbox>
              <Checkbox value="Linen Provided">Linen Provided</Checkbox>
              <Checkbox value="Private Swimming Pool">
                Private Swimming Pool
              </Checkbox>
              <Checkbox value="Toiletries">Toiletries</Checkbox>
            </div>
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

export default PropertyDetails6;
