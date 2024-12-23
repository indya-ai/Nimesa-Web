import { useState } from "react";
import Banner from "@/components/common/Banner";
import GalleryCard from "@/components/gallery-card/Card";

function Index() {
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div>
      <Banner title="Gallery" imageUrl="/assets/images/banner.svg" />
      <div className="container xl:py-16 md:py-12 py-5 px-2 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {images.map((src, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => openModal(src)}
            >
              <GalleryCard imageSrc={src} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white text-black px-4 py-2 md:m-4 m-2 shadow-md hover:bg-gray-200"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Selected Preview"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Index;
