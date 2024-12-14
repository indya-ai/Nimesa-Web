import React from "react";

const Banner = ({ title }) => {
  return (
    <div className="relative bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white h-[250px] flex items-center justify-center">
     
      <div className="absolute inset-0 pointer-events-none">
        <img src="/assets/images/banner.svg"/>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold z-10">{title}</h1>
    </div>
  );
};

export default Banner;
