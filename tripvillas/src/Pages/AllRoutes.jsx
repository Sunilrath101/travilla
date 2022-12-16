import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";
import Home from "./Home/Home";
import SearchState from "./SearchState/SearchState";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashBoard" element={<DashBoard />} />
      <Route path="/search-state" element={<SearchState/>}/>
    </Routes>
  );
};

export default AllRoutes;
