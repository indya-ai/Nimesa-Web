import Banner from "@/components/common/Banner";
import FreeTrial from "@/components/demo/FreeTrial";

function index() {
  return (
    <div>
      <Banner
        title="Datasheet and Whitepaper"
        imageUrl="/assets/images/banner.svg"
      />
      <div className="lg:py-20 md:py-12 py-5 px-1">
        <div className="container grid items-center md:grid-cols-2 md:gap-[4px] gap-4 m-auto">
          <img className="w-full" src="/assets/images/solution/date-sheet/white-paper.svg" />
          <div className="lg:px-[50px] md:px-[16px]">
            <h2 className="md:text-start text-center xl:text-[56px] text-[30px] playfair-font text-[#212121]">
              AWS data sheet
            </h2>
            <p className="text-lg text-gray py-6 md:mb-8 pb-4">
              Download our Backup and DR for AWS Datasheet, which can help you
              in getting a brief overview of how to data protection and Disaster
              Recovery works in AWS cloud environment.
            </p>
            <button className="md:mx-0 mx-auto flex bg-blue py-2.5 px-5 text-white rounded-full">
              Download Whitepaper
            </button>
          </div>
        </div>
      </div>
      <div className="lg:py-20 md:py-12 py-5 px-1">
        <div className="container grid items-center md:grid-cols-2 gap-4 md:gap-[4px] m-auto">
          <div className="lg:px-[50px] md:px-[16px]">
            <h2 className="md:text-start text-center xl:text-[56px] text-[30px] playfair-font text-[#212121]">
              AWS data sheet
            </h2>
            <p className="text-lg text-gray py-6 md:mb-8 pb-4">
              Download our Backup and DR for AWS Datasheet, which can help you
              in getting a brief overview of how to data protection and Disaster
              Recovery works in AWS cloud environment.
            </p>
            <button className="md:mx-0 mx-auto flex bg-blue py-2.5 px-5 text-white rounded-full">
              Download Nimesha for AWS Datasheet
            </button>
          </div>
          <img className="w-full" src="/assets/images/solution/date-sheet/date-sheet.svg" />
        </div>
      </div>
      <div className="lg:py-20 md:py-12 py-5 px-1">
        <div className="container grid items-center md:grid-cols-2 gap-4 md:gap-[4px] m-auto">
          <img className="w-full" src="/assets/images/solution/date-sheet/sql-server.svg" />
          <div className="lg:px-[50px] md:px-[16px]">
            <h2 className="md:text-start text-center xl:text-[56px] text-[30px] playfair-font text-[#212121]">
              SQL server data sheet
            </h2>
            <p className="text-lg text-gray py-6 md:mb-8 pb-4">
              Download our MsSQL Backup and Recovery Datasheet for AWS, which
              can help you in getting a brief overview of how to Backup and
              Recover MSSQL Databases and Tables on an AWS instance.
            </p>
            <button className="md:mx-0 mx-auto flex bg-blue py-2.5 px-5 text-white rounded-full">
              Download Nimesha for MSSQL on AWS Datasheet
            </button>
          </div>
        </div>
      </div>
      <FreeTrial />
    </div>
  );
}

export default index;
