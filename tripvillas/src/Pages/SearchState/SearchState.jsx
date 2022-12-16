import React from "react";
import Searchbar from "../../Components/Searchbar/Searchbar";
import Footer from "../../Components/Footer/Footer";
import style from './SearchState.module.css'

const SearchState = () => {
  return <div>
    <div className={style.searchbox}>
      <h2>India Holiday Homes</h2>
      <h3>We have 3262 Vacation Rentals - search by dates for availability</h3>
      <Searchbar/>
    </div>
    <Footer/>
  </div>;
};

export default SearchState;
