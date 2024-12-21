function Card({ title, imageSrc, timeAgo }) {
  return (
    <div className="rounded-[24px] bg-[#F8F8F9] overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full" />

      <div className="md:px-9 px-4 py-5 space-y-3">
        <p className="text-gray">{timeAgo}</p>

        <h4 className="text-[24px] text-[#212121] font-bold playfair-font">
          {title}
        </h4>
      </div>
    </div>
  );
}

export default Card;
