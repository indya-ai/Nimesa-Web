import React, { useState } from "react";

function NimesaAws() {
  // State to manage which section is expanded
  const [expandedSection, setExpandedSection] = useState("protect");

  // Function to toggle the expanded section
  const toggleSection = (section) => {
    // If the same section is clicked, collapse it; else expand the new section
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="grid lg:grid-cols-2 md:py-10 py-5 gap-[18px]">
      <div className="xl:px-[50px] lg:px-[25px] md:px-[16px] flex flex-col gap-8 justify-around">
        {/* Heading for Protection Section, only show if not expanded */}
        {expandedSection !== "protect" && (
          <h4
            className="text-[#212121] text-start md:text-[32px] text-[24px] font-bold cursor-pointer"
            onClick={() => toggleSection("protect")}
          >
            Protect AWS Native services seamlessly
          </h4>
        )}
        {/* Expanded Protection Content */}
        {expandedSection === "protect" && (
          <div className="rounded-[12px] md:p-12 p-4 border-[#3432CA] border">
            <h3 className="md:text-[32px] text-[24px] playfair-font font-bold">
              Protect AWS Native services seamlessly
            </h3>
            <p className="text-gray mt-4">
              NIMESA is a unified cloud data management solution and an
              application-aware solution for major business applications running
              in AWS EC2 Instances.
            </p>
          </div>
        )}

        {/* Heading for Recovery Section, only show if not expanded */}
        {expandedSection !== "recovery" && (
          <h4
            className="text-[#212121] md:text-start text-center md:text-[32px] text-[24px] font-bold cursor-pointer"
            onClick={() => toggleSection("recovery")}
          >
            Recovery in minutes at all levels
          </h4>
        )}
        {/* Expanded Recovery Content */}
        {expandedSection === "recovery" && (
          <div className="rounded-[12px] md:p-12 p-4 border-[#3432CA] border">
            <h3 className="md:text-[32px] text-[24px] playfair-font font-bold">
              Recovery in minutes at all levels
            </h3>
            <p className="text-gray mt-4">
              Instantly recover your data at different levels, ensuring minimal
              downtime and maximum efficiency.
            </p>
          </div>
        )}

        {/* Heading for DR Failover Section, only show if not expanded */}
        {expandedSection !== "drFailover" && (
          <h4
            className="text-[#212121] md:text-start text-center md:text-[32px] text-[24px] font-bold cursor-pointer"
            onClick={() => toggleSection("drFailover")}
          >
            One-click DR failover and failback
          </h4>
        )}
        {/* Expanded DR Failover Content */}
        {expandedSection === "drFailover" && (
          <div className="rounded-[12px] md:p-12 p-4 border-[#3432CA] border">
            <h3 className="md:text-[32px] text-[24px] playfair-font font-bold">
              One-click DR failover and failback
            </h3>
            <p className="text-gray mt-4">
              Easily switch between disaster recovery modes with a single click,
              ensuring seamless operations.
            </p>
          </div>
        )}
      </div>

      {/* Right Column (Image) */}
      <img
        className="lg:w-auto w-full m-auto"
        src="/assets/images/home/aws.svg"
        alt="AWS Illustration"
      />
    </div>
  );
}

export default NimesaAws;
