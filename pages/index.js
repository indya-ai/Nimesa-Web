//pages/index.js

import SlickCarousel from "@/components/common/Carousal";
import Boosting from "@/components/home/Boosting";
import BusinessCard from "@/components/home/BusinessCard";
import CompleteEnviroment from "@/components/home/CompleteEnviroment";
import NimesaAws from "@/components/home/NimesaAws";
import Testimonial from "@/components/home/Tastimonial";
import WhyNimesa from "@/components/home/WhyNimesa";
import AwsMarketplace from "@/components/solution/AwsMarketplace";

export default function Home() {
  return (
    <>
      <div>
        <SlickCarousel />
        <div className="max-w-[1920px] md:px-8 px-4 m-auto">
          <h4 className="text-center capitalize text-[22px] font-bold text-[#212121] lg:py-[100px] py-[50px]">
            trusted By World-class DevOps Teams
          </h4>
          <div className="flex flex-row md:flex-wrap overflow-x-auto justify-between items-center gap-4 pb-4">
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
        </div>
        <div className="container grid items-center md:grid-cols-2 md:pb-16 pb-6 md:gap-[8px] gap-6 px-1 m-auto lg:py-[100px] py-[50px]">
          <img className=" m-auto w-full" src="/assets/images/home/image.svg" />
          <div className="xl:px-[50x] lg:px-[25px] md:px-[16px]">
            <h2 className="capitalize xl:text-[56px] md:pr-16 md:text-left text-center md:text-[40px] text-[32px] playfair-font text-[#212121]">
              Supported AWS Services
            </h2>

            <p className="text-lg md:text-left text-center text-gray my-3">
              NIMESA is a data protection and copy data management solution
              built for AWS EC2 instances, RDS, Load Balancers, S3 and more… It
              is available as an AMI that can be securely run as an EC2 instance
              within your AWS account.
            </p>
            <p className="text-lg md:text-left text-center text-gray">
              It provides well-defined policy-based backup, instant restore, and
              the clone of your EC2 instances.
            </p>
            <div className="flex flex-row items-center gap-4 mt-7">
              <button className="border text-gray md:mx-0 mx-auto rounded-full md:px-12 px-5 py-2.5 border-[#212121] cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#F3F6F9] xl:py-12 px-1 relative">
          <div className="lg:py-12 md:py-8 py-3 m-auto px-2">
            <h2 className="md:text-[56px] capitalize text-4xl text-center playfair-font py-5 md:mb-8">
              Why Nimesa?
            </h2>
            <p className="text-center xl:w-[40%] lg:w-[60%] mx-auto">
              DR process is complex, expensive, and unpredictable, Nimesa makes
              it simple, affordable, and highly secure.
            </p>
          </div>
          <img
            className="absolute bottom-[-60px] left-0"
            src="/assets/images/solution/healthcare/image.svg"
          />
          <WhyNimesa />
        </div>
        <div className="lg:py-[100px] px-1 py-[50px]">
          <AwsMarketplace />
        </div>
        <div className="bg-[#F3F6F9] md:py-12 px-1 py-4 relative ">
          <img
            className="absolute top-[25px] right-0"
            src="/assets/images/home/image-2.svg"
          />
          <div className="container m-auto">
            <div className="lg:py-12 md:py-8 py-3 m-auto px-2">
              <h2 className="md:text-[56px] text-4xl text-center playfair-font py-5 md:mb-8">
                Nimesa for AWS
              </h2>
              <p className="text-center xl:w-[38%] lg:w-[60%] mx-auto">
                NIMESA is a data protection and copy data management solution
                built for AWS EC2 instances, RDS, Load Balancers, S3 and more.
              </p>
            </div>
            <NimesaAws />
          </div>
        </div>
        <div className="lg:py-[100px] py-[50px] px-1">
          <img src="/assets/images/home/image-3.png" className="mx-auto" />
        </div>
        <div className="bg-[#F8F8F9] md:py-16 px-1 py-4">
          <div className="container m-auto">
            <Boosting />
          </div>
        </div>
        <div className="bg-[#F8F8F9] md:py-[100px] py-[50px]">
            <Testimonial/>
        </div>
        <CompleteEnviroment />
        <div className="bg-[#F8F8F9] md:mt-[100px] mt-[40px] md:py-[80px] py-[40px] px-1">
          <h2 className="xl:text-[56px] text-center md:text-[40px] text-[32px] playfair-font text-[#212121]">
            Learn more about Nimesa
          </h2>
          <p className="md:w-[40%] mx-auto text-gray text-center">
            Discover the power, flexibility, and security of our cloud platform,
            designed to support your business’s growth and innovation.
          </p>
          <div className="grid md:grid-cols-2 px-1 gap-4 md:mt-16 mt-8 container m-auto">
            <div className=" overflow-hidden p-[1px] relative rounded-[24px] card ">
              <img
                className="absolute top-[0px] right-0"
                src="/assets/images/home/img1.svg"
              />
              <div className="bg-white p-8 rounded-[24px]">
                <button className="bg-[#F3F4F4] rounded-full px-4 py-2">
                  Enhanced Security
                </button>
                <h3 className="playfair-font text-[32px] py-2 font-bold text-[#212121]">
                  Harness the Power of the Cloud
                </h3>
                <p>
                  Unlock seamless collaboration, streamline processes, and
                  reduce costs while enhancing your ability to respond to market
                  changes.
                </p>
              </div>
            </div>
            <div className=" overflow-hidden p-[1px] relative rounded-[24px] card">
              <img
                className="absolute top-[0px] right-0"
                src="/assets/images/home/img1.svg"
              />
              <div className="bg-white p-8 rounded-[24px]">
                <button className="bg-[#F3F4F4] rounded-full px-4 py-2">
                  Advanced Tools
                </button>
                <h3 className="playfair-font text-[32px] py-2 font-bold text-[#212121]">
                  Your Gateway to Cloud Excellence
                </h3>
                <p>
                  Unlock seamless collaboration, streamline processes, and
                  reduce costs while enhancing your ability to respond to market
                  changes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <BusinessCard />
      </div>
    </>
  );
}
