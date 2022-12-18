import React from 'react'
import styles from "./MyBookings.module.css";
import {
    Divider,
    Image,
    ButtonGroup,
    Button,
    CardFooter,
    Tabs,
    TabPanel,
    Tab,
    TabList,
    TabPanels,
    Radio,
    Stack,
    Box,
    Card,
    CardHeader,
    CardBody,
    StackDivider,
    Text,
    RadioGroup,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
} from "@chakra-ui/react";
import MyProfile from "./MyProfile";
import AllMyProperties from "./AllMyProperties";


const MyBookings = () => {
    return (
        <>

            <div className={styles.mybookings}>
                <div className={styles.listings}>
                    <div className={styles.catselect}>
                        <select name="bookingcategories" id="">
                            <option value="Declined">Declined</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="all_bookings">All Bookings</option>
                        </select>
                    </div>
                    <div className={styles.searchbox}>
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className={styles.calselect}>
                        Check In
                        <input type="date" />
                    </div>
                    <div>
                        <button className={styles.searchbtn}> search</button>
                    </div>
                </div>
                <div className={styles.allhotelcards}>
                    <Card maxW="sm">
                        <CardBody>
                            <Image
                                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/22476138/13d3cf81f20b11e790160a8e1b1ce4da_watermarked_image_1024.jpeg"
                                alt="Green double couch with wooden legs"
                                borderRadius="lg"
                            />
                            <Stack mt="1" spacing="1">
                                <Heading size="md">hotel name</Heading>
                                <Text>location</Text>
                                <Text>stay duration</Text>
                                <Text color="blue.600" fontSize="S">
                                    total amount
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                    {/* =====================++++++++++========================= */}
                    <Card maxW="sm">
                        <CardBody>
                            <Image
                                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/22476138/13d3cf81f20b11e790160a8e1b1ce4da_watermarked_image_1024.jpeg"
                                alt="Green double couch with wooden legs"
                                borderRadius="lg"
                            />
                            <Stack mt="1" spacing="1">
                                <Heading size="md">hotel name</Heading>
                                <Text>location</Text>
                                <Text>stay duration</Text>
                                <Text color="blue.600" fontSize="S">
                                    total amount
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                    {/* =============+++++++================================= */}

                    <Card maxW="sm">
                        <CardBody>
                            <Image
                                src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/22476138/13d3cf81f20b11e790160a8e1b1ce4da_watermarked_image_1024.jpeg"
                                alt="Green double couch with wooden legs"
                                borderRadius="lg"
                            />
                            <Stack mt="1" spacing="1">
                                <Heading size="md">hotel name</Heading>
                                <Text>location</Text>
                                <Text>stay duration</Text>
                                <Text color="blue.600" fontSize="S">
                                    total amount
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default MyBookings