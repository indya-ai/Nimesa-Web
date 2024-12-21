import Banner from "@/components/common/Banner";
import VideoCard from "@/components/video/VideoCard";

function index() {
  const videoData = [
    {
      title: "Nimesa - AWS Disaster Recovery Demo",
      imageSrc: "/assets/images/videos/image1.svg",
      timeAgo: "1 day ago",
      duration: "15 mins",
    },
    {
      title: "Nimesa AWS Deployment and Basic Setup Demo",
      imageSrc: "/assets/images/videos/image2.svg",
      timeAgo: "3 days ago",
      duration: "20 mins",
    },
    {
      title: "Nimesa - AWS Semi-programmable Scripts Demo",
      imageSrc: "/assets/images/videos/image3.svg",
      timeAgo: "5 days ago",
      duration: "12 mins",
    },
  ];
  return (
    <div>
      <Banner title="Videos" imageUrl="/assets/images/banner.svg" />
      <div className="container m-auto gap-4 py-8 px-[2px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoData.map((video, index) => (
            <VideoCard
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
