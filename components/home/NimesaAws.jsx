function NimesaAws() {
  return (
    <div className=" grid lg:grid-cols-2 md:py-10 py-5 gap-[8px]">
      <div className="xl:px-[50px] lg:px-[25px] md:px-[16px] flex flex-col justify-around">
        <div className="rounded-[12px] md:p-12 p-4 border-[#3432CA] border">
          <h3 className="text-[32px] playfair-font font-bold">
            Protect AWS Native services seamlessly
          </h3>
          <p className="text-gray mt-4">
            NIMESA is an unified cloud data management solution and an
            application-aware for major business applications running in AWS EC2
            Instances.
          </p>
        </div>
        <h4 className="text-[#212121] md:text-start text-center space-y-16 text-[32px] font-bold">
          Recovery in minutes at all levels
        </h4>
        <h4 className="text-[#212121] md:text-start text-center text-[32px] font-bold">
          One-click DR failover and failback
        </h4>
      </div>
      <img
        className="lg:w-auto w-full m-auto"
        src="/assets/images/home/aws.svg"
      />
    </div>
  );
}

export default NimesaAws;
