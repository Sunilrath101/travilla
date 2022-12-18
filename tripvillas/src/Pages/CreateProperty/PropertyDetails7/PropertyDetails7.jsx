import React from "react";
import { Link } from "react-router-dom";
import styles from "./PropertyDetails7.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// const data = [
//   "LONAVALA, MAHARASHTRA, INDIA",
//   "COTTAGE",
//   "6 PHOTOS",
//   "1 MAX GUESTS",
//   "1 UNIT",
//   "1 BEDROOM",
//   "SOFA",
//   "POWER BACKUP",
//   "PARKING",
//   "PETS NOT ALLOWED",
//   "INR2000 ON WEEKDAYS FOR 1 GUEST",
//   "INR20000 ON WEEKENDS FOR 1 GUEST",
//   "INR FOR EXTRA PERSON",
//   "EUROPEAN PLAN",
//   "COMMON CANCELLATION POLICY",
// ];

const PropertyDetails6 = () => {
  const [data, setData] = React.useState([]);
  let [newData, setNewData] = React.useState([]);
  const allData = useSelector((store) => store.dataReducer);
  console.log("data:", data);
  const disptach = useDispatch();

  useEffect(() => {
    newData = [...data];

    if (allData.amenities.length > 0 || allData.commonAmenities > 0) {
      let city = allData.city.toUpperCase();
      newData.push(city);
      let propertyType = allData.propertyType.toUpperCase();
      newData.push(propertyType);
      let imageCount = `${allData.imageCount} PHOTOS`;
      newData.push(imageCount);
      let maxGuests = `${allData.maxGuests} MAX GUESTS`;
      newData.push(maxGuests);
      let unit = `${allData.propertyQuantity} UNIT`;
      newData.push(unit);
      let bedrooms = `${allData.bedrooms} BEDROOM`;
      newData.push(bedrooms);
      let bethrooms = `${allData.bethrooms} BETHROOMS`;
      newData.push(bethrooms);
      let amenities = allData.amenities;
      for (let i of amenities) {
        newData.push(i.toUpperCase());
      }

      let commonAmenities = allData.commonAmenities;
      for (let i of commonAmenities) {
        newData.push(i.toUpperCase());
      }

      let petsAllowed = `${
        allData.petsAllowed ? "PETS NOT ALLOWED" : "PETS ALLOWED"
      }`;
      newData.push(petsAllowed);
      let weekday = `${allData.currency}${allData.weekday} ON WEEKDAYS FOR ${allData.maxGuests} GUEST`;
      newData.push(weekday);
      let weekend = `${allData.currency}${allData.weekend} ON WEEKENDS FOR ${allData.maxGuests} GUEST`;
      newData.push(weekend);
      let mealplan = allData.mealplan.toUpperCase();
      newData.push(mealplan);
      let policy = allData.policy.toUpperCase();
      newData.push(policy);
      setData((prev) => newData);
    } else {
      setData((prev) => [
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
      ]);
    }
  }, [allData]);

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
          <Link to="/host/create-property/6">
            <button>PREVIOUS</button>
          </Link>
          <Link to="/host/create-property/8">
            <button>UPLOAD YOUR LISTING</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails6;
