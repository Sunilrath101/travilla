import React, { useState, useEffect } from "react";
import HotelCardVertical from "../../Components/HotelCardVertical/HotelCardVertical";
import style from './HotelLists.module.css'
import Map from '../../Components/Map/Map'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getData } from "../../Redux/DataReducer/action";
import axios from "axios"

const HotelLists = () => {

  const {search_query} = useParams();
  const data=useSelector((store)=> store.dataReducer.HotelLists)

  const dispatch= useDispatch()
  // const [data, setData]= useState();

  // const getData=()=>{
  //   axios
  //     .get("https://long-plum-mite-cape.cyclic.app/results?state=himachal&_limit=7")
  //     .then((res)=> setData(res.data))
  //     .catch((err)=> console.log(err))
  // }


  useEffect(()=>{
    dispatch(getData(search_query))
    console.log("data:", data)
    // getData()
  },[])

  return <div className={style.container}>
    <div className={style.left}>
      <div className={style.top}>
        <div>APPLY FILTERS</div>
        <div>MODIFY SEARCH</div>
      </div>
      <div className={style.bottom}>
        <div className={style.tools}>
          <p>Total 283 results</p>
          <select name="sort-by" id="">
            <option value="rel">Relevance</option>
            <option value="lth">Price (Low to High)</option>
            <option value="htl">Price (High to Low)</option>
          </select>
        </div>
        <div className={style.lists}>
          <HotelCardVertical/>
          <HotelCardVertical/>
          <HotelCardVertical/>
          <HotelCardVertical/>
          <HotelCardVertical/>
          <HotelCardVertical/>
        </div>
      </div>
    </div>
    <div className={style.right}>
      <Map city={search_query}/>
    </div>
    
  </div>;
};

export default HotelLists;
