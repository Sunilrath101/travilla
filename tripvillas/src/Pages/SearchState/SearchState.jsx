import React from "react";
import Searchbar from "../../Components/Searchbar/Searchbar";
import Footer from "../../Components/Footer/Footer";
import style from './SearchState.module.css'
import { useParams } from "react-router-dom";

const SearchState = () => {
  const {state_query}= useParams()
  return <div>
    <div className={style.searchbox}>
      <h2>{state_query} Holiday Homes</h2>
      <h3>We have 3262 Vacation Rentals - search by dates for availability</h3>
      <Searchbar query={state_query}/>
    </div>
    <Footer/>
  </div>;
};

export default SearchState;
