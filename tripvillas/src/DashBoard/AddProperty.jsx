import React from "react";
import styles from "./AddProperty.module.css";
import NoResults from "./NoResults";
import { GrAdd } from "react-icons/gr";
import {IoMdAdd} from 'react-icons/io'
const AddProperty = () => {
  return (
    <>
      <div className={styles.bankAccount}>
        <div>
          You must have a bank account in a country that Supports Stripe.
        </div>
        <div>
          Now get paid Immediately if your property is located in one the 25
          countries which support the Stripe Payment Gateway.
        </div>
        <div>
          Connect your stripe account to your tripvillas account and the entire
          amount gets credited to your account immediately. We only retain our
          commission.
        </div>
        <div style={{ color: "#fff", fontWeight: "500" }} className={styles.dashboard_bank_btn} >
          <div>
            <IoMdAdd fontSize={'20px'}  />
          </div>
          <div>Click here to Connect your stripe account</div>
        </div>
      </div>
      <div className={styles.twobuttons}>
        <div>
          <button className={styles.addnewproperty}>+ Add New Property</button>
        </div>
        <div className={styles.rulesbtn}>
          <button>Rules</button>
        </div>
      </div>
      <NoResults />
    </>
  );
};

export default AddProperty;
