import React from "react";
import logo from "../../../../public/habhit.png";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const Navigationlinks = () => (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-[#62acff]" : "")}
      >
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink
        to="/course"
        className={({ isActive }) => (isActive ? "text-[#62acff]" : "")}
      >
        <li>
          <a>course</a>
        </li>
      </NavLink>
      <NavLink
        to="/admission"
        className={({ isActive }) => (isActive ? "text-[#62acff]" : "")}
      >
        <li>
          <a>Admission</a>
        </li>
      </NavLink>
      <NavLink
        to="/facility"
        className={({ isActive }) => (isActive ? "text-[#95c6fd]" : "")}
      >
        <li>
          <a>Facilities</a>
        </li>
      </NavLink>
      <NavLink
        to="/facility"
        className={({ isActive }) => (isActive ? "text-[#95c6fd]" : "")}
      >
        <li>
          <a>History</a>
        </li>
      </NavLink>
      <NavLink
        to="/facility"
        className={({ isActive }) => (isActive ? "text-[#95c6fd]" : "")}
      >
        <li>
          <a>About HABHIT</a>
        </li>
      </NavLink>
      <NavLink
        to="/facility"
        className={({ isActive }) => (isActive ? "text-[#95c6fd]" : "")}
      >
        <li>
          <a>Notices</a>
        </li>
      </NavLink>
      <NavLink
        to="/facility"
        className={({ isActive }) => (isActive ? "text-[#95c6fd]" : "")}
      >
        <li>
          <a>Contact</a>
        </li>
      </NavLink>
    </>
  );

  return (
    <>
      <div className="navbar bg-[#36404a] text-[#62acff]">
        <img className="h-[80px]" src={logo} alt="logo" />
        <h1 className="text-3xl font-semibold ml-3 font-serif">
          Haji Abul Hossain Institute of Technology (HABHIT)
        </h1>
      </div>
      <div className="bg-[#1565c0] px-4 text-white flex items-center justify-between">
       <ul className="flex items-center gap-3">
       <li className="hover:bg-[#62acff] py-2 px-3">
          <a href="">home</a>
        </li>
        <li className="hover:bg-[#62acff] py-2 px-3">
          <a href="">course</a>
        </li>
        <li className="hover:bg-[#62acff] py-2 px-3">
          <a href="">Ability</a>
        </li>
        <li className="hover:bg-[#62acff] py-2 px-3">
          <a href="">History</a>
        </li>
        <li className="hover:bg-[#62acff] py-2 px-3">
          <a href="">home</a>
        </li>
        <li className="hover:bg-[#62acff] py-2 px-3">
          <a href="">home</a>
        </li>
       </ul>
       <div>
        <Link to='/login'><p>Login</p></Link>
       </div>
      </div>
    </>
  );
};

export default Navigation;
