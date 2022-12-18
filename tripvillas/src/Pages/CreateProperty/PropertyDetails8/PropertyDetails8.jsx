import React, { useState } from "react";
import styles from "./PropertyDetails8.module.css";
import { BsCheck2 } from "react-icons/bs";
import { CircularProgress } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../../../Redux/DataReducer/action";
const PropertyDetails8 = () => {
  const [time, setTime] = useState(false);
  const data = useSelector((store) => store.dataReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigationHandle = () => {
    // dispatch(addData(data)).then((res) => {
      addData(data)
      navigate("/dashboard");
    // });
  };

  useEffect(() => {
    let id;
    id = setTimeout(() => {
      setTime((prev) => true);
    }, 5000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <>
      {!time && (
        <div className={styles.spin}>
          <CircularProgress isIndeterminate color="green.300" />
        </div>
      )}

      {time && (
        <div className={styles.containor}>
          <h1>Listings created successfully.</h1>
          <button onClick={navigationHandle}>GO TO DASHBOARD</button>
          <div className={styles.box_1}>
            <div>
              <p>
                1. Created 1 bedroom Cottage Cottage in Lonavala, Maharashtra
              </p>
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
      )}
    </>
  );
};

export default PropertyDetails8;
