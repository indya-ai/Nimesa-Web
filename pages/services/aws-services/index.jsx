import Banner from "@/components/common/Banner";

function index() {
  return (
    <div>
      <Banner title="AWS Services" imageUrl="/assets/images/banner.svg" />
      <div className="bg-white lg:py-20 md:py-12 py-5">
        <div className="container grid md:grid-cols-2 md:gap-0 gap-4 px-2 m-auto">
          <img className="mx-auto" src="/assets/images/solution/solution.svg" />
          <div className="mx-4">
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
            <p className="text-center w-[40%] mx-auto">
              Your AWS environment is a complex system that you’ve deftly
              crafted to meet the needs of your applications.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
