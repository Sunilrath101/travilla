import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";
import CreateProperty from "./CreateProperty/CreateProperty";
import Home from "./Home/Home";
import HotelLists from "./HotelLists/HotelLists";
import SearchState from "./SearchState/SearchState";
import SingleHotel from "./SingleHotel/SingleHotel";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashBoard" element={<DashBoard />} />
      <Route path="/search-state" element={<SearchState />} />
      <Route path="/hotel-list/:search_query" element={<HotelLists />} />
      <Route path="/host/create-property" element={<CreateProperty />} />
      <Route
        path="hotel-list/:search_query/singlehotelpage"
        element={<SingleHotel />}
      />
    </Routes>
  );
};

export default AllRoutes;
