import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Show from "./Show";
import Services from "./Services";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}
