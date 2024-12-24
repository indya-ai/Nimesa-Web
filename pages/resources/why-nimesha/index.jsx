import Card from "@/components/cloud-edition/Card";
import Banner from "@/components/common/Banner";
import FreeTrial from "@/components/demo/FreeTrial";
import OurValueCard from "@/components/solution/OurValueCard";

function index() {
  const data = [
    {
      title: "Simple",
      imageSrc: "/assets/images/why-nimesha/sample.svg",
      details:
        "Simple to deploy no additional hardware requirement. Software-only solution to manage all the use cases.",
    },
    {
      title: "Cost Effective",
      imageSrc: "/assets/images/why-nimesha/money.svg",
      details:
        "Leverage existing primary storage capabilities. No hardware requirements, software licenses. Easy to manage.",
    },
    {
      title: "Policy-Driven",
      imageSrc: "/assets/images/why-nimesha/privacy-policy.svg",
      details:
        "Simple management. Policy-driven operations for Backup, DR automation and Test and Dev workloads.",
    },
  ];
  const OurValueCardData = [
    {
      title: "Test and Dev",
      imageSrc: "/assets/images/why-nimesha/work-and-dev.svg",
      detail: [
        "Most of the time test and dev loose time in bringing up the infrastructure and copy of the data from backup.  NIMESA helps you to bring the complete infrastructure instantly at zero  cost.",
      ],
    },
    {
      title: "Analytics",
      imageSrc: "/assets/images/why-nimesha/analytics.svg",
      detail: [
        "Traditional backup software uses lot of time to bring up the  environment. NIMESA with efficient integration with storage snapshot  technology brings up the data for analytics workloads instantly.",
      ],
    },
    {
      title: "Automated Copy Management",
      imageSrc: "/assets/images/why-nimesha/setting.svg",
      detail: [
        "Without NIMESA customers would have to  write their own scripts to manage copies periodically. NIMESA offers  policy-based copy management that improves IT management with reduced cost on OPEX.",
      ],
    },
  ];
  return (
    <div>
      <Banner title="Why NIMESHA" imageUrl="/assets/images/banner.svg" />
      <div className="md:py-[100px] py-[50px] px-1">
        <div className="container m-auto grid md:grid-cols-2 items-center">
          <div className="lg:px-[60px]">
            <h2 className="text-[56px] playfair-font text-[#212121]">
              Who we are?
            </h2>
            <p className="text-[18px] text-gray pt-2">
              NIMESA is a data virtualization and management solution which can
              transform various data center operations and can bring significant
              OPEX and CAPEX savings for use cases such as Cloud Data
              Backup\Recovery, Cloud Data Protection, Flat File backup, Test and
              Dev, Analytics, cloud migration, as a Test Data Management Tools,
              DR, etc.
            </p>
            <p className="text-[18px] mt-3 text-gray">
              Traditional backup solutions are slow, inefficient and generally,
              they have client server architecture where agents are installed in
              all the hosts and copy happens from there to the backup server.
              Backups are stressful to the servers and restore RTOs are in
              hours. NIMESA efficiently integrates with primary storage to
              provide instant application-aware backups without putting stress
              on the hosts. With efficient storage integration, NIMESA can
              achieve RTOs in &lt; 15min and RPOs to a min.
            </p>
          </div>
          <div>
            <div className="container mx-auto grid grid-cols-1 mt-8 gap-8">
              {data.map((data, index) => (
                <Card detail={true} key={index} {...data} />
              ))}
            </div>
          </div>
        </div>
        <div className="pt-24 md:py-[100px] container m-auto">
          <h2 className="md:text-[56px] text-4xl text-center playfair-font">
            Our approach
          </h2>
          <p className="text-center xl:w-[65%] text-gray lg:w-[80%] mx-auto md:mt-16 mt-8">
            Unlike traditional backup solutions where backups are used only for
            restores, NIMESA makes your backup productive by enabling to support
            multiple use cases. In a datacenter for every backup, there are
            around 8-10 copies made. NIMESA gives insight into the copies and
            reduces cost by associating expiry to the copies.
          </p>
        </div>
        <div className="container m-auto grid md:grid-cols-2 my-8 gap-8">
          <div className="card flex p-[1.5px] flex-col items-center rounded-[24px] overflow-hidden">
            <div className="bg-white rounded-[24px] w-full p-12 justify-around flex flex-col h-full">
              <h2 className="xl:text-[44px] lg:text-[40px] text-[30px] text-[#212121] text-center">
                Traditional approach
              </h2>
              <img
                className="mt-8"
                src="/assets/images/why-nimesha/traditional.svg"
              />
            </div>
          </div>
          <img src="/assets/images/why-nimesha/approach.svg" />
        </div>
        <div className="bg-[#F8F8F9]">
          <div className="container lg:py-12 md:py-8 py-3 m-auto">
            <h2 className="md:text-[56px] text-4xl text-center playfair-font py-5 md:mb-8">
              We provide
            </h2>
            <p className="text-center xl:w-[40%] lg:w-[60%] mx-auto">
              Discover the power, flexibility, and security of our cloud
              platform, designed to support your business’s growth and
              innovation.
            </p>

            <div className="grid xl:grid-cols-3 md:grid-cols-2 mt-8 gap-8">
              {OurValueCardData.map((data, index) => (
                <OurValueCard style="aws-card" key={index} {...data} />
              ))}
            </div>
          </div>
        </div>
        <div className="pt-10 pb-6">
          <FreeTrial />
        </div>
      </div>
    </div>
  );
}

export default index;
