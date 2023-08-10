import React from "react";
import logo from "../../../../public/habhit.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {


const Navigationlinks = () => (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#62acff]" : ""
        }
      >
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink
        to="/course"
        className={({ isActive }) =>
          isActive ? "text-[#62acff]" : ""
        }
      >
        <li>
          <a>course</a>
        </li>
      </NavLink>
      <NavLink
        to="/admission"
        className={({ isActive }) =>
          isActive ? "text-[#62acff]" : ""
        }
      >
        <li>
          <a>Admission</a>
        </li>
      </NavLink>
      <NavLink
        to="/facility"
        className={({ isActive }) =>
          isActive ? "text-[#95c6fd]" : ""
        }
      >
        <li>
          <a>Facilities</a>
        </li>
      </NavLink>
      <NavLink
        to="/facility"
        className={({ isActive }) =>
          isActive ? "text-[#95c6fd]" : ""
        }
      >
        <li>
          <a>History</a>
        </li>
      </NavLink>
      <NavLink
        to="/facility"
        className={({ isActive }) =>
          isActive ? "text-[#95c6fd]" : ""
        }
      >
        <li>
          <a>About HABHIT</a>
        </li>
      </NavLink>
      <NavLink
        to="/facility"
        className={({ isActive }) =>
          isActive ? "text-[#95c6fd]" : ""
        }
      >
        <li>
          <a>Notices</a>
        </li>
      </NavLink>
      <NavLink
        to="/facility"
        className={({ isActive }) =>
          isActive ? "text-[#95c6fd]" : ""
        }
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
      <div className="navbar bg-[#1565c0]">
        <div className="navbar-start text-white">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Navigationlinks />
            </ul>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <Navigationlinks />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
