import CompleteEnviroment from "@/components/home/CompleteEnviroment";
import Testimonial from "@/components/home/Tastimonial";
import WhyNimesa from "@/components/home/WhyNimesa";
import React from "react";
function index() {

  return (
    <div>
      <div className="max-w-[1920px] md:px-8 px-4 m-auto">
        <h4 className="text-center capitalize text-[22px] font-bold text-[#212121] lg:py-[100px] py-[50px]">
          trusted By World-class DevOps Teams
        </h4>
      </div>
      <div className="flex md:py-[100px] py-[50px] flex-row md:flex-wrap overflow-x-auto justify-between items-center gap-4 pb-4">
        {[
          "bharatpe",
          "biltrax",
          "skill",
          "Axis",
          "cash",
          "lead",
          "math",
          "india-money",
          "loan",
          "Freecharge",
        ].map((imageName, index) => (
          <img
            key={index}
            src={`/assets/images/home/${imageName}.svg`}
            alt={imageName}
            className="h-auto w-auto" // Adjust as needed
          />
        ))}
      </div>
      <div className="bg-[#F3F6F9] xl:py-12 px-1 relative">
        <div className="lg:py-12 md:py-8 py-3 m-auto px-2">
          <h2 className="md:text-[56px] capitalize text-4xl text-center playfair-font py-5 md:mb-8">
            Why Nimesa?
          </h2>
          <p className="text-center xl:w-[40%] lg:w-[60%] mx-auto">
            DR process is complex, expensive, and unpredictable, Nimesa makes it
            simple, affordable, and highly secure.
          </p>
        </div>
        <img
          className="absolute bottom-[-60px] left-0"
          src="/assets/images/solution/healthcare/image.svg"
        />
        <WhyNimesa />
        <CompleteEnviroment />
      </div>
      <Testimonial />
    </div>
  );
}

export default index;
