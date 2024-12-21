function GalleryCard({ imageSrc }) {
  return (
    <div className="rounded-[24px] p-4 bg-[#F3F4F4]">
      <img
        src={imageSrc}
        alt="Card Image"
        className="rounded-[24px] w-full h-full"
      />
    </div>
  );
}

export default GalleryCard;
