import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";
import Home from "./Home/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
};

export default AllRoutes;
