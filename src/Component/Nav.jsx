import React from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {
  const style = (e) => {
    return {
      color: e.isActive ? "tomato" : "",
      border: e.isActive ? "2px solid tomato" : "",
      borderRadius: e.isActive ? "10px" : "",
      padding: e.isActive ? " 2px 10px" : "",
    };
  };
  return (
    <>
      <nav className="flex gap-5 text-3xl font-bold justify-center mt-10">
        <NavLink style={style} to="/">
          Home
        </NavLink>
        <NavLink style={style} to="/show">
          Show
        </NavLink>
        <NavLink style={style} to="/services">
          Services
        </NavLink>
      </nav>
    </>
  );
}
