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
     duration: "20 mins",
   },
   {
     title: "Nimesa - Leverage AWS Snapshots for Cost saving",
     imageSrc: "/assets/images/videos/image4.svg",
     timeAgo: "7 days ago",
     duration: "15 mins",
   },
   {
     title: "Nimesa AWS Deployment and Basic Setup Demo",
     imageSrc: "/assets/images/videos/image5.svg",
     timeAgo: "9 days ago",
     duration: "20 mins",
   },
   {
     title: "Nimesa - AWS Semi-programmable Scripts Demo",
     imageSrc: "/assets/images/videos/image6.svg",
     timeAgo: "11 days ago",
     duration: "20 mins",
   },
   {
     title: "Nimesa - AWS Disaster Recovery Demo",
     imageSrc: "/assets/images/videos/image1.svg",
     timeAgo: "13 days ago",
     duration: "15 mins",
   },
   {
     title: "Nimesa AWS Deployment and Basic Setup Demo",
     imageSrc: "/assets/images/videos/image2.svg",
     timeAgo: "15 days ago",
     duration: "20 mins",
   },
   {
     title: "Nimesa - AWS Semi-programmable Scripts Demo",
     imageSrc: "/assets/images/videos/image3.svg",
     timeAgo: "17 days ago",
     duration: "20 mins",
   },
   {
     title: "Nimesa - Leverage AWS Snapshots for Cost saving",
     imageSrc: "/assets/images/videos/image4.svg",
     timeAgo: "19 days ago",
     duration: "15 mins",
   },
   {
     title: "Nimesa AWS Deployment and Basic Setup Demo",
     imageSrc: "/assets/images/videos/image6.svg",
     timeAgo: "21 days ago",
     duration: "20 mins",
   },
   {
     title: "Nimesa - AWS Semi-programmable Scripts Demo",
     imageSrc: "/assets/images/videos/image6.svg",
     timeAgo: "23 days ago",
     duration: "20 mins",
   },
   {
     title: "Nimesa - AWS Disaster Recovery Demo",
     imageSrc: "/assets/images/videos/image1.svg",
     timeAgo: "25 days ago",
     duration: "15 mins",
   },
   {
     title: "Nimesa AWS Deployment and Basic Setup Demo",
     imageSrc: "/assets/images/videos/image2.svg",
     timeAgo: "27 days ago",
     duration: "20 mins",
   },
   {
     title: "Nimesa - AWS Semi-programmable Scripts Demo",
     imageSrc: "/assets/images/videos/image3.svg",
     timeAgo: "29 days ago",
     duration: "20 mins",
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
