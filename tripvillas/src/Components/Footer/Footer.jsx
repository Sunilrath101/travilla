import React, {useState, useEffect} from "react";
import { Tabs, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import style from './Footer.module.css';
import {Link} from 'react-router-dom';
import axios from "axios";

const Footer = () => {
  const [data, setData]= useState();
  const fetchData=()=>{
    axios
      .get("https://long-plum-mite-cape.cyclic.app/Continents")
      .then((res)=> setData(res.data))
      .catch((err)=> console.log(err))
  }

  useEffect(()=>{
    fetchData();
  },[])

  
  return <div className={style.container}>

<Tabs>
  <div style={{ overflowX: "scroll", display:"flex", borderBottom:"1px solid #cccc"}}>
    <Tab>ASIA</Tab>
    <Tab>EUROPE</Tab>
    <Tab>NORTH AMERICA</Tab>
    <Tab>SOUTH AMERICA</Tab>
    <Tab>AFRICA</Tab>
    <Tab>OCEANIA</Tab>
  </div>

  <TabPanels>
    <TabPanel className={style.box}>

      {/* Column 1 */}

      <div className={style.first}>
        {
          data && data.ASIA?.map((item)=>{
            return <div>
            <Link to='/search-state/India'>{item.country}</Link>
            <p>{item.holidays}</p>
          </div>
          })
        }
        
      </div>

    {/* Column 2 */}

      
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
