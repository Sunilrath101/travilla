import React from "react";
import styles from "./PropertyDetails8.module.css";
import { BsCheck2 } from "react-icons/bs";
const PropertyDetails8 = () => {
  return (
    <div className={styles.containor}>
      <h1>Listings created successfully.</h1>
      <button onClick={"dashboard"}>GO TO DASHBOARD</button>
      <div className={styles.box_1}>
        <div>
          <p>1. Created 1 bedroom Cottage Cottage in Lonavala, Maharashtra</p>
          <div>
            <p>Edit My Property</p>
            <p>Update Availability & Seasonal Rates</p>
            <p>Update Promotional Offers</p>
          </div>
        </div>
        <div>
          <BsCheck2 />
        </div>
      </div>
      <div className={styles.box_1}>
        <div>
          <p>
            2. Updated Photos For 1 bedroom Cottage Cottage in Lonavala,
            Maharashtra Total 6 images uploaded.
          </p>
          <div>
            <p>Reorder photos & Set Cover Photo</p>
          </div>
        </div>
        <div>
          <BsCheck2 />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails8;
