import React from 'react'
import styles from "./MyProfile.module.css";
import {Tabs} from  '@chakra-ui/react';

const MyProfile = () => {
    return (
        <>
        <Tabs variant='enclosed'>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
        </>
    )
}

export default MyProfile