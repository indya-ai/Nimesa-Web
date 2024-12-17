import React from "react";

function FreeTrial() {
  return (
    <div className="lg:py-20 py-5 m-2">
      <div className="bg-[url('/assets/images/demo/free-trail-bg.svg')] text-center bg-cover bg-center rounded-[24px] container px-2 m-auto md:p-16 text-white p-12">
        <h4 className="md:text-[44px] text-3xl text-center mb-2 playfair-font">
          Request for free trial
        </h4>
        <h5 className="text-lg">
          Simple, instant data protection and copy data management solution.
        </h5>
        <button className="rounded-full bg-white text-[#212121] p-3 mb-3 mt-8">
          Experience Nimesa
        </button>
        <p>Fully functional 30-day trial</p>
      </div>
    </div>
  );
}

export default FreeTrial;
