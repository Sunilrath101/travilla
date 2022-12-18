import React from "react";
import styles from "./PropertyDetails5.module.css";
import { Checkbox, Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { imageCount } from "../../../Redux/DataReducer/action";

const PropertyDetails5 = () => {
  const [value, setValue] = React.useState([]);
  const [image, setImage] = React.useState([]);

  const disptach = useDispatch();

  const counterHandler = (index) => {
    console.log(index);
    let newValue = [...value];
    newValue[index - 1] = 1;
    setValue(newValue);
  };
  const imageHandler = (img, index) => {
    console.log(img);
    let newValue = [...value];

    if (img.length > 1) {
      newValue[index - 1] = img;
      setImage(newValue);
    }
  };
  useEffect(() => {
    setValue(value);
    disptach(imageCount(value.length));
  }, [value, image, disptach]);

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
              <input
                type="text"
                name=""
                id=""
                placeholder="Image-1"
                onChange={(e) => {
                  counterHandler(1);
                  imageHandler(e.target.value, 1);
                }}
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Image-2"
                onChange={(e) => {
                  counterHandler(2);
                  imageHandler(e.target.value, 2);
                }}
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Image-3"
                onChange={(e) => {
                  counterHandler(3);
                  imageHandler(e.target.value, 3);
                }}
              />
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.box_2_selection_1}>
            <h1>Photos For Cottage</h1>
          </div>
          <div className={styles.box_2_selection_2}>
            <div>
              <p>Please click here on the box & upload atleast 3 images</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Image-1"
                onChange={(e) => {
                  counterHandler(4);
                  imageHandler(e.target.value, 4);
                }}
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Image-2"
                onChange={(e) => {
                  counterHandler(5);
                  imageHandler(e.target.value, 5);
                }}
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Image-3"
                onChange={(e) => {
                  counterHandler(6);
                  imageHandler(e.target.value, 6);
                }}
              />
            </div>
          </div>
          <div className={styles.divider}></div>
        </div>
        <div className={styles.box_3}>
          <Link to="/host/create-property/4">
            <button>PREVIOUS</button>
          </Link>
          <Link to="/host/create-property/6">
            <button>NEXT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails5;
