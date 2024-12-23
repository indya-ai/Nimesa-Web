import Banner from "@/components/common/Banner";
import FreeTrial from "@/components/demo/FreeTrial";
import OurValueCard from "@/components/solution/OurValueCard";

function index() {
  const OurValueCardData = [
    {
      title: "Address",
      imageSrc: "/assets/images/company/map.svg",
      detail: [
        "Nimesa Technologies, No. 1567, 3rd Floor, NGR Arcade, 27th Main Road, Sector 2, HSR Layout, Bangalore, Karnataka, India – 560102",
      ],
    },
    {
      title: "Email",
      imageSrc: "/assets/images/company/email.svg",
      detail: ["Sales:sales@nimesha.io", "Support:support@nimesa.io"],
    },
    {
      title: "Call us at",
      imageSrc: "/assets/images/company/phone.svg",
      detail: ["Phone:+1-408-940-1351"],
    },
  ];
  return (
    <div>
      <Banner title="Contact Us" imageUrl="/assets/images/banner.svg" />
      <div className="container m-auto grid xl:grid-cols-3 md:grid-cols-2 md:py-[100px] py-[50px] gap-8 px-1">
        {OurValueCardData.map((data, index) => (
          <OurValueCard style="card" key={index} {...data} />
        ))}
      </div>
      <div className="py-12 bg-[#f8f8f9] flex flex-col gap-7 px-1">
        <h2 className="md:text-[54px] text-[24px] text-center">
          Get a free quote now
        </h2>
        <p className="text-center text-lg text-gray">
          Fill in the form below and we will get back to you as fast as
          possible!
        </p>
        <form className="space-y-4 md:w-[554px] mx-auto container m-auto">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="appearance-none w-full border border-[#D3D3D3] focus:outline-none text-sm leading-6 rounded-full placeholder:text-gray p-3 shadow-sm"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="email"
              className="appearance-none w-full border border-[#D3D3D3] focus:outline-none text-sm leading-6 rounded-full placeholder:text-gray p-3 shadow-sm"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Company Name"
              className="appearance-none w-full border border-[#D3D3D3] focus:outline-none text-sm leading-6 rounded-full placeholder:text-gray p-3 shadow-sm"
            />
          </div>{" "}
          <div>
            <textarea
              type="text"
              placeholder="Enter your message here"
              className="appearance-none w-full border border-[#D3D3D3] focus:outline-none text-sm leading-6 rounded-[16px] placeholder:text-gray p-3 shadow-sm"
            ></textarea>
          </div>{" "}
          <button
            type="submit"
            className="w-full bg-[#3432CA] text-white rounded-full p-3 py-3.5 text-sm shadow-sm mt-4"
          >
            Send
          </button>
        </form>
      </div>
      <div className="py-12 mx-1">
        <FreeTrial />
      </div>
    </div>
  );
}

export default index;
