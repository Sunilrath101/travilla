import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import style from './Footer.module.css';
import {Link} from 'react-router-dom';

const Footer = () => {
  return <div>

<Tabs>
  <TabList>
    <Tab>ASIA</Tab>
    <Tab>EUROPE</Tab>
    <Tab>NORTH AMERICA</Tab>
    <Tab>SOUTH AMERICA</Tab>
    <Tab>AFRICA</Tab>
    <Tab>OCEANIA</Tab>
  </TabList>

  <TabPanels>
    <TabPanel className={style.box}>
      <div className={style.first}>
        <div>
          <Link to='/search-state'>India</Link>
          <p>3262 holiday homes</p>
        </div>
        <div>
          <p>India</p>
          <p>3262 holiday homes</p>
        </div>
        <div>
          <p>India</p>
          <p>3262 holiday homes</p>
        </div>
        <div>
          <p>India</p>
          <p>3262 holiday homes</p>
        </div>
        <div>
          <p>India</p>
          <p>3262 holiday homes</p>
        </div>
      </div>
      <div className={style.first}>
        <div>
          <p>India</p>
          <p>3262 holiday homes</p>
        </div>
      </div>
      <div className={style.first}>
        <div>
          <p>India</p>
          <p>3262 holiday homes</p>
        </div>
      </div>
      <div className={style.first}>
        <div>
          <p>India</p>
          <p>3262 holiday homes</p>
        </div>
      </div>
      <div className={style.first}>
        <div>
          <p>India</p>
          <p>3262 holiday homes</p>
        </div>
      </div>
      <div className={style.first}>
        <div>
          <p>India</p>
          <p>3262 holiday homes</p>
        </div>
      </div>
      
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>

  </div>;
};

export default Footer;
