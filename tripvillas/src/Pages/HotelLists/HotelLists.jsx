import React from "react";
import HotelCardVertical from "../../Components/HotelCardVertical/HotelCardVertical";
import style from './HotelLists.module.css'

const HotelLists = () => {
  return <div className={style.container}>
    <div className={style.left}>
      <div className={style.top}>
        <div>APPLY FILTERS</div>
        <div>MODIFY SEARCH</div>
      </div>
      <div className={style.bottom}>
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

    </div>
    
  </div>;
};

export default HotelLists;
