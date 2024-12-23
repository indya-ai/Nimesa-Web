import Banner from "@/components/common/Banner";
import GalleryCard from "@/components/gallery-card/Card";

function index() {
  const images = [
    "/assets/images/company/image1.svg",
    "/assets/images/company/image2.svg",
    "/assets/images/company/image3.svg",
    "/assets/images/company/img 4.svg",
    "/assets/images/company/img 5.svg",
    "/assets/images/company/img 06.svg",
    "/assets/images/company/img 07.svg",
    "/assets/images/company/img 8.svg",
    "/assets/images/company/img 09.svg",
  ];
  return (
    <div>
      <Banner title="Gallery" imageUrl="/assets/images/banner.svg" />
      <div className="container xl:py-16 md:py-12 py-5 px-2 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {images.map((src, index) => (
            <GalleryCard key={index} imageSrc={src} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default index;
