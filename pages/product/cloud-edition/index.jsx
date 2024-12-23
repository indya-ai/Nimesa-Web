import Card from "@/components/cloud-edition/Card";
import Banner from "@/components/common/Banner";
import Collapsible from "@/components/common/collapse/Collapse";
import FreeTrial from "@/components/demo/FreeTrial";
import AwsMarketplace from "@/components/solution/AwsMarketplace";
import OurValueCard from "@/components/solution/OurValueCard";
import { useState } from "react";
const index = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  // Handle card selection
  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index); // Toggle selection
  };

  const faqData = [
    {
      title: "How we approach replication of your entire AWS environment",
      content:
        "NIMESA is an orchestration layer over the native backup and recovery  mechanisms of AWS. We understand how to replicate your entire  environment data and infrastructure and rebuild it in an alternate  environment, so you can seamlessly recover from any disaster.",
    },
    {
      title: "How we handle real-time and non-real-time replication",
      content: "Tailwind CSS is a utility-first CSS framework.",
    },
    {
      title: "How we replicate infrastructure",
      content: "Pass a title and content as props.",
    },
  ];
  const recoveryData = [
    {
      title:
        "How NIMESA builds a recovery environment  that looks the same as your production environment — so your application keeps running as normal during recovery",
      content:
        "NIMESA is an orchestration layer over the native backup and recovery  mechanisms of AWS. We understand how to replicate your entire  environment data and infrastructure and rebuild it in an alternate  environment, so you can seamlessly recover from any disaster.",
    },
    {
      title:
        "What happens when you hit the Nimesa button? to initiate recovery?",
      content: "Tailwind CSS is a utility-first CSS framework.",
    },
  ];
  const ransomwareData = [
    {
      title: "Your backups will be protected if you get hacked.",
      content:
        "NIMESA is an orchestration layer over the native backup and recovery  mechanisms of AWS. We understand how to replicate your entire  environment data and infrastructure and rebuild it in an alternate  environment, so you can seamlessly recover from any disaster.",
    },
    {
      title:
        "Recovering from a ransomware attack without getting immediately ransomwared again",
      content: "Tailwind CSS is a utility-first CSS framework.",
    },
  ];
  const testingData = [
    {
      title: "How testing in NIMESA works?",
      content:
        "NIMESA is an orchestration layer over the native backup and recovery  mechanisms of AWS. We understand how to replicate your entire  environment data and infrastructure and rebuild it in an alternate  environment, so you can seamlessly recover from any disaster.",
    },
    {
      title: "How to test safely with NIMESA, without disrupting production",
      content: "Tailwind CSS is a utility-first CSS framework.",
    },
  ];
  const OurValueCardData = [
    {
      title: "Data Protection and Recovery",
      imageSrc: "/assets/images/product/folder.svg",
      detail: [
        "NIMESA automates protection of the cloud computing environment based on policies. NIMESA eliminates the need of  complex scripts to protect. Using NIMESA admin can recover a single  file, volume or complete instance.",
      ],
    },
    {
      title: "DR Automation",
      imageSrc: "/assets/images/product/automation.svg",
      detail: [
        "Enterprise needs capability to bring  compute environment in different regions in case of DR. NIMESA helps  admin to move critical data to different regions periodically based on  policy and bring the infrastructure in different region in a single  click.",
      ],
    },
    {
      title: "Multi-tenancy",
      imageSrc: "/assets/images/product/tenancy.svg",
      detail: [
        "Typically enterprise has multiple cloud  accounts. IT admin has to manage multiple scripts to protect the compute infrastructure. Using NIMESA multiple cloud accounts can be managed  from a single UI console.",
      ],
    },
  ];
  const data = [
    {
      title: "Environment Replication",
      imageSrc: "/assets/images/product/environment.svg",
    },
    {
      title: "Data & Infrastructure Recovery",
      imageSrc: "/assets/images/product/data.svg",
    },
    {
      title: "Testing",
      imageSrc: "/assets/images/product/testing.svg",
    },
    {
      title: "Ransomware",
      imageSrc: "/assets/images/product/Ransomware.svg",
    },
  ];
  return (
    <div>
      <Banner
        title="NIMESA Cloud Edition"
        imageUrl="/assets/images/banner.svg"
      />
      <div className="bg-white md:py-[100px] py-[50px]">
        <div className="container grid items-center lg:grid-cols-2 pb-16 gap-[8px] px-2 m-auto">
          <img
            className="lg:w-auto w-full"
            src="/assets/images/solution/multi-region/work-load.svg"
          />
          <div className="xl:px-[50px] lg:px-[25px] md:px-[16px]">
            <h2 className="xl:text-[56px] md:text-left text-center md:text-[40px] text-[32px] playfair-font text-[#212121]">
              Enterprise-class Data Protection
            </h2>
            <h4 className="lg:text-[32px] md:text-left text-center text-[24px] text-[#212121] playfair-font font-bold py-5">
              To protect your compute environment
            </h4>
            <p className="text-lg md:text-left text-center text-gray">
              NIMESA could be deployed within your cloud account as an instance
              and protect data. Without NIMESA IT admins rely on complex
              scripting to protect the data and go over manually the protected
              data to recover. NIMESA provides a policy-based protection, DR and
              single-click recovery of data.
            </p>
            <div className="flex flex-row items-center gap-4 mt-7">
              <button className="bg-blue text-white rounded-full md:px-12 px-8 py-3">
                Try Nimesa
              </button>
              <button className="bg-[#212121] text-white rounded-full md:px-12 px-8 py-3">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F8F9]">
          <div className="container m-auto text-center pt-12 2xl:px-[200px] lg-[100px]">
            <h3 className="lg:text-[56px] md:text-[40px] text-[24px] text-[#212121] playfair-font">
              How NIMESA Uses Native Features of AWS to Replicate Entire
              Environments Cross-Region and Cross-Account — And Recover on
              Demand
            </h3>
          </div>
          <div className="flex flex-col px-2 space-y-16">
            <div className="container mx-auto grid xl:grid-cols-4 md:grid-cols-3 md:mt-16 :mt-8 gap-8">
              {data.map((data, index) => (
                <Card
                  key={index}
                  {...data}
                  onClick={() => handleCardClick(index)}
                />
              ))}
            </div>

            {selectedCard !== null && (
              <div className="flex flex-col container mx-auto justify-center md:p-8 p-3 bg-white shadow rounded-3xl mt-8">
                {/* Conditional Rendering of Content Based on Selected Card */}
                <div className="w-full space-y-4">
                  {/* Example of dynamic content */}

                  {/* Render content based on the selected card */}
                  {data[selectedCard].title ===
                    "Data & Infrastructure Recovery" && (
                    <div className="flex flex-col container mx-auto justify-center md:p-8 p-3 bg-white shadow rounded-3xl">
                      <div className="flex flex-row items-center mb-6 gap-4">
                        <img
                          src="/assets/images/product/data.svg"
                          alt="Data & Infrastructure"
                        />
                        <h1 className="text-[22px] font-bold">
                          Data & Infrastructure Recovery
                        </h1>
                      </div>
                      <div className="w-full space-y-4">
                        {recoveryData.map((faq, index) => (
                          <Collapsible
                            key={index}
                            title={faq.title}
                            content={faq.content}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {data[selectedCard].title === "Testing" && (
                    <div className="flex flex-col container mx-auto justify-center md:p-8 p-3 bg-white shadow rounded-3xl">
                      <div className="flex flex-row items-center mb-6 gap-4">
                        <img
                          src="/assets/images/product/testing.svg"
                          alt="Testing"
                        />
                        <h1 className="text-[22px] font-bold">Testing</h1>
                      </div>
                      <div className="w-full space-y-4">
                        {testingData.map((faq, index) => (
                          <Collapsible
                            key={index}
                            title={faq.title}
                            content={faq.content}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {data[selectedCard].title === "Ransomware" && (
                    <div className="flex flex-col container mx-auto justify-center md:p-8 p-3 bg-white shadow rounded-3xl">
                      <div className="flex flex-row items-center mb-6 gap-4">
                        <img
                          src="/assets/images/product/Ransomware.svg"
                          alt="Ransomware"
                        />
                        <h1 className="text-[22px] font-bold">Ransomware</h1>
                      </div>
                      <div className="w-full space-y-4">
                        {ransomwareData.map((faq, index) => (
                          <Collapsible
                            key={index}
                            title={faq.title}
                            content={faq.content}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {(selectedCard === null ||
                    data[selectedCard].title === "Environment Replication") && (
                    <div className="flex flex-col container mx-auto justify-center md:p-8 p-3 bg-white shadow rounded-3xl">
                      <div className="flex flex-row items-center mb-6 gap-4">
                        <img
                          src="/assets/images/product/environment.svg"
                          alt="Environment Replication"
                        />
                        <h1 className="text-[22px] font-bold">
                          Environment Replication
                        </h1>
                      </div>
                      <div className="w-full space-y-4">
                        {faqData.map((faq, index) => (
                          <Collapsible
                            key={index}
                            title={faq.title}
                            content={faq.content}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div>
              <button className="bg-[#3432CA] mb-[36px] rounded-full px-6 py-3 text-lg text-white flex justify-center m-auto">
                View Services We Support
              </button>
            </div>
          </div>
        </div>

        <AwsMarketplace />
        <div className="bg-[#F8F8F9]">
          <div className="container lg:py-12 md:py-8 py-3 m-auto px-2">
            <h2 className="lg:text-[56px] md:text-[40px] text-[24px] text-center playfair-font py-5 md:mb-8">
              NIMESA use cases
            </h2>
            <p className="text-center xl:w-[40%] lg:w-[60%] mx-auto">
              Discover the power, flexibility, and security of our cloud
              platform, designed to support your business’s growth and
              innovation.
            </p>

            <div className="grid xl:grid-cols-3 md:grid-cols-2 mt-8 gap-8">
              {OurValueCardData.map((data, index) => (
                <OurValueCard style="card" key={index} {...data} />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:pt-20 py-5 m-2">
          <FreeTrial />
        </div>
      </div>
    </div>
  );
};

export default index;
