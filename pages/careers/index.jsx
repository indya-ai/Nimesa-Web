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
    jobId: "164940",
    jobTitle: "Scrum Master",
    department: "Engineering",
    location: "Mumbai, Maharashtra, India",
    officeLocation: "Mumbai, Maharashtra, India",
  },
  {
    jobId: "161310",
    jobTitle: "BDR - Enterprise Sales",
    department: "Data & AI",
    location: "Delhi, India",
    officeLocation: "Delhi, India",
  },
  {
    jobId: "160265",
    jobTitle: "Account Executive / Enterprise Sales – Nimesa",
    department: "Engineering",
    location: "Bengaluru, Karnataka, India",
    officeLocation: "Bengaluru, Karnataka, India",
  },
  {
    jobId: "157246",
    jobTitle: "Python Developer (Intern) - AI Automation",
    department: "Engineering",
    location: "Mumbai, Maharashtra, India",
    officeLocation: "Mumbai, Maharashtra, India",
  },
  {
    jobId: "152956",
    jobTitle: "Account Executive (Enterprise Sales)",
    department: "Data & AI",
    location: "Delhi, India",
    officeLocation: "Delhi, India",
  },
  {
    jobId: "152943",
    jobTitle: "AWS Solution Expert-Pre-Sales",
    department: "Engineering",
    location: "Bengaluru, Karnataka, India",
    officeLocation: "Bengaluru, Karnataka, India",
  },
  {
    jobId: "150580",
    jobTitle: "AWS Solutions Architect (with Pre-Sales)",
    department: "Engineering",
    location: "Mumbai, Maharashtra, India",
    officeLocation: "Mumbai, Maharashtra, India",
  },
  {
    jobId: "147721",
    jobTitle: "Chief of Staff",
    department: "Data & AI",
    location: "Delhi, India",
    officeLocation: "Delhi, India",
  },
  {
    jobId: "147718",
    jobTitle: "QA Lead",
    department: "Engineering",
    location: "Bengaluru, Karnataka, India",
    officeLocation: "Bengaluru, Karnataka, India",
  },
  {
    jobId: "147716",
    jobTitle: "Program Manager / Project Manager",
    department: "Engineering",
    location: "Mumbai, Maharashtra, India",
    officeLocation: "Mumbai, Maharashtra, India",
  },
  {
    jobId: "147502",
    jobTitle: "AWS Partner Manager",
    department: "Data & AI",
    location: "Delhi, India",
    officeLocation: "Delhi, India",
  },
  {
    jobId: "147499",
    jobTitle: "Product Management Intern",
    department: "Engineering",
    location: "Bengaluru, Karnataka, India",
    officeLocation: "Bengaluru, Karnataka, India",
  },
  {
    jobId: "147478",
    jobTitle: "Customer Success Manager",
    department: "Engineering",
    location: "Mumbai, Maharashtra, India",
    officeLocation: "Mumbai, Maharashtra, India",
  },
  {
    jobId: "147475",
    jobTitle: "AI Engineer - Intern",
    department: "Data & AI",
    location: "Delhi, India",
    officeLocation: "Delhi, India",
  },
  {
    jobId: "147471",
    jobTitle: "Sales Operations Intern",
    department: "Engineering",
    location: "Bengaluru, Karnataka, India",
    officeLocation: "Bengaluru, Karnataka, India",
  },
  {
    jobId: "147440",
    jobTitle: "HR Operations Intern",
    department: "Engineering",
    location: "Mumbai, Maharashtra, India",
    officeLocation: "Mumbai, Maharashtra, India",
  },
  {
    jobId: "147266",
    jobTitle: "Marketing Manager",
    department: "Data & AI",
    location: "Delhi, India",
    officeLocation: "Delhi, India",
  },
  {
    jobId: "147258",
    jobTitle: "BDR Intern (Business Development Representative Intern)",
    department: "Engineering",
    location: "Bengaluru, Karnataka, India",
    officeLocation: "Bengaluru, Karnataka, India",
  },
  {
    jobId: "147255",
    jobTitle: "Junior Developer",
    department: "Engineering",
    location: "Mumbai, Maharashtra, India",
    officeLocation: "Mumbai, Maharashtra, India",
  },
  {
    jobId: "147266",
    jobTitle: "Tech Lead",
    department: "Data & AI",
    location: "Delhi, India",
    officeLocation: "Delhi, India",
  },
  {
    jobId: "147238",
    jobTitle: "Pre-sales lead",
    department: "Engineering",
    location: "Bengaluru, Karnataka, India",
    officeLocation: "Bengaluru, Karnataka, India",
  },
  {
    jobId: "144789",
    jobTitle: "Market Research Intern",
    department: "Engineering",
    location: "Mumbai, Maharashtra, India",
    officeLocation: "Mumbai, Maharashtra, India",
  },
  {
    jobId: "142851",
    jobTitle: "IT Sales Admin",
    department: "Data & AI",
    location: "Delhi, India",
    officeLocation: "Delhi, India",
  },
  {
    jobId: "142828",
    jobTitle: "Digital Marketing Intern",
    department: "Engineering",
    location: "Bengaluru, Karnataka, India",
    officeLocation: "Bengaluru, Karnataka, India",
  },
  {
    jobId: "137384",
    jobTitle: "Sales Operation Analyst- Fresher",
    department: "Engineering",
    location: "Mumbai, Maharashtra, India",
    officeLocation: "Mumbai, Maharashtra, India",
  },
  {
    jobId: "114627",
    jobTitle: "Senior Account Executive (Enterprise Cybersecurity Sales)",
    department: "Data & AI",
    location: "Delhi, India",
    officeLocation: "Delhi, India",
  },
  {
    jobId: "114066",
    jobTitle: "Enterprise Sales Consultant (US)",
    department: "Engineering",
    location: "Bengaluru, Karnataka, India",
    officeLocation: "Bengaluru, Karnataka, India",
  },
  {
    jobId: "112887",
    jobTitle: "Solution Engineer Intern",
    department: "Engineering",
    location: "Mumbai, Maharashtra, India",
    officeLocation: "Mumbai, Maharashtra, India",
  },
  {
    jobId: "111150",
    jobTitle: "Pre-sales",
    department: "Data & AI",
    location: "Delhi, India",
    officeLocation: "Delhi, India",
  },
  {
    jobId: "97900",
    jobTitle: "Senior IT Recruiter",
    department: "Engineering",
    location: "Bengaluru, Karnataka, India",
    officeLocation: "Bengaluru, Karnataka, India",
  },
  {
    jobId: "92936",
    jobTitle: "Sales",
    department: "Engineering",
    location: "Mumbai, Maharashtra, India",
    officeLocation: "Mumbai, Maharashtra, India",
  },
  {
    jobId: "81564",
    jobTitle: "Market Research Intern",
    department: "Data & AI",
    location: "Delhi, India",
    officeLocation: "Delhi, India",
  },
  {
    jobId: "72742",
    jobTitle: "Senior Account Executive (Enterprise Cybersecurity Sales)",
    department: "Engineering",
    location: "Bengaluru, Karnataka, India",
    officeLocation: "Bengaluru, Karnataka, India",
  },
];


  return (
    <div>
      <Banner title="Career" imageUrl="/assets/images/banner.svg" />
      <div className="bg-white lg:py-20 md:py-12 py-5">
        <div className="container grid items-center md:grid-cols-2 md:gap-[4px] gap-[8px] px-2 m-auto">
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
          <h2 className="md:text-[56px] text-4xl text-center playfair-font py-5 md:mb-8">
            Careers at Nimesa
          </h2>
          <div className="grid md:gap-8 gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative bg-white overflow-hidden rounded-full">
              <img
                src="/assets/images/career/search-icon.svg"
                alt="search icon"
                className="absolute left-3 top-1/2 -mt-2.5 text-gray pointer-events-none group-focus-within:text-blue-500 dark:text-slate-500"
              />
              <input
                type="text"
                aria-label="Search"
                placeholder="Search..."
                className="appearance-none w-full border border-[#D3D3D3] focus:outline-none text-sm leading-6 bg-transparent rounded-full placeholder:text-gray py-3 pl-10 shadow-sm"
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
