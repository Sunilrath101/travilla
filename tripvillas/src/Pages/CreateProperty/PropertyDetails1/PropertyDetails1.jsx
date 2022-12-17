import React from "react";
import styles from "./PropertyDetails1.module.css";
import Map from "../../../../src/Components/Map/Map";
import { useState } from "react";
import { Select } from "@chakra-ui/react";

const PropertyDetails1 = () => {
  const [city, setCity] = useState("");
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
                value={city}
                onChange={({ target }) => setCity(target.value)}
              />
              <Map height="400px" width="100%" city={city || "delhi"} />
            </div>
            <div>
              <div>
                <label>Country</label>
                <Select>
                  <option value="INDIA" selected="selected">
                    INDIA
                  </option>
                </Select>
              </div>
              <div>
                <label>State</label>
                <Select>
                  <option value="Bihar" selected="selected">
                    Bihar
                  </option>
                </Select>
              </div>
              <div>
                <label>City</label>
                <Select>
                  <option value="Patana" selected="selected">
                    Patana
                  </option>
                  <option value="Gaya" selected="selected">
                    Gaya
                  </option>
                </Select>
              </div>
              <div>
                <p>Please verify your country & state/region & city/locality</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.box_3}>
          <button>NEXT</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails1;
