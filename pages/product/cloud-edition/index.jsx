import Banner from "@/components/common/Banner";
import Collapsible from "@/components/common/collapse/Collapse";
import FreeTrial from "@/components/demo/FreeTrial";
import AwsMarketplace from "@/components/solution/AwsMarketplace";
import OurValueCard from "@/components/solution/OurValueCard";
function index() {
  const faqData = [
    {
      title: "How we approach replication of your entire AWS environment",
      content:
        "NIMESHA is an orchestration layer over the native backup and recovery  mechanisms of AWS. We understand how to replicate your entire  environment data and infrastructure and rebuild it in an alternate  environment, so you can seamlessly recover from any disaster.",
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
        "How NIMESHA builds a recovery environment  that looks the same as your production environment — so your application keeps running as normal during recovery",
      content:
        "NIMESHA is an orchestration layer over the native backup and recovery  mechanisms of AWS. We understand how to replicate your entire  environment data and infrastructure and rebuild it in an alternate  environment, so you can seamlessly recover from any disaster.",
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
        "NIMESHA is an orchestration layer over the native backup and recovery  mechanisms of AWS. We understand how to replicate your entire  environment data and infrastructure and rebuild it in an alternate  environment, so you can seamlessly recover from any disaster.",
    },
    {
      title:
        "Recovering from a ransomware attack without getting immediately ransomwared again",
      content: "Tailwind CSS is a utility-first CSS framework.",
    },
  ];
  const testingData = [
    {
      title: "How testing in NIMESHA works?",
      content:
        "NIMESHA is an orchestration layer over the native backup and recovery  mechanisms of AWS. We understand how to replicate your entire  environment data and infrastructure and rebuild it in an alternate  environment, so you can seamlessly recover from any disaster.",
    },
    {
      title: "How to test safely with NIMESHA, without disrupting production",
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
  return (
    <div className="">
      <Banner
        title="NIMESA Cloud Edition"
        imageUrl="/assets/images/banner.svg"
      />
      <div className="bg-white lg:py-20 md:py-12 py-5">
        <div className="container grid items-center md:grid-cols-2 gap-[8px] px-2 m-auto">
          <img src="/assets/images/solution/multi-region/work-load.svg" />
          <div className="lg:px-[50px] md:px-[16px]">
            <h2 className="xl:text-[56px] text-[30px] playfair-font text-[#212121]">
              Enterprise-class data protection
            </h2>
            <h4 className="text-[32px] text-[#212121] playfair-font font-bold py-5">
              To protect your compute environment
            </h4>
            <p className="text-lg text-gray">
              NIMESA could be deployed within your cloud account as an instance
              and protect data. Without NIMESA IT admins rely on complex
              scripting to protect the data and go over manually the protected
              data to recover. NIMESA provides a policy-based protection, DR and
              single-click recovery of data.
            </p>
            <div className="flex flex-row items-center gap-4 mt-7">
              <button className="bg-blue text-white rounded-full px-12 py-3">
                Try Nimesha
              </button>
              <button className="bg-[#212121] text-white rounded-full px-12 py-3">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>

        <AwsMarketplace />
        <div className="container lg:py-12 md:py-8 py-3 m-auto px-2">
          <h2 className="md:text-[56px] text-4xl text-center playfair-font py-5 md:mb-8">
            NIMESHA use cases
          </h2>
          <p className="text-center xl:w-[40%] lg:w-[60%] mx-auto">
            Discover the power, flexibility, and security of our cloud platform,
            designed to support your business’s growth and innovation.
          </p>

          <div className="grid xl:grid-cols-3 md:grid-cols-2 mt-8 gap-8">
            {OurValueCardData.map((data, index) => (
              <OurValueCard key={index} {...data} />
            ))}
          </div>
        </div>
        <div className="bg-[#F8F8F9] flex flex-col gap-8">
          <div className="flex flex-col container mx-auto justify-center p-8 bg-white shadow rounded-3xl">
            <div className="flex flex-row items-center mb-6 gap-4">
              <img src="/assets/images/product/environment.svg" />
              <h1 className="text-[22px] font-bold">Environment Replication</h1>
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
          <div className="flex flex-col container mx-auto justify-center p-8 bg-white shadow rounded-3xl">
            <div className="flex flex-row items-center mb-6 gap-4">
              <img src="/assets/images/product/data.svg" />
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
          <div className="flex flex-col container mx-auto justify-center p-8 bg-white shadow rounded-3xl">
            <div className="flex flex-row items-center mb-6 gap-4">
              <img src="/assets/images/product/testing.svg" />
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
          <div className="flex flex-col container mx-auto justify-center p-8 bg-white shadow rounded-3xl">
            <div className="flex flex-row items-center mb-6 gap-4">
              <img src="/assets/images/product/Ransomware.svg" />
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
        </div>
        <FreeTrial />
      </div>
    </div>
  );
}

export default index;
