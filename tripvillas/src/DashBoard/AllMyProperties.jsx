import React from 'react'
import styles from "./AllMyProperties.module.css";
import {
    Tabs,
    TabPanel,
    Tab,
    TabList,
    TabPanels,
    Radio,
    Stack,
    RadioGroup,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react";

const AllMyProperties = () => {
    return (
        <>
            <div className={styles.allmyproperties}>
                <div className={styles.idcontainer}>
                    <div className={styles.propertyid}>
                        <h3>TV ID: 20598982</h3>
                    </div>
                    <div className={styles.viewnsell}>
                        <div>
                            <button className={styles.viewbtn}>
                                View This Property On Tripvillas.com
                            </button>
                        </div>
                        <div>
                            <button className={styles.sellbtn}>
                                Want to sell your property?
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.detailsbox}>
                    <div className={styles.leftnright}>
                        <div className={styles.leftside}>
                            <div>
                                <h2>
                                    2 Bedroom Apartment inside Homestay in Pune, Maharashtra
                                </h2>
                            </div>
                            <div>
                                <p>Pune, Maharashtra, INDIA</p>
                            </div>
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            {" "}
                                            <td>Listing Information</td> <td>Basic Info</td>{" "}
                                        </tr>
                                        <tr>
                                            {" "}
                                            <td> Rates & Availability </td>{" "}
                                            <td>Update Rates & Availability Calendar</td>{" "}
                                        </tr>
                                        <tr>
                                            {" "}
                                            <td>Bookings </td> <td>View Bookings</td>{" "}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={styles.rightside}>
                            <div>
                                <h2>Settings</h2>
                            </div>
                            <div> Listing Not Live</div>
                            <div>Instant Booking Off</div>
                            <div>Distribution Off</div>
                            <div>Best Price Guarantee Off</div>
                            <div>Startup Listing</div>
                            <div>
                                <button>Modify Settings</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllMyProperties