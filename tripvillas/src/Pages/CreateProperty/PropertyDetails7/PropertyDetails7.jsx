import React from "react";
import styles from "./PropertyDetails7.module.css";
const data = [
  "LONAVALA, MAHARASHTRA, INDIA",
  "COTTAGE",
  "6 PHOTOS",
  "1 MAX GUESTS",
  "1 UNIT",
  "1 BEDROOM",
  "SOFA",
  "POWER BACKUP",
  "PARKING",
  "PETS NOT ALLOWED",
  "INR2000 ON WEEKDAYS FOR 1 GUEST",
  "INR20000 ON WEEKENDS FOR 1 GUEST",
  "INR FOR EXTRA PERSON",
  "EUROPEAN PLAN",
  "COMMON CANCELLATION POLICY",
];

const PropertyDetails6 = () => {
  const [value, setValue] = React.useState("1");
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.box_1}>
          <h1>Preview Your Property</h1>
        </div>
        <div className={styles.box_2}>
          <div className={styles.box_2_selection_1}>
            <p>1 Listing will be created with following information.</p>
          </div>
          <div className={styles.box_2_selection_2}>
            <div>
              <p>Title: (Please edit the title as you deem fit.)</p>
              <div>
                <p>1 bedroom Cottage Cottage in Lonavala, Maharashtra</p>
              </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.all_details}>
              {data.map((el, index) => {
                return <div key={index}>{el}</div>;
              })}
            </div>
          </div>
        </div>
        <div className={styles.box_3}>
          <button>PREVIOUS</button>
          <button>UPLOAD YOUR LISTING</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails6;
