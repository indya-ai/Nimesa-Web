import Banner from "@/components/common/Banner";
import AwsMarketplace from "@/components/solution/AwsMarketplace";

function index() {
  return (
    <div>
      <Banner title="Hybrid Cloud" imageUrl="/assets/images/banner.svg" />
      <div className="bg-white lg:py-20 md:py-12 py-5">
        <div className="container md:text-start text-center lg:mb-16 items-center grid md:grid-cols-2 gap-4 px-2 m-auto">
          <img
            className="mx-auto"
            src="/assets/images/solution/hybrid/hybrid.svg"
          />
          <div className="md:mx-24">
            <h2 className="xl:text-[56px] text-[30px] playfair-font text-[#212121]">
              Implementing disaster recovery for the hybrid cloud
            </h2>
          </div>
        </div>
        <div className="bg-[#F8F8F9]">
          <div className="lg:py-20 md:py-12 py-5">
            <div className="container grid items-center md:grid-cols-2 gap-[8px] px-2 m-auto">
              <div className="xl:pr-[194px] lg:pr-[50px]">
                <h2 className="xl:text-[56px] text-[30px] playfair-font py-5 md:mb-4 text-[#212121]">
                  Why is disaster recovery planning important?
                </h2>
                <p className="text-lg text-gray">
                  Today more than ever, organizations are choosing to move
                  business critical IT workloads from traditional on-premises
                  data centers to the public cloud, and adopting hybrid cloud
                  models to operate business critical functions.
                </p>
                <p className="text-lg text-gray my-2">
                  While the public cloud can provide a great deal more
                  flexibility than a traditional data center, it is important to
                  understand that disaster recovery capability is not built-in
                  to the services offered by cloud providers like Amazon Web
                  Services. Instead, when building in the cloud, application
                  teams must explicitly implement a DR strategy themselves.
                </p>
              </div>
              <img src="/assets/images/solution/hybrid/planning.svg" />
            </div>
          </div>
        </div>
        <div className="lg:py-20 md:py-12 py-5">
          <div className="container grid items-center md:grid-cols-2 gap-[8px] px-2 m-auto">
            <img src="/assets/images/solution/hybrid/disaster.svg" />
            <div className="xl:pr-[194px] lg:pr-[50px]">
              <h2 className="xl:text-[54px] text-[30px] playfair-font py-5 md:mb-4 text-[#212121]">
                What kinds of IT disasters should i plan for?
              </h2>
              <p className="text-lg text-gray">
                IT disasters come in 2 forms: infrastructure outages and cyber
                attacks. Your disaster recovery plan should account for both,
                across both your cloud and on-prem infrastructure.
              </p>
              <p className="text-[18px] text-gray my-2">
                The first type of disaster to plan for is an infrastructure
                outage. This could be a traditional on-premises incident, such
                as a data centre fire. But an infrastructure outage can also
                occur in the public cloud, in the form of unexpected downtime of
                your cloud provider. In AWS, for example, major outages have
                happened in recent years that have cascaded across shared
                services and availability zones.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F8F9]">
          <div className="lg:py-20 md:py-12 py-5">
            <div className="container grid items-center md:grid-cols-2 gap-[8px] px-2 m-auto">
              <div className="xl:pr-[194px] lg:pr-[50px]">
                <h2 className="xl:text-[56px] text-[30px] playfair-font py-5 md:mb-4 text-[#212121]">
                  Building disaster resilience
                </h2>
                <p className="text-lg text-gray">
                  So how do you prepare for both of these scenarios in your
                  hybrid cloud environment?
                </p>
                <p className="text-lg text-gray my-2">
                  Your on-premise and cloud-hosted workloads run on independent
                  infrastructure, so in a hybrid cloud scenario, you solve for
                  infrastructure disasters independently. If your data centre
                  goes down, you must fail over to a different data centre. You
                  can also fail over to a recovery environment that is
                  provisioned in the cloud. If your public cloud infrastructure
                  goes down, you will fail over to a different part of the
                  cloud, which is usually in an alternate region to hedge
                  against the regional failure scenario outlined above.
                </p>
              </div>
              <img src="/assets/images/solution/hybrid/building.svg" />
            </div>
          </div>
        </div>
        <div className="lg:py-20 md:py-12 py-5">
          <div className="container grid items-center md:grid-cols-2 gap-[8px] px-2 m-auto">
            <img src="/assets/images/solution/hybrid/amazon-hosted.svg" />
            <div className="xl:pr-[194px] lg:pr-[50px]">
              <h2 className="xl:text-[56px] text-[30px] playfair-font py-5 md:mb-4 text-[#212121]">
                Nimesa solution makes DR for your amazon-hosted infrastructure
                easy
              </h2>
              <p className="text-lg text-gray">
                Many organizations feel daunted by disaster recovery planning
                for a hybrid cloud model. While DR for on-premises workloads is
                by now a well-understood concept, the introduction of
                cloud-native tools that make the public cloud so flexible can
                also make it an infinitely more complex environment to protect.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F8F9]">
          <div className="lg:py-20 md:py-12 py-5">
            <div className="container grid items-center md:grid-cols-2 gap-[8px] px-2 m-auto">
              <div className="xl:pr-[194px] lg:pr-[50px]">
                <h2 className="xl:text-[56px] text-[30px] playfair-font py-5 md:mb-4 text-[#212121]">
                  A single solution for hybrid clouds using AWS
                </h2>
                <p className="text-lg text-gray">
                  Because of the differences in outage and recovery types across
                  on-premises and cloud architectures, it can be difficult to
                  envision a single solution that can work across your hybrid
                  footprint.
                </p>
                <p className="text-lg text-gray my-2">
                  However, it is possible to implement a single disaster
                  recovery solution to protect your hybrid environment from both
                  types of disasters – and Nimesa can help.
                </p>
              </div>
              <img src="/assets/images/solution/hybrid/aws.svg" />
            </div>
          </div>
        </div>

        <AwsMarketplace />
      </div>
    </div>
  );
}

export default index;
