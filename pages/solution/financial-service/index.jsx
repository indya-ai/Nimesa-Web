import Banner from "@/components/common/Banner";
import AwsMarketplace from "@/components/solution/AwsMarketplace";

function index() {
  return (
    <div>
      <Banner title="Financial" imageUrl="/assets/images/banner.svg" />
      <div className="bg-white md:py-[100px] py-[50px]">
        <div className="container md:text-start text-center lg:mb-16 items-center grid md:grid-cols-2 gap-4 px-1 m-auto">
          <img
            className="mx-auto"
            src="/assets/images/solution/financial/financial-service.svg"
          />
          <div className="md:mx-4">
            <h2 className="xl:text-[56px] text-[30px] playfair-font">
              Disaster And Data Recovery For Financial
            </h2>
            <p className="text-lg my-5">
              Nimesa is the only disaster recovery solution that is engineered
              for the unique requirements of AWS workloads.
            </p>
          </div>
        </div>
        <div className="bg-[#F8F8F9] relative ">
          <div className="container lg:py-16 md:py-8 py-3 m-auto px-1">
            <h2 className="xl:text-[56px] text-[30px] text-center playfair-font py-5 md:mb-8">
              The Nimesa Difference
            </h2>
            <p className="text-center xl:w-[40%] lg:w-[60%] mx-auto">
              Nimesa is the only disaster recovery solution that is engineered
              for the unique requirements of applications running in AWS.
            </p>

            <div className="container mt-16 border border-[#3432CA] rounded-xl xl:p-8 md:p-4 p-6 lg:mb-16 items-center grid lg:grid-cols-2 md:gap-0 gap-4 m-auto">
              <div className="md:mx-12 lg:mt-0 mt-5">
                <h2 className="text-[24px] mb-3 playfair-font">
                  With <span className="font-light">Nimesa,</span> disaster and
                  data recovery for financial providers includes:
                </h2>
                <ul className="list-disc space-y-2 text-lg text-gray">
                  <li>
                    Automated cross-region and cross-account disaster and data
                    recovery for financial and financial solution providers
                  </li>
                  <li>
                    Support for FINRA, PCI, DFS and SOC 2 compliance
                    requirements
                  </li>
                  <li>
                    An innovative security model ensuring user data never leaves
                    your environment
                  </li>
                  <li>
                    Real-time recovery point objectives ensuring no data is lost
                    during a recovery, meaning you will never lose a transaction
                  </li>
                  <li>
                    Recovery times measured in minutes, so you can rapidly
                    restore operations following any outage event
                  </li>
                </ul>
              </div>
              <img
                className="lg:mr-0 mx-auto lg:w-auto w-full"
                src="/assets/images/solution/financial/provider.svg"
              />
            </div>
          </div>
          <img
            className="absolute bottom-[-50px] left-0"
            src="/assets/images/solution/healthcare/image.svg"
          />
        </div>
        <div className="lg:py-20 md:py-12 py-5">
          <div className="container grid items-center md:grid-cols-2 gap-[4px] px-1 m-auto">
            <img src="/assets/images/solution/financial/cloud-computing.svg" />
            <div className="lg:px-[50px] md:px-[16px]">
              <h2 className="xl:text-[56px] text-[30px] playfair-font py-5 md:mb-8 text-[#212121]">
                What does it mean?
              </h2>
              <p className="text-lg text-gray">
                Nimesa AWS disaster recovery process provides financial services
                organizations with the power to rest easy knowing that they can
                recover rapidly from disruptive events such as cyberattacks,
                software misconfigurations, bad deployments, and other disaster
                scenarios that could cost millions of dollars in lost revenue
                and potential liability.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F8F9]">
          <div className="container lg:py-16 md:py-8 py-3 m-auto px-1 text-center lg:w-[75%] md:w-[85%]">
            <h3 className="md:text-[32px] text-2xl text-center playfair-font py-5 md:mb-12">
              Today’s financial institutions must deliver a reliable, secure,
              first class customer experience across their digital properties.
            </h3>
            <p className="text-gray text-lg">
              For those running applications in AWS, the shared responsibility
              model makes it clear that you are accountable for protecting
              patient data, preparing for disasters, and the overall business
              continuity of your financial operations.
            </p>
            <p className="text-gray py-3 text-lg">
              For many financial companies, this means running in the cloud. But
              with rigid compliance requirements to meet and a large target on
              their backs for cyber attacks, a shift to the cloud brings new
              risks.  It is imperative for financial institutions to safeguard
              their cloud workloads from catastrophic downtime and malicious
              actors, and avoid a data breach, which cost an average of $5.72
              million in 2021.
            </p>
            <p className="text-gray text-lg">
              Navigating this landscape can be daunting, but it doesn’t have to
              be. Nimesa makes overcoming these hurdles easy. With just a few
              minutes of implementation, Nimesa can securely automate the backup
              and recovery of entire cloud applications, ensuring that your
              customer data and transactions are protected and insulated from
              the unexpected.
            </p>
          </div>
        </div>
        <AwsMarketplace />
      </div>
    </div>
  );
}

export default index;
