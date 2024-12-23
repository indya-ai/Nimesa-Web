import Banner from "@/components/common/Banner";
import AwsCard from "@/components/solution/AwsCard";
import AwsMarketplace from "@/components/solution/AwsMarketplace";
import OurValueCard from "@/components/solution/OurValueCard";

function index() {
 const multipleCardData = [
   {
     title: "Amazon API gateway",
     imageSrc: "/assets/images/solution/api-gateway.svg",
     departmentList: ["HTTP APIs", "REST APIs"],
   },
   {
     title: "Amazon aurora",
     imageSrc: "/assets/images/solution/amazon-aurora.svg",
     departmentList: [
       "Database clusters",
       "Database instances",
       "DB parameter groups",
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
     departmentList: ["Cloud map namespaces", "Cloud map services"],
   },
   {
     title: "Amazon cloud watch",
     imageSrc: "/assets/images/solution/amazon-cloud-watch.svg",
     departmentList: ["Cloud watch alarms"],
   },
   {
     title: "Amazon cognito",
     imageSrc: "/assets/images/solution/amazon-cognito.svg",
     departmentList: [
       "Cognito user pool clients",
       "Cognito identity providers",
     ],
   },
   {
     title: "Amazon dynamoDB",
     imageSrc: "/assets/images/solution/amazon-dynamodb.svg",
     departmentList: ["DynamoDB tables"],
   },
   {
     title: "Amazon elastiCache",
     imageSrc: "/assets/images/solution/amazon-elasticache.svg",
     departmentList: [
       "Cache clusters",
       "Replication groups",
       "Parameter groups",
       "Subnet groups",
     ],
   },
   {
     title: "AWS elastic beanstalk",
     imageSrc: "/assets/images/solution/aws-elastic-beanstalk.svg",
     departmentList: [
       "Elastic beanstalk applications",
       "Elastic beanstalk application versions",
     ],
   },
   {
     title: "Amazon elastic compute cloud (EC2)",
     imageSrc: "/assets/images/solution/amazon-ec2.svg",
     departmentList: ["Amazon machine images"],
   },
   {
     title: "Amazon elastic container registry (ECR)",
     imageSrc: "/assets/images/solution/amazon-ecr.svg",
     departmentList: ["ECR repositories"],
   },
   {
     title: "Amazon elastic container service (ECS)",
     imageSrc: "/assets/images/solution/amazon-ecs.svg",
     departmentList: ["ECS clusters"],
   },
   {
     title: "Amazon elastic file system (EFS)",
     imageSrc: "/assets/images/solution/amazon-efs.svg",
     departmentList: ["EFS file systems", "EFS access points"],
   },
   {
     title: "Amazon elastic kubernetes service (EKS)",
     imageSrc: "/assets/images/solution/amazon-eks.svg",
     departmentList: ["EKS clusters", "EKS addons"],
   },
   {
     title: "Amazon elastic load balancing (ELB)",
     imageSrc: "/assets/images/solution/amazon-elb.svg",
     departmentList: ["Classic load balancers", "Application load balancers"],
   },
   {
     title: "Amazon event bridge",
     imageSrc: "/assets/images/solution/amazon-event-bridge.svg",
     departmentList: ["Event bridge event buses", "Event bridge rules"],
   },
   {
     title: "Amazon FSx",
     imageSrc: "/assets/images/solution/amazon-fsx.svg",
     departmentList: ["Amazon FSx for windows File servers"],
   },
   {
     title: "AWS identity and access management",
     imageSrc: "/assets/images/solution/aws-iam.svg",
     departmentList: ["IAM roles", "IAM managed policies", "Instance profiles"],
   },
   {
     title: "AWS lambda",
     imageSrc: "/assets/images/solution/aws-lambda.svg",
     departmentList: [
       "Lambda functions",
       "Lambda function versions",
       "Lambda function aliases",
       "Lambda layers",
     ],
   },
   {
     title: "Amazon open search",
     imageSrc: "/assets/images/solution/amazon-opensearch.svg",
     departmentList: ["Open search domains", "Elastic search domains"],
   },
   {
     title: "Amazon relational database service (RDS)",
     imageSrc: "/assets/images/solution/amazon-rds.svg",
     departmentList: ["Database instances", "DB option groups"],
   },
   {
     title: "Amazon route 53",
     imageSrc: "/assets/images/solution/amazon-route53.svg",
     departmentList: ["Private hosted zones"],
   },
   {
     title: "AWS secrets manager",
     imageSrc: "/assets/images/solution/aws-secrets-manager.svg",
     departmentList: ["Secrets"],
   },
   {
     title: "Amazon simple notification service (SNS)",
     imageSrc: "/assets/images/solution/amazon-sns.svg",
     departmentList: ["SNS topics"],
   },
  {
    title: "Amazon simple storage service (S3)",
    imageSrc: "/assets/images/solution/amazon-s3.svg",
    departmentList: [
      "S3 buckets"
    ],
  },
  {
    title: "Amazon simple queue service (SQS)",
    imageSrc: "/assets/images/solution/amazon-sqs.svg",
    departmentList: [
      "SQS queues"
    ],
  },
  {
    title: "AWS systems manager",
    imageSrc: "/assets/images/solution/aws-systems-manager.svg",
    departmentList: [
      "Parameter values"
    ],
  },
  {
    title: "Amazon virtual private cloud (VPC)",
    imageSrc: "/assets/images/solution/amazon-vpc.svg",
    departmentList: [
      "DHCP options",
      "Internet gateways"
    ],
  },
  {
    title: "AWS web application firewall (WAF)",
    imageSrc: "/assets/images/solution/aws-waf.svg",
    departmentList: [
      "Web ACLs"
    ],
  }
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
      title: "Supported AWS Services",
      imageSrc: "/assets/images/solution/aws-support.svg",
      detail: [
        "Accelerate Application Development / Testing. Create a test/dev environment by cloning a production environment in a matter of a Read More...",
      ],
    },
  ];
  return (
    <div>
      <Banner title="AWS Services" imageUrl="/assets/images/banner.svg" />
      <div className="bg-white md:py-[100px] py-[50px]">
        <div className="container lg:mb-16 lg:items-center items-center grid md:grid-cols-2 md:gap-0 gap-4 px-1 m-auto">
          <img className="mx-auto" src="/assets/images/home/solution.png" />
          <div className="md:mx-4">
            <h2 className="text-[56px] playfair-font md:text-start text-center">Solution</h2>
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
          <div className="container lg:py-16 md:py-8 py-3 m-auto px-1">
            <h2 className="md:text-[56px] text-4xl text-center playfair-font py-5 md:mb-8">
              Our Services
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
        <div className="container lg:py-12 md:py-8 py-3 m-auto p-1">
          <h2 className="md:text-[56px] text-4xl text-center playfair-font py-5 md:mb-8">
            Our value
          </h2>
          <p className="text-center xl:w-[40%] lg:w-[60%] mx-auto">
            Discover the power, flexibility, and security of our cloud platform,
            designed to support your business’s growth and innovation.
          </p>

          <div className="grid xl:grid-cols-3 md:grid-cols-2 mt-8 gap-8">
            {OurValueCardData.map((data, index) => (
              <OurValueCard style="aws-card" key={index} {...data} />
            ))}
          </div>
        </div>
        <div className="m-[2px]">
          <AwsMarketplace />
        </div>
      </div>
    </div>
  );
}

export default index;
