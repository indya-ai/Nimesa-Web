import { useState } from "react";
import CareerCard from "@/components/career/CareerCard";
import Banner from "@/components/common/Banner";

export default function Index() {
  const [assignedTo, setAssignedTo] = useState("tomCook");
  const [location, setLocation] = useState("Select location");
  const jobDataArray = [
    {
      jobId: "164965",
      jobTitle: "EKS Architect",
      department: "Engineering",
      location: "Bengaluru, Karnataka, India",
      officeLocation: "Bengaluru, Karnataka, India",
    },
    {
      jobId: "164966",
      jobTitle: "Frontend Developer",
      department: "Engineering",
      location: "Mumbai, Maharashtra, India",
      officeLocation: "Mumbai, Maharashtra, India",
    },
    {
      jobId: "164967",
      jobTitle: "Data Scientist",
      department: "Data & AI",
      location: "Delhi, India",
      officeLocation: "Delhi, India",
    },
  ];
  return (
    <div>
      <Banner title="Title" />
      <div className="bg-white lg:py-20 md:py-12 py-5">
        <div className="container grid items-center md:grid-cols-2 md:gap-0 gap-4 px-2 m-auto">
          <img src="/assets/images/career/image.svg" />
          <div className="lg:w-[70%] md:w-[80%] mx-auto">
            <p className="text-lg">
              Nimesa is a Data Protection & Copy Data Management company
              creating an enterprise-class Backup & Recovery solution. Our
              product can cater to the needs of the enterprise AWS users who are
              looking for a 360° Data Protection solution that can do more than
              just Backup & Recovery.
            </p>
            <div className="flex flex-col gap-3 md:mt-8 mt-4">
              <h3 className="text-[#212121] text-[22px] font-bold">
                Contact info:
              </h3>
              <div className="flex items-center gap-5">
                <img src="/assets/images/career/gmail.svg" />
                <span>hr@nimesa.io</span>
              </div>
              <div className="flex items-center gap-5">
                <img src="/assets/images/career/link-icon.svg" />
                <span>https://nimesa.io/</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F8F9]">
        <div className="container lg:py-16 md:py-8 py-3 m-auto px-2">
          <h2 className="md:text-[56px] text-4xl text-center playfair-font py-5">
            Careers at Nimesa
          </h2>
          <div className="grid md:gap-8 gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative bg-white rounded-md">
              <img
                src="/assets/images/career/search-icon.svg"
                alt="search icon"
                className="absolute left-3 top-1/2 -mt-2.5 text-[#4D4D4D] pointer-events-none group-focus-within:text-blue-500 dark:text-slate-500"
              />
              <input
                type="text"
                aria-label="Search"
                placeholder="Search..."
                className="appearance-none w-full border border-[#D3D3D3] focus:outline-none text-sm leading-6 bg-transparent rounded-full placeholder:text-[#4D4D4D] py-3 pl-10 shadow-sm"
              />
            </div>

            <select
              id="assignedTo"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              className="block w-full p-3 rounded-full border border-[#D3D3D3] shadow-sm focus:outline-none"
            >
              <option value="tomCook">Select department</option>
              <option value="wadeCooper">Wade Cooper</option>
              <option value="janeDoe">Jane Doe</option>
              <option value="johnSmith">John Smith</option>
            </select>

            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="block w-full p-3 rounded-full border border-[#D3D3D3] shadow-sm focus:outline-none"
            >
              <option value="Select location">Select location</option>
              <option value="wadeCooper">Wade Cooper</option>
              <option value="janeDoe">Jane Doe</option>
              <option value="johnSmith">John Smith</option>
            </select>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-8">
            {jobDataArray.map((job, index) => (
              <CareerCard
                key={index}
                jobId={job.jobId}
                jobTitle={job.jobTitle}
                department={job.department}
                location={job.location}
                officeLocation={job.officeLocation}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:py-20 md:py-12 py-5 m-2">
        <div className="bg-[#F1E1FF] rounded-[24px] container px-2 m-auto md:p-28 p-12">
          <h4 className="text-lg text-center mb-2">Hiring Powered By</h4>
          <img
            className="flex justify-center mx-auto"
            src="/assets/images/career/pyjama-hr-logo.svg"
          />
        </div>
      </div>
    </div>
  );
}
