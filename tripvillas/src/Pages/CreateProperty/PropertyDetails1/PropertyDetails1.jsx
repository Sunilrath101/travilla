import React from "react";
import styles from "./PropertyDetails1.module.css";
import Map from "../../../../src/Components/Map/Map";
import { useState } from "react";
import { Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { city } from "../../../Redux/DataReducer/action";

const PropertyDetails1 = () => {
  const disptach = useDispatch();
  const [iscity, setIsCity] = useState("");

  useEffect(() => {
    disptach(city("Patna"));
  }, [disptach, iscity]);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.box_1}>
          <h1>What type of property do you have?</h1>
        </div>
        <div className={styles.box_2}>
          <p>
            Search for a landmark near you and put the marker on your exact
            location
          </p>
          <div className={styles.map}>
            <div>
              <input
                type="text"
                placeholder="Search your location"
                value={iscity}
                onChange={({ target }) => setIsCity(target.value)}
              />
              <Map height="400px" width="100%" city={iscity || "delhi"} />
            </div>
            <div>
              <div>
                <label>Country</label>
                <Select>
                  <option value="INDIA">INDIA</option>
                </Select>
              </div>
              <div>
                <label>State</label>
                <Select>
                  <option value="Bihar">Bihar</option>
                </Select>
              </div>
              <div>
                <label>City</label>
                <Select>
                  <option value="Patana">Patana</option>
                  <option value="Gaya">Gaya</option>
                </Select>
              </div>
              <div>
                <p>Please verify your country & state/region & city/locality</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.box_3}>
          <Link to="/host/create-property/2">
            <button>NEXT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails1;
