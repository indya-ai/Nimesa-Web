
function AwsMarketplace() {
  return (
    <div className="container px-2 py-12 m-auto overflow-hidden">
      <div className="xl:p-20 lg:p-16 md:p-8 p-4 grid md:grid-cols-2 rounded-3xl bg-[url('/assets/images/solution/aws-mp-bg.svg')] bg-cover bg-center bg-no-repeat">
        <div className="text-white mx-auto">
          <h2 className="lg:text-[44px] xl:pr-40 md:text-[40px] text-[30px] playfair-font">
            Deploy <span className="text-[#009900]">Nimesa</span> in 2 mins from
            AWS market place
          </h2>
          <p className="my-4">
            DR process is complex, expensive, and unpredictable, Nimesa makes it
            simple, affordable, and highly secure
          </p>
          <button className="bg-white rounded-full md:mt-0 mt-4 p-3 px-6 text-[#212121]">
            Learn More
          </button>
        </div>
        <img
          className="mx-auto md:mt-0 mt-6"
          src="/assets/images/solution/aws-marketplace.svg"
        />
      </div>
    </div>
  );
}

export default AwsMarketplace;
