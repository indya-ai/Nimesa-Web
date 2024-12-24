
function VideoCard({ title, imageSrc, timeAgo, duration }) {
  return (
    <div className="rounded-[24px] bg-[#F8F8F9] overflow-hidden">
      <div className="relative">
        <img src={imageSrc} alt={title} className="w-full" />
        <img
          className="absolute top-0 bottom-0 left-0 right-0 m-auto cursor-pointer"
          src="/assets/images/videos/play-icon.svg"
        />
      </div>
      <div className="md:px-9 px-4 py-5">
        <h4 className="text-[24px] text-[#212121] font-bold playfair-font">
          {title}
        </h4>
        <div className="pt-4 flex flex-row items-center gap-3 text-[#4D4D4D]">
          <p>{timeAgo}</p>
          <span className="bg-[#D3D3D3] h-4 w-[1.5px] block"></span>
          <p>{duration}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
