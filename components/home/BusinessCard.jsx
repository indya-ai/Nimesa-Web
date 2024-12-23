function BusinessCard() {
  return (
    <div className="container px-2 md:py-14 py-4 m-auto overflow-hidden">
      <div className="p-4 xl:pl-24 grid items-center md:grid-cols-2 rounded-3xl bg-[url('/assets/images/home/bg.svg')] bg-cover bg-center bg-no-repeat">
        <div className="text-white md:text-start text-center mx-auto">
          <h2 className="lg:text-[44px] xl:pr-[160px] text-[30px] playfair-font">
            Empower your <span className="text-[#009900]">business </span>
            with our cloud platform
          </h2>
          <p className="my-4 xl:pr-[120px]">
            DR process is complex, expensive, and unpredictable, Nimesa makes it
            simple, affordable, and highly secure
          </p>
          <button className="bg-white md:m-0 mx-auto rounded-full md:mt-0 mt-4 p-3 px-6 text-[#212121]">
            Learn More
          </button>
        </div>
        <img
          className="mx-auto"
          src="/assets/images/home/img2.svg"
        />
      </div>
    </div>
  );
}

export default BusinessCard;
