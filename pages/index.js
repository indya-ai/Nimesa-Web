import NimesaAws from "@/components/home/NimesaAws";
import WhyNimesa from "@/components/home/WhyNimesa";
import AwsMarketplace from "@/components/solution/AwsMarketplace";

export default function Home() {
  return (
    <>
      <div>
        <div className="max-w-[1920px] px-8 m-auto">
          <h4 className="text-center text-[22px] text-[#212121]">
            Trusted by world-class DevOps teams
          </h4>
        </div>
        <div className="flex flex-row py-6 justify-between items-center gap-4">
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
            "freecharge",
          ].map((imageName, index) => (
            <img
              key={index}
              src={`/assets/images/home/${imageName}.svg`}
              alt={imageName}
              className="h-auto w-auto" // Adjust as needed
            />
          ))}
        </div>
        <div className="container grid items-center lg:grid-cols-2 pb-16 gap-[8px] px-2 m-auto">
          <img className=" m-auto w-full" src="/assets/images/home/image.svg" />
          <div className="xl:px-[50x] lg:px-[25px] md:px-[16px]">
            <h2 className="xl:text-[56px] pr-16 md:text-left text-center md:text-[40px] text-[32px] playfair-font text-[#212121]">
              Supported AWS services
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
              <button className="border text-gray rounded-full md:px-12 px-5 py-2.5 border-[#212121] cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#F3F6F9] py-12 relative">
          <div className="lg:py-12 md:py-8 py-3 m-auto px-2">
            <h2 className="md:text-[56px] text-4xl text-center playfair-font py-5 md:mb-8">
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
        <AwsMarketplace />
        <div className="bg-[#F3F6F9] py-12 relative">
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
        <div className="py-16">
          <img src="/assets/images/home/image-3.svg" className="mx-auto" />
        </div>
        <h3 className="xl:text-[56px] text-center md:text-[40px] text-[32px] playfair-font text-[#212121]">
          Complete environment disaster recovery
        </h3>
        <p className="text-gray w-[50%] text-center mx-auto">
          NIMESA vision is to enable availability of critical data to various
          stakeholders with unmatchable efficiency and SLAs.
        </p>
        <div className="container grid items-center py-8 lg:grid-cols-2 gap-[8px] px-2 m-auto">
          <div className="xl:pr[60px] lg:pr-[25px] md:pr-[16px]">
            <h2 className="xl:text-[56px] md:text-left text-center md:text-[40px] text-[32px] playfair-font text-[#212121]">
              Cross region DR
            </h2>

            <p className="text-lg md:text-left text-center text-gray">
              Automatically protect your Instance using one time configuration
              using user defined SLA policies and schedulers. Safeguard your
              data and applications effortlessly with our Automated Protection
              features.
            </p>
          </div>
          <img className=" m-auto w-full" src="/assets/images/home/cross.svg" />
        </div>
        <div className="container grid items-center py-8 lg:grid-cols-2 gap-[8px] px-2 m-auto">
          <img className=" m-auto w-full" src="/assets/images/home/air.svg" />
          <div className="xl:px-[60px] lg:px-[25px] md:px-[16px]">
            <h2 className="xl:text-[56px] md:text-left text-center md:text-[40px] text-[32px] playfair-font text-[#212121]">
              Air-gapped cross account DR
            </h2>

            <p className="text-lg md:text-left text-center text-gray">
              High Performance, Efficient backups taken on scheduled time using
              cloud native technologies like EBS Snapshots. Protect your
              valuable data with our Efficient Backup solution, designed for
              speed, reliability, and minimal resource usage.
            </p>
          </div>
        </div>
        <div className="container grid items-center py-8 lg:grid-cols-2 gap-[8px] px-2 m-auto">
          <div className="xl:pr-[60px] lg:pr-[25px] md:pr-[16px]">
            <h2 className="xl:text-[56px] md:text-left text-center md:text-[40px] text-[32px] playfair-font text-[#212121]">
              Flexible RPO, near zero configuration to
            </h2>
            <h4 className="lg:text-[32px] md:text-left text-center text-[24px] text-[#212121] playfair-font font-bold py-5">
              15 minutes ROP based on needs
            </h4>
            <p className="text-lg md:text-left text-center text-gray">
              Nimesa provide instant granular restores such as files, Databases,
              EC2, VPCs or complete applications. Get back to business fast with
              Instant Restore, our rapid recovery solution designed to minimize
              downtime.
            </p>
          </div>
          <img className=" m-auto w-full" src="/assets/images/home/zero.svg" />
        </div>
        <div className="container grid items-center py-8 lg:grid-cols-2 gap-[8px] px-2 m-auto">
          <img
            className=" m-auto w-full"
            src="/assets/images/home/driven.svg"
          />
          <div className="xl:px-[60px] lg:px-[25px] md:px-[16px]">
            <h2 className="xl:text-[56px] md:text-left text-center md:text-[40px] text-[32px] playfair-font text-[#212121]">
              Centralized policy driven management
            </h2>

            <p className="text-lg md:text-left text-center text-gray">
              Accelerate Application Development / Testing. Create a test/dev
              environment by cloning a production environment in a matter of few
              seconds.
            </p>
          </div>
        </div>
        <div className="container grid items-center py-8 lg:grid-cols-2 gap-[8px] px-2 m-auto">
          <div className="xl:pr-[60px] lg:pr-[25px] md:pr-[16px]">
            <h2 className="xl:text-[56px] md:text-left text-center md:text-[40px] text-[32px] playfair-font text-[#212121]">
              Compliance enablement
            </h2>
            <p className="text-lg md:text-left text-center text-gray">
              Admin can generate 20+ detailed reports on DR drills, Backups,
              Clones, Restore operations, inventory lists, orphaned volumes,
              etc... Gain complete visibility into your operations with Reports,
              our powerful analytics and reporting tool.
            </p>
          </div>
          <img
            className=" m-auto w-full"
            src="/assets/images/home/enabelmen.svg"
          />
        </div>
        <div className="container grid items-center py-8 lg:grid-cols-2 gap-[8px] px-2 m-auto">
          <img
            className=" m-auto w-full"
            src="/assets/images/home/driven.svg"
          />
          <div className="xl:px-[60px] lg:px-[25px] md:px-[16px]">
            <h2 className="xl:text-[56px] md:text-left text-center md:text-[40px] text-[32px] playfair-font text-[#212121]">
              Cyber resilient
            </h2>

            <p className="text-lg md:text-left text-center text-gray">
              Admin can create SLA policies to manage both primary and secondary
              snapshots and use them to clone instantly in DR environment.
              Customize recovery workflows and automate testing to validate your
              recovery plans without disrupting daily operations.
            </p>
          </div>
        </div>
        <div className="container grid items-center py-8 lg:grid-cols-2 gap-[8px] px-2 m-auto">
          <div className="xl:pr-[60px] lg:pr-[25px] md:pr-[16px]">
            <h2 className="xl:text-[56px] md:text-left text-center md:text-[40px] text-[32px] playfair-font text-[#212121]">
              Agentless solution
            </h2>
            <p className="text-lg md:text-left text-center text-gray">
              Admin can generate 20+ detailed reports on DR drills, Backups,
              Clones, Restore operations, inventory lists, orphaned volumes,
              etc... Gain complete visibility into your operations with Reports,
              our powerful analytics and reporting tool.
            </p>
          </div>
          <img
            className=" m-auto w-full"
            src="/assets/images/home/solution.svg"
          />
        </div>
        <div className="container grid items-center py-8 lg:grid-cols-2 gap-[8px] px-2 m-auto">
          <img
            className=" m-auto w-full"
            src="/assets/images/home/driven.svg"
          />
          <div className="xl:px-[60px] lg:px-[25px] md:px-[16px]">
            <h2 className="xl:text-[56px] md:text-left text-center md:text-[40px] text-[32px] playfair-font text-[#212121]">
              No vendor lock-in
            </h2>

            <p className="text-lg md:text-left text-center text-gray">
              Admin can create SLA policies to manage both primary and secondary
              snapshots and use them to clone instantly in DR environment.
              Customize recovery workflows and automate testing to validate your
              recovery plans without disrupting daily operations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
