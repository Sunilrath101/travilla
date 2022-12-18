import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";
import CreateProperty from "./CreateProperty/CreateProperty";
import Home from "./Home/Home";
import HotelLists from "./HotelLists/HotelLists";
import SearchCity from "./SearchCity/SearchCity";
import SearchState from "./SearchState/SearchState";
import SingleHotel from "./SingleHotel/SingleHotel";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/search-state/:state_query" element={<SearchState />} />
      <Route path="/search-city/:city_query" element={<SearchCity />} />
      <Route path="/hotel-list/:search_query" element={<HotelLists />} />
      <Route path="/host/create-property" element={<CreateProperty />} />
      <Route
        path="/singlehotelpage/:id"
        element={<SingleHotel />}
      />
    </Routes>
  );
};

export default AllRoutes;
