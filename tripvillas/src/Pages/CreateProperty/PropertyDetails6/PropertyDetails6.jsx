import React, { useState } from "react";
import styles from "./PropertyDetails6.module.css";
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  currency,
  mealplan,
  policy,
  weekday,
  weekend,
} from "../../../Redux/DataReducer/action";
import { useEffect } from "react";

const PropertyDetails6 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [weekdayValue, setWeekdayValue] = useState("");
  const [weekendValue, setWeekendValue] = useState("");

  const type = useSelector((store) => store.dataReducer.propertyType);
  const data = useSelector((store) => store.dataReducer);
  console.log("data:", data);

  const disptach = useDispatch();

  useEffect(() => {
    disptach(weekday(weekdayValue));
    disptach(weekend(weekendValue));
  }, [weekdayValue, weekendValue, disptach]);

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
              <Select onChange={(e) => disptach(currency(e.target.value))}>
                <option value="INR">India Rupee (INR)</option>
                <option value="AED">United Arab Emirates Dirham (AED)</option>
                <option value="AUD">Australia Dollar (AUD)</option>
                <option value="BRL">Brazil Real (BRL)</option>
                <option value="CAD">Canada Dollar (CAD)</option>
                <option value="CHF">Switzerland Franc (CHF)</option>
                <option value="CZK">Czech Republic Koruna (CZK)</option>
                <option value="DKK">Denmark Krone (DKK)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="GBP">United Kingdom Pound (GBP)</option>
                <option value="HKD">Hong Kong Dollar (HKD)</option>
                <option value="HUF">Hungary Forint (HUF)</option>
                <option value="ILS">Israel Shekel (ILS)</option>
                <option value="INR">India Rupee (INR)</option>
                <option value="JPY">Japan Yen (JPY)</option>
                <option value="MXN">Mexico Peso (MXN)</option>
                <option value="NOK">Norway Krone (NOK)</option>
                <option value="NZD">New Zealand Dollar (NZD)</option>
                <option value="PHP">Philippines Peso (PHP)</option>
                <option value="PLN">Poland Zloty (PLN)</option>
                <option value="SEK">Sweden Krona (SEK)</option>
                <option value="SGD">Singapore Dollar (SGD)</option>
                <option value="THB">Thailand Baht (THB)</option>
                <option value="TRY">Turkey Lira (TRY)</option>
                <option value="TWD">Taiwan New Dollar (TWD)</option>
                <option value="USD">United States Dollar (USD)</option>
              </Select>
            </div>
          </div>
          <div className={styles.box_2_selection_2}>
            <p>Default Rates For {type || "Cottage"}</p>
            <div className={styles.divider}></div>

            <div>
              <div>
                <label>Weekday Rate (Mon to Thu)</label>
                <input
                  placeholder="In Number"
                  type="number"
                  value={weekdayValue}
                  onChange={({ target }) => setWeekdayValue(target.value)}
                ></input>
              </div>
              <div>
                <label>Weekend Rate (Fri to Sun)</label>
                <input
                  placeholder="In Number"
                  type="number"
                  value={weekendValue}
                  onChange={({ target }) => setWeekendValue(target.value)}
                ></input>
              </div>
              <div>
                <label>Rates Valid For Guests</label>
                <Select>
                  <option value="1">1</option>
                </Select>
              </div>

              <div>
                <label>Meal Plan</label>
                <Select onChange={(e) => disptach(mealplan(e.target.value))}>
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
                <p onClick={onOpen}>SHOW MEAL PLANS</p>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />

                  <ModalContent>
                    <ModalHeader>Meal Plans</ModalHeader>
                    <div
                      style={{
                        width: "90%",
                        borderBottom: "1px solid #cccc",
                        margin: "auto",
                      }}
                    ></div>
                    <ModalBody>
                      <h1 style={{ color: "#100000cc", fontWeight: "600" }}>
                        European Plan
                      </h1>
                      <p style={{ color: "#787474cc" }}>
                        No meals provided (European Plan)
                      </p>
                      <br />
                      <h1 style={{ color: "#100000cc", fontWeight: "600" }}>
                        Continental Plan
                      </h1>
                      <p style={{ color: "#787474cc" }}>
                        Morning Breakfast (Continental Plan)
                      </p>
                      <br />
                      <h1 style={{ color: "#100000cc", fontWeight: "600" }}>
                        Modified American Plan
                      </h1>
                      <p style={{ color: "#787474cc" }}>
                        Bed Tea, Breakfast and Dinner (Modified American Plan)
                      </p>
                      <br />
                      <h1 style={{ color: "#100000cc", fontWeight: "600" }}>
                        All American Plan
                      </h1>
                      <p style={{ color: "#787474cc" }}>
                        Bed Tea, Breakfast, Lunch, Evening Tea, and Dinner (All
                        American Plan)
                      </p>
                      <br />
                      <h1 style={{ color: "#100000cc", fontWeight: "600" }}>
                        Breakfast, Lunch, Dinner
                      </h1>
                      <p style={{ color: "#787474cc" }}>
                        Inclusive of 1 breakfast, 1 lunch and 1 dinner
                      </p>
                    </ModalBody>

                    <ModalFooter display="flex" justifyContent="flex-start">
                      <Button
                        border="1px solid #cccc"
                        color="black"
                        fontWeight="300"
                        variant="outline"
                        onClick={onClose}
                        borderRadius="0PX"
                      >
                        CLOSE
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </div>
              <div>
                <label>Cancellation Policy</label>
                <Select onChange={(e) => disptach(policy(e.target.value))}>
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
        </div>
        <div className={styles.box_3}>
          <Link to="/host/create-property/5">
            <button>PREVIOUS</button>
          </Link>
          <Link to="/host/create-property/7">
            <button>NEXT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails6;
/**
 * <select class="uk-select">
  <option value="AED" selected="selected">United Arab Emirates Dirham (AED)</option>
  <option value="AUD">Australia Dollar (AUD)</option>
  <option value="BRL">Brazil Real (BRL)</option>
  <option value="CAD">Canada Dollar (CAD)</option>
  <option value="CHF">Switzerland Franc (CHF)</option>
  <option value="CZK">Czech Republic Koruna (CZK)</option>
  <option value="DKK">Denmark Krone (DKK)</option>
  <option value="EUR">Euro (EUR)</option>
  <option value="GBP">United Kingdom Pound (GBP)</option>
  <option value="HKD">Hong Kong Dollar (HKD)</option>
  <option value="HUF">Hungary Forint (HUF)</option>
  <option value="ILS">Israel Shekel (ILS)</option>
  <option value="INR">India Rupee (INR)</option>
  <option value="JPY">Japan Yen (JPY)</option>
  <option value="MXN">Mexico Peso (MXN)</option>
  <option value="NOK">Norway Krone (NOK)</option>
  <option value="NZD">New Zealand Dollar (NZD)</option>
  <option value="PHP">Philippines Peso (PHP)</option>
  <option value="PLN">Poland Zloty (PLN)</option>
  <option value="SEK">Sweden Krona (SEK)</option>
  <option value="SGD">Singapore Dollar (SGD)</option>
  <option value="THB">Thailand Baht (THB)</option>
  <option value="TRY">Turkey Lira (TRY)</option>
  <option value="TWD">Taiwan New Dollar (TWD)</option>
  <option value="USD">United States Dollar (USD)</option>
                                    </select>
 * 
 * 
 * 
 * 
 */
