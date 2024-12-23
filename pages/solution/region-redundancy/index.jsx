import Banner from "@/components/common/Banner";
import AwsMarketplace from "@/components/solution/AwsMarketplace";

function index() {
  return (
    <div>
      <Banner
        title="Multi-Region Redundancy"
        imageUrl="/assets/images/banner.svg"
      />
      <div className="bg-white md:py-[100px] py-[50px]">
        <div className="container md:text-start text-center lg:mb-16 mb-6 items-center grid md:grid-cols-2 gap-4 px-2 m-auto">
          <img
            className="mx-auto"
            src="/assets/images/solution/multi-region/multi-region.svg"
          />
          <div className="md:mx-20">
            <h2 className="xl:text-[56px] text-[30px] playfair-font text-[#212121]">
              Comprehensive Multi-Region Redundancy For AWS
            </h2>
          </div>
        </div>
        <div className="bg-[#F8F8F9]">
          <div className="lg:py-20 md:py-12 py-5">
            <div className="container grid items-center md:grid-cols-2 gap-[8px] px-2 m-auto">
              <div className="lg:px-[50px] md:px-[16px]">
                <h2 className="xl:text-[56px] text-[30px] playfair-font py-5 md:mb-4 text-[#212121]">
                  Complex cloud architectures introduce complex cloud disasters
                </h2>
                <p className="text-lg text-gray">
                  While the cloud offers more flexibility and compute power than
                  ever before, it also introduces much more complexity than a
                  traditional environment hosted in the data center. An
                  application built in AWS depends on scores of individual
                  managed services to run just one business critical function.
                  And if just one of those services goes down, the effects could
                  cascade across the entire environment. 
                </p>
              </div>
              <img className="w-full" src="/assets/images/solution/multi-region/complex-cloud.svg" />
            </div>
          </div>
        </div>
        <div className="lg:py-20 md:py-12 py-5">
          <div className="container grid items-center md:grid-cols-2 gap-[8px] px-2 m-auto">
            <img className="w-full" src="/assets/images/solution/ransomware/protected.svg" />
            <div className="lg:px-[50px] md:px-[16px]">
              <h2 className="xl:text-[54px] text-[30px] playfair-font py-5 md:mb-4 text-[#212121]">
                High availability and geographic redundancy
              </h2>
              <p className="text-lg text-gray">
                Amazon has organized its cloud infrastructure into 24 geographic
                ‘regions’ that are located all over the world. Every region
                comprises 3-6 ‘availability zones,’ each of which maps to one or
                more distinct data centers that Amazon operates.
              </p>
              <p className="text-[18px] text-gray my-2">
                When thinking about geographic resilience for AWS workloads, the
                first step most teams take is architecting their applications to
                run across more than one availability zone within a single
                region. This approach provides a high availability solution to
                traditional data center failures like power outages and fires. 
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F8F9]">
          <div className="lg:py-20 md:py-12 py-5">
            <div className="container grid items-center md:grid-cols-2 gap-[8px] px-2 m-auto">
              <div className="lg:px-[50px] md:px-[16px]">
                <h2 className="xl:text-[56px] text-[30px] playfair-font py-5 md:mb-4 text-[#212121]">
                  Easy, cost-effective cross-region replication for all of your
                  AWS services
                </h2>
                <p className="text-lg text-gray">
                  In the past, businesses desiring a multi-region solution for
                  DR on AWS had to build it themselves, which can be a long and
                  costly endeavor. Nimesa solves this problem by providing
                  multi-region backup and recovery capabilities ‘out of the box’
                  for a broad range of AWS services. 
                </p>
              </div>
              <img className="w-full" src="/assets/images/solution/multi-region/geographic.svg" />
            </div>
          </div>
        </div>
        <div className="lg:py-20 md:py-12 py-5">
          <div className="container grid items-center md:grid-cols-2 gap-[8px] px-2 m-auto">
            <img className="w-full" src="/assets/images/solution/multi-region/cloud.svg" />
            <div className="lg:px-[50px] md:px-[16px]">
              <h2 className="xl:text-[56px] text-[30px] playfair-font py-5 md:mb-4 text-[#212121]">
                Purpose built for the cloud
              </h2>
              <p className="text-lg text-gray">
                AWS’s vast library of managed services introduces an arsenal of
                powerful new tools for the cloud developer, however those
                services aren’t always consistent or straightforward with how to
                recover them in the event of a disaster. 
              </p>
              <p className="text-lg text-gray my-2">
                Luckily, Nimesa builds on AWS’s APIs to deliver the best
                practice for your multi-region recovery, regardless of the
                collection of services you are using. Our software knits
                together all of AWS’s capabilities into one seamless
                orchestration tool, while Nimesa team of cloud engineers ensures
                that our solution always stays on the cutting edge of AWS’s
                capabilities. 
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F8F9]">
          <div className="lg:py-20 md:py-12 py-5">
            <div className="container grid items-center md:grid-cols-2 gap-[8px] px-2 m-auto">
              <div className="lg:px-[50px] md:px-[16px]">
                <h2 className="xl:text-[56px] text-[30px] playfair-font py-5 md:mb-4 text-[#212121]">
                  Balancing cost with time to recovery
                </h2>
                <p className="text-lg text-gray">
                  Nimesa is also the only solution that provides multi-region
                  disaster recovery for your entire workload, not simply your
                  data. In the case of regional downtime, you can use Nimesa to
                  quickly and easily recover your infrastructure and data into
                  an alternate region with just the click of a button. 
                </p>
                <p className="text-lg text-gray my-2">
                  Nimesa pilot-light recovery model keeps critical resources at
                  the ready in your recovery region, so you can spin them up
                  quickly in the case of a regional outage. Unlike the more
                  costly active-active model, this approach optimizes recovery
                  time and cost, ensuring you can recover quickly, but are never
                  paying for idling resources you aren’t using. 
                </p>
              </div>
              <img className="w-full" src="/assets/images/solution/multi-region/balancing.svg" />
            </div>
          </div>
        </div>
        <div className="lg:py-20 md:py-12 py-5">
          <div className="container grid items-center md:grid-cols-2 gap-[8px] px-2 m-auto">
            <img className="w-full" src="/assets/images/solution/multi-region/work-load.svg" />
            <div className="lg:px-[50px] md:px-[16px]">
              <h2 className="xl:text-[56px] text-[30px] playfair-font py-5 md:mb-4 text-[#212121]">
                Support for all workload types
              </h2>
              <p className="text-lg text-gray">
                There is no need to retrofit your legacy applications for
                disaster recovery in AWS. Nimesa natively supports all flavours
                of AWS environment – virtualized, containerized, serverless
                workloads – as well as all of the managed services they depend
                on. No matter what your AWS environment looks like, it can
                easily be protected with Nimesa.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F8F9]">
          <div className="lg:py-20 md:py-12 py-5">
            <div className="container grid items-center md:grid-cols-2 gap-[8px] px-2 m-auto">
              <div className="lg:px-[50px] md:px-[16px]">
                <h2 className="xl:text-[56px] text-[30px] playfair-font py-5 md:mb-4 text-[#212121]">
                  Nimesa is the easiest way to achieve multi-region redundancy
                </h2>
                <p className="text-lg text-gray">
                  As we’ve outlined, implementing a multi-AZ architecture in AWS
                  is not enough to achieve true disaster resilience. Regional
                  outages do happen, and in those cases, it is important to be
                  able to recover your business critical applications to an
                  alternate region.
                </p>
              </div>
              <img className="w-full" src="/assets/images/solution/multi-region/region.svg" />
            </div>
          </div>
        </div>
        <AwsMarketplace />
      </div>
    </div>
  );
}

export default index;
