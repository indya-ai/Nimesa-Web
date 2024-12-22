import AwardsTimeline from "@/components/awards/Award";
import Award from "@/components/awards/Award";
import Card from "@/components/blog/Card";
import Banner from "@/components/common/Banner";
import FreeTrial from "@/components/demo/FreeTrial";
import GalleryCard from "@/components/gallery-card/Card";
import TeamCard from "@/components/team-card/TeamCard";
import VideoCard from "@/components/video/VideoCard";

function index() {
  const images = [
    "/assets/images/company/image1.svg",
    "/assets/images/company/image2.svg",
    "/assets/images/company/image3.svg",
  ];
  const blogData = [
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
  const teamMembers = [
    {
      imageSrc: "/assets/images/company/goyal.svg",
      name: "Tapesh Goyal",
      role: "CEO & Co-Founder",
      linkedInSrc: "/assets/images/company/linkedin.svg",
    },
    {
      imageSrc: "/assets/images/company/rajesh.svg",
      name: "Rajesh Vaidhyanathan",
      role: "CEO & Founder",
      linkedInSrc: "/assets/images/company/linkedin.svg",
    },
    {
      imageSrc: "/assets/images/company/sonal.svg",
      name: "Sonalishha",
      role: "HR Manager",
      linkedInSrc: "/assets/images/company/linkedin.svg",
    },
  ];
  return (
    <div>
      <Banner title="About Us" imageUrl="/assets/images/banner.svg" />
      <div className="container grid items-center lg:grid-cols-2 xl:py-16 md:py-12 py-5 gap-[8px] px-2 m-auto">
        <img
          className="lg:w-auto w-full"
          src="/assets/images/solution/multi-region/work-load.svg"
        />
        <div className="xl:px-[50px] lg:px-[25px] md:px-[16px]">
          <h2 className="xl:text-[56px] md:text-left text-center md:text-[40px] text-[32px] playfair-font text-[#212121]">
            We create simple & reliable Backup & DR
          </h2>
          <h4 className="lg:text-[32px] md:text-left text-center text-[24px] text-[#212121] playfair-font font-bold py-5">
            Solution for the cloud
          </h4>
          <p className="text-lg md:text-left text-center text-gray">
            Nimesa is a Data Protection & Copy Data Management company creating
            an enterprise-class Backup & Recovery solution. Our product can
            cater to the needs of the enterprise AWS users who are looking for a
            360° Data Protection solution that can do more than just Backup &
            Recovery.
          </p>
          <p className="text-lg md:text-left text-center text-gray mt-3">
            Choosing Nimesa will not only save time and effort in Backing up
            data and recovering them but also helps in reducing the cost of the
            AWS bills by about 50% or more. Backup & Granular Restore database
            applications like MSSQL, MySQL, Postgres, SAP, etc.
          </p>
        </div>
      </div>
      <div className="bg-[#F8F8F9] px-2">
        <div className="container xl:py-16 md:py-12 py-5 m-auto">
          <h2 className="xl:text-[56px] text-center md:text-[40px] text-[32px] playfair-font text-[#212121]">
            Videos
          </h2>
          <p className="text-center text-gray text-lg">
            Click here to check our video demos and our youtube channel.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
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
      <div className="container xl:py-16 md:py-12 py-5 m-auto px-2">
        <h2 className="xl:text-[56px] text-center md:text-[40px] text-[32px] playfair-font text-[#212121]">
          Meet Our Team
        </h2>
        <p className="text-center text-gray text-lg">
          Click here to meet our team members.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              imageSrc={member.imageSrc}
              name={member.name}
              role={member.role}
              linkedInSrc={member.linkedInSrc}
            />
          ))}
        </div>
      </div>
      <AwardsTimeline/>
      <div className="container xl:py-16 md:py-12 py-5 m-auto px-2">
        <h2 className="xl:text-[56px] text-center md:text-[40px] text-[32px] playfair-font text-[#212121]">
          Gallery
        </h2>
        <p className="text-center text-gray text-lg">
          Click here to check our gallery.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {images.map((src, index) => (
            <GalleryCard key={index} imageSrc={src} />
          ))}
        </div>
      </div>
      <div className="bg-[#F8F8F9] px-2">
        <div className="container xl:py-16 md:py-12 py-5 m-auto">
          <h2 className="xl:text-[56px] text-center md:text-[40px] text-[32px] playfair-font text-[#212121]">
            Blog
          </h2>
          <p className="text-center text-gray text-lg lg:w-[45%] md:w-[70%] mx-auto">
            Read our blogs and checkout how Nimesa can help you recover from
            Ransomware Attack without paying the ransome.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {blogData.map((blog, index) => (
              <Card
                key={index}
                title={blog.title}
                imageSrc={blog.imageSrc}
                timeAgo={blog.timeAgo}
                duration={blog.duration}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="xl:py-16 md:py-12 py-5 mx-2">
        <FreeTrial />
      </div>
    </div>
  );
}

export default index;
