import Banner from "@/components/common/Banner";
import AwsCard from "@/components/solution/AwsCard";
import AwsMarketplace from "@/components/solution/AwsMarketplace";
import OurValueCard from "@/components/solution/OurValueCard";

function index() {
  const multipleCardData = [
    {
      title: "Amazon API Gateway",
      imageSrc: "/assets/images/solution/api-gateway.svg",
      departmentList: ["HTTP APIs", "REST APIs"],
    },
    {
      title: "Amazon aurora",
      imageSrc: "/assets/images/solution/amazon-aurora.svg",
      departmentList: [
        "Database clusters",
        "Database instances",
        "Database instances",
        "DB subnet groups",
      ],
    },
    {
      title: "Amazon certificate manager (ACM)",
      imageSrc: "/assets/images/solution/amazon-certificate.svg",
      departmentList: ["Certificates"],
    },
    {
      title: "Amazon cloud map",
      imageSrc: "/assets/images/solution/amazon-cloud.svg",
      departmentList: ["Cloud map namespaces", "Cloud map serviceso"],
    },
  ];
  const OurValueCardData = [
    {
      title: "Auto clean old backups",
      imageSrc: "/assets/images/solution/auto-clean.svg",
      detail: [
        "Policy-based instant application-aware data protection. Use native AWS APIs to protect your EC2 instances. No scripting required.o",
      ],
    },
    {
      title: "DevOps",
      imageSrc: "/assets/images/solution/devops.svg",
      detail: [
        "Accelerate Application Development / Testing. Create a test/dev environment by cloning a production environment in a matter of a Read More...",
      ],
    },
    {
      title: "DR automation",
      imageSrc: "/assets/images/solution/dr-automation.svg",
      detail: [
        "Admin can create SLA based policies to protect their Instances to different regions and accounts. Instant failover and failback testing. Read More...",
      ],
    },
    {
      title: "Reports",
      imageSrc: "/assets/images/solution/reports.svg",
      detail: [
        "Admin can generate detailed reports on protection status, are they meeting the SLAs, how many copies are there and when are the copies expiring.",
      ],
    },
    {
      title: "Supported AWS servic...",
      imageSrc: "/assets/images/solution/aws-support.svg",
      detail: [
        "Accelerate Application Development / Testing. Create a test/dev environment by cloning a production environment in a matter of a Read More...",
      ],
    },
  ];
  return (
    <div>
      <Banner title="AWS Services" imageUrl="/assets/images/banner.svg" />
      <div className="bg-white lg:py-20 md:py-12 py-5">
        <div className="container lg:mb-16 lg:items-center items-center grid md:grid-cols-2 md:gap-0 gap-4 px-2 m-auto">
          <img className="mx-auto" src="/assets/images/solution/solution.svg" />
          <div className="md:mx-4">
            <h2 className="text-[56px] playfair-font">Solution</h2>
            <p className="text-lg my-5">
              NIMESA is a data protection and copy data management solution
              built for AWS EC2 instances, RDS, Load Balancers, S3 and more… It
              is available as an AMI that can be securely run as an EC2 instance
              within your AWS account.
            </p>
            <p className="text-lg">
              It can transform various data center operations and can bring
              significant OPEX savings for use cases such as backup\recovery,
              Test & Dev, Analytics, application rollouts, DR, etc… It provides
              well-defined policy-based backup, instant restore, and the clone
              of your EC2 instances. It also manages AWS EC2 instances backup
              automation, AWS EC2 instances restore, AWS EC2 instances clone
              from multiple AWS accounts securely.
            </p>
          </div>
        </div>
        <div className="bg-[#F8F8F9]">
          <div className="container lg:py-16 md:py-8 py-3 m-auto px-2">
            <h2 className="md:text-[56px] text-4xl text-center playfair-font py-5 md:mb-8">
              Our services
            </h2>
            <p className="text-center xl:w-[40%] lg:w-[60%] mx-auto">
              Your AWS environment is a complex system that you’ve deftly
              crafted to meet the needs of your applications.{" "}
            </p>

            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-8">
              {multipleCardData.map((card, index) => (
                <AwsCard key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
        <div className="container lg:py-12 md:py-8 py-3 m-auto px-2">
          <h2 className="md:text-[56px] text-4xl text-center playfair-font py-5 md:mb-8">
            Our value
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
      <AwsMarketplace/>
      </div>
    </div>
  );
}

export default index;
