import React from 'react'
import styles from "./AddProperty.module.css"

const AddProperty = () => {
    return (
        <>
            <div className={styles.twobuttons}>
                <div>
                    <button className={styles.addnewproperty}>
                        {" "}
                        + Add New Property
                    </button>
                </div>
                <div className={styles.rulesbtn}>
                    <button>Rules</button>
                </div>
            </div>
        </>
    )
}

export default AddProperty