import Banner from "@/components/common/Banner";

function index() {
  return (
    <div>
      <Banner title="Title" />
      <div className="grid md:grid-cols-2 lg:gap-0 gap-3 xl:my-16 my-10 container m-auto p-2 lg:items-center">
        <div className="xl:w-[60%] lg:w-[80%] mx-auto">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum pass
          </p>
        </div>
        <div>
          <form className="space-y-4 xl:w-[60%] lg:w-[80%] mx-auto">
            <div>
              <input
                type="text"
                aria-label="Full Name"
                placeholder="Full Name"
                className="appearance-none w-full border border-[#D3D3D3] focus:outline-none text-sm leading-6 bg-transparent rounded-full placeholder:text-[#4D4D4D] p-3 shadow-sm"
              />
            </div>
            <div>
              <input
                type="email"
                aria-label="Business email i’d"
                placeholder="Business email i’d"
                className="appearance-none w-full border border-[#D3D3D3] focus:outline-none text-sm leading-6 bg-transparent rounded-full placeholder:text-[#4D4D4D] p-3 shadow-sm"
              />
            </div>
            <div>
              <input
                type="text"
                aria-label="Company Name"
                placeholder="Company Name"
                className="appearance-none w-full border border-[#D3D3D3] focus:outline-none text-sm leading-6 bg-transparent rounded-full placeholder:text-[#4D4D4D] p-3 shadow-sm"
              />
            </div>
            <div>
              <input
                type="tel"
                aria-label="Phone Number"
                placeholder="Enter your phone number"
                className="appearance-none w-full border border-[#D3D3D3] focus:outline-none text-sm leading-6 bg-transparent rounded-full placeholder:text-[#4D4D4D] p-3 shadow-sm"
              />
            </div>
            <p className="text-lg">About Your Environment</p>
            <p>Your applications run in:</p>
            <div className="flex flex-row items-center gap-2">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="appearance-none h-5 w-5 border border-[#D3D3D3] rounded focus:outline-none checked:bg-[#3432CA]"
                />
                <span className="text-sm text-[#212121]">AWS Environment</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="appearance-none h-5 w-5 border border-[#D3D3D3] rounded focus:outline-none checked:bg-[#3432CA]"
                />
                <span className="text-sm text-[#212121]">
                  Azure Environment
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#3432CA] text-white rounded-full p-3 text-sm shadow-sm mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="lg:py-20 py-5 m-2">
        <div className="bg-[url('/assets/images/demo/free-trail-bg.svg')] text-center bg-cover bg-center rounded-[24px] container px-2 m-auto md:p-16 text-white p-12">
          <h4 className="md:text-[44px] text-3xl text-center mb-2 playfair-font">
            Request for free trial
          </h4>
          <h5 className="text-lg">
            Simple, instant data protection and copy data management solution.
          </h5>
          <button className="rounded-full bg-white text-[#212121] p-3 mb-3 mt-8">
            Experience Nimesa
          </button>
          <p>Fully functional 30-day trial</p>
        </div>
      </div>
    </div>
  );
}

export default index;
