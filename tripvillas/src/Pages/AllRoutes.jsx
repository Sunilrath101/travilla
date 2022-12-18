import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";
import CreateProperty from "./CreateProperty/CreateProperty";
import PropertyDetails1 from "./CreateProperty/PropertyDetails1/PropertyDetails1";
import PropertyDetails2 from "./CreateProperty/PropertyDetails2/PropertyDetails2";
import PropertyDetails3 from "./CreateProperty/PropertyDetails3/PropertyDetails3";
import PropertyDetails4 from "./CreateProperty/PropertyDetails4/PropertyDetails4";
import PropertyDetails5 from "./CreateProperty/PropertyDetails5/PropertyDetails5";
import PropertyDetails6 from "./CreateProperty/PropertyDetails6/PropertyDetails6";
import PropertyDetails7 from "./CreateProperty/PropertyDetails7/PropertyDetails7";
import PropertyDetails8 from "./CreateProperty/PropertyDetails8/PropertyDetails8";

import Home from "./Home/Home";
import HotelLists from "./HotelLists/HotelLists";
import SearchCity from "./SearchCity/SearchCity";
import SearchState from "./SearchState/SearchState";
import SingleHotel from "./SingleHotel/SingleHotel";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<<<<<<< HEAD
      <Route path="/dashBoard" element={<DashBoard />} />
      <Route path="/search-state" element={<SearchState />} />
      <Route path="/hotel-list" element={<HotelLists />} />
      <Route path="/host/create-property" element={<PropertyDetails1 />} />
      <Route path="/host/create-property/2" element={<PropertyDetails2 />} />
      <Route path="/host/create-property/3" element={<PropertyDetails3 />} />
      <Route path="/host/create-property/4" element={<PropertyDetails4 />} />
      <Route path="/host/create-property/5" element={<PropertyDetails5 />} />
      <Route path="/host/create-property/6" element={<PropertyDetails6 />} />
      <Route path="/host/create-property/7" element={<PropertyDetails7 />} />
      <Route path="/host/create-property/8" element={<PropertyDetails8 />} />
=======
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/search-state/:state_query" element={<SearchState />} />
      <Route path="/search-city/:city_query" element={<SearchCity />} />
      <Route path="/hotel-list/:search_query" element={<HotelLists />} />
      <Route path="/host/create-property" element={<CreateProperty />} />
      <Route path="/singlehotelpage/:id" element={<SingleHotel />} />
>>>>>>> main
    </Routes>
  );
};

export default AllRoutes;
