import React from "react";
import Searchbar from "../../Components/Searchbar/Searchbar";
import Footer from "../../Components/Footer/Footer";
import style from './SearchCity.module.css'
import { useParams } from "react-router-dom";

const SearchCity = () => {
  const {city_query}= useParams()
  return <div>
    <div className={style.searchbox}>
      <h2>{city_query} Holiday Homes</h2>
      <h3>We have 3262 Vacation Rentals - search by dates for availability</h3>
      <Searchbar query={city_query}/>
    </div>
    <Footer/>
  </div>;
};


export default SearchCity;
