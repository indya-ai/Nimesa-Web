import Banner from "@/components/common/Banner";
import AwsMarketplace from "@/components/solution/AwsMarketplace";

function index() {
  return (
    <div>
      <Banner title="Healthcare" imageUrl="/assets/images/banner.svg" />
      <div className="bg-white lg:py-20 md:py-12 py-5">
        <div className="container md:text-start text-center lg:mb-16 items-center grid md:grid-cols-2 gap-4 px-2 m-auto">
          <img
            className="mx-auto"
            src="/assets/images/solution/healthcare/healthcare.svg"
          />
          <div className="md:mx-4">
            <h2 className="xl:text-[56px] text-[30px] playfair-font">
              Disaster and data recovery for healthcare
            </h2>
            <p className="text-lg my-5">
              Building Resilience for Regulated Organizations in AWS
              Environments
            </p>
          </div>
        </div>
        <div className="bg-[#F8F8F9] relative ">
          <div className="container lg:py-16 md:py-8 py-3 m-auto px-2">
            <h2 className="xl:text-[56px] text-[30px] text-center playfair-font py-5 md:mb-8">
              The Nimesa Difference
            </h2>
            <p className="text-center xl:w-[40%] lg:w-[60%] mx-auto">
              Nimesa is the only disaster recovery solution that is engineered
              for the unique requirements of applications running in AWS.
            </p>

            <div className="container mt-16 border border-[#3432CA] rounded-xl xl:p-8 p-4 lg:mb-16 items-center grid lg:grid-cols-2 md:gap-0 gap-4 m-auto">
              <div className="md:mx-12 lg:mt-0 mt-5">
                <h2 className="text-[24px] mb-3 playfair-font">
                  With <span className="font-light">Nimesa,</span> disaster and
                  data recovery for healthcare providers includes:
                </h2>
                <ul className="list-disc space-y-2 text-lg text-gray">
                  <li>
                    Automated cross-region and cross-account disaster and data
                    recovery for healthcare and healthcare solution providers
                  </li>
                  <li>
                    Support for organizational HIPAA, HITRUST, ISO-27001 and SOC
                    2 compliance requirements
                  </li>
                  <li>
                    An innovative security model ensuring patient data never
                    leaves your environment. No business associate agreement
                    (BAA) is required because Nimesa does not have access to
                    your data
                  </li>
                  <li>
                    Real-time recovery point objectives ensuring no data is lost
                    during a recovery
                  </li>
                  <li>
                    Recovery times measured in minutes, so you can rapidly
                    restore operations following any outage event
                  </li>
                </ul>
              </div>
              <img
                className="lg:mr-0 mx-auto lg:w-auto w-full"
                src="/assets/images/solution/healthcare/recovery-healthcare.svg"
              />
            </div>
          </div>
          <img
            className="absolute bottom-[-50px] left-0"
            src="/assets/images/solution/healthcare/image.svg"
          />
        </div>
        <div className="lg:py-20 md:py-12 py-5">
          <div className="container grid items-center md:grid-cols-2 gap-[4px] px-2 m-auto">
            <img src="/assets/images/solution/healthcare/cloud-computing.svg" />
            <div className="">
              <h2 className="xl:text-[56px] text-[30px] playfair-font py-5 md:mb-8 text-[#212121]">
                What does it mean?
              </h2>
              <p className="text-lg text-gray">
                With Nimesa, you can quickly achieve compliance, and ensure that
                your healthcare workloads are protected from data loss and
                downtime, so that you and your organization can keep your focus
                on the initiatives that maximize the quality of patient care.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F8F9]">
          <div className="container lg:py-16 md:py-8 py-3 m-auto px-2 text-center lg:w-[70%] md:w-[85%]">
            <h3 className="md:text-[32px] text-2xl text-center playfair-font py-5 md:mb-8">
              The rigorous compliance requirements of healthcare and HIT
              providers demand that your technology environments are prepared
              for any data-loss or downtime event.
            </h3>
            <p className="text-gray text-lg">
              For those running applications in AWS, the shared responsibility
              model makes it clear that you are accountable for protecting
              patient data, preparing for disasters, and the overall business
              continuity of your healthcare operations.
            </p>
            <p className="text-gray py-3 text-lg">
              This can feel daunting, but Nimesa can help. Our software
              automates the native capabilities of AWS to help you quickly meet
              the disaster recovery requirements of HIPAA, HITRUST, and other
              compliance regimes.
            </p>
            <p className="text-gray text-lg">
              Nimesa is the easiest way to ensure that your AWS-hosted
              healthcare workloads are compliant and protected from data loss,
              ransomware, and cloud-platform downtime.
            </p>
          </div>
        </div>
        <AwsMarketplace />
      </div>
    </div>
  );
}

export default index;
