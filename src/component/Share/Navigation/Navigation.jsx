import React from "react";
import logo from '../../../../public/habhit.png'

const Navigation = () => {
  return (
    <>
      <div className="navbar bg-[#36404a] text-[#62acff]">
      <img className="h-[80px]" src={logo} alt="logo" />
        <h1 className="text-3xl font-semibold ml-3 font-serif">Haji Abul Hossain Institute of Technology (HABHIT)</h1>
      </div>
    </>
  );
};

export default Navigation;
