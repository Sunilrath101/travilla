import React from "react";
import styles from "./PropertyDetails5.module.css";
import { Checkbox, Select } from "@chakra-ui/react";
const PropertyDetails5 = () => {
  const [value, setValue] = React.useState("1");
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.box_1}>
          <h1>Please upload good quality photos</h1>
        </div>
        <div className={styles.box_2}>
          <div className={styles.box_2_selection_1}>
            <h1>External/Common Area/Amenities Photos</h1>
          </div>
          <div className={styles.box_2_selection_2}>
            <div>
              <p>Please click here on the box & upload atleast 3 images</p>
              <input type="text" name="" id="" placeholder="Image-1" />
              <input type="text" name="" id="" placeholder="Image-2" />
              <input type="text" name="" id="" placeholder="Image-3" />
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.box_2_selection_1}>
            <h1>Photos For Cottage</h1>
          </div>
          <div className={styles.box_2_selection_2}>
            <div>
              <p>Please click here on the box & upload atleast 3 images</p>
              <input type="text" name="" id="" placeholder="Image-1" />
              <input type="text" name="" id="" placeholder="Image-2" />
              <input type="text" name="" id="" placeholder="Image-3" />
            </div>
          </div>
          <div className={styles.divider}></div>
        </div>
        <div className={styles.box_3}>
          <button>PREVIOUS</button>
          <button>NEXT</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails5;
