import Card from "@/components/blog/Card";
import Banner from "@/components/common/Banner";

function index() {
  const tags = [
    { name: "All" },
    { name: "AWS" },
    { name: "Cost Optimisation" },
    { name: "Data Protection" },
    { name: "MSSQL" },
    { name: "MySQL" },
    { name: "Nimesa 2.0" },
    { name: "Nimesa for Cloud" },
    { name: "Nimesa for Database" },
    { name: "Oracle" },
    { name: "Press Release" },
    { name: "Ransomware Attacks" },
    { name: "vSphere" },
  ];
  const videoData = [
    {
      title:
        "Application consistent protection of MySQL databases: Nimesa approach",
      imageSrc: "/assets/images/blog/image0.svg",
      timeAgo: "December 27, 2019",
    },
    {
      title:
        "Application consistent protection of MySQL databases: Nimesa approach",
      imageSrc: "/assets/images/blog/image1.svg",
      timeAgo: "December 27, 2019",
    },
    {
      title: "Protect your WordPress website hosted in Amazon EC2",
      imageSrc: "/assets/images/blog/image2.svg",
      timeAgo: "3 days ago",
    },
    {
      title: "Adding MySQL slave to existing master-slave setup",
      imageSrc: "/assets/images/blog/image3.svg",
      timeAgo: "5 days ago",
    },
  ];
  return (
    <div>
      <Banner title="Blog" imageUrl="/assets/images/banner.svg" />
      <div className="container m-auto py-8 px-[2px]">
        <div className="group relative bg-white md:w-[453px] overflow-hidden rounded-full">
          <img
            src="/assets/images/career/search-icon.svg"
            alt="search icon"
            className="absolute left-3 top-1/2 -mt-2.5 text-gray pointer-events-none group-focus-within:text-blue-500 dark:text-slate-500"
          />
          <input
            type="text"
            aria-label="Search"
            placeholder="Search..."
            className="appearance-none w-full border border-[#D3D3D3] focus:outline-none text-sm leading-6 bg-transparent rounded-full placeholder:text-gray py-3 pl-10 shadow-sm"
          />
        </div>
        <div className="flex flex-row items-center overflow-x-auto md:flex-wrap my-7 gap-4">
          {tags.map((tag, index) => (
            <button
              key={index}
              className={`py-2 px-4 min-w-fit mb-3 rounded-full md:text-base text-xs transition ${
                index === 0
                  ? "bg-black text-white" // Black background for the first tag
                  : "bg-white text-gray border border-gray-300"
              }`}
            >
              {tag.name}
            </button>
          ))}
        </div>
        {/* First Card (New Style) */}
        {videoData.length > 0 && (
          <div className="rounded-[24px] rounded-r-0 grid md:grid-cols-2 items-center mb-4 bg-[#F8F8F9] overflow-hidden">
            <img
              src={videoData[0].imageSrc}
              alt={videoData[0].title}
              className="w-full"
            />

            <div className="md:px-9 px-4 py-5 space-y-3">
              <p className="text-gray">{videoData[0].timeAgo}</p>

              <h4 className="md:text-[44px] text-[24px] text-[#212121] font-bold playfair-font">
                {videoData[0].title}
              </h4>
            </div>
          </div>
        )}

        {/* Remaining Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoData.slice(1).map((video, index) => (
            <Card
              key={index}
              title={video.title}
              imageSrc={video.imageSrc}
              timeAgo={video.timeAgo}
              duration={video.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default index;
