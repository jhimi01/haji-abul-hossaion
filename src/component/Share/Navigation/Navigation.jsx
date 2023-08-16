import React from "react";
import logo from "../../../../public/habhit.png";
import { Link } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
  const Navigationlinks = () => (
    <>
      {/* ... (other navigation links) */}
      <li className="hover:bg-[#62acff] py-2 px-3 relative">
        <a href="">course</a>
        <div className="dropdown">
          <ul className="dropdown-content">
            {Object.keys(departments.diplomaPrograms).map((department) => (
              <li key={department}>
                <a href="">{departments.diplomaPrograms[department].name}</a>
              </li>
            ))}
          </ul>
        </div>
      </li>
      {/* ... (other navigation links) */}
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
       <Link to='/' className="hover:bg-[#62acff] py-2 px-3">
          <a href="">home</a>
        </Link>
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

