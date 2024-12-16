const OurValueCard = ({ title, imageSrc, detail }) => {
  return (
    <div className="aws-card p-[1px] px-[0.9px] rounded-[24px]">
      <div className="flex bg-white h-full flex-col gap-14 rounded-[24px] p-[38px] justify-between">
        <div className="flex flex-col gap-3">
          <div className="p-2 mb-6">
            <img src={imageSrc} alt={title} />
          </div>
          <h3 className="text-[32px] font-bold text-[#212121] playfair-font">
            {title}
          </h3>
          <p className="text-gray text-lg">{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default OurValueCard;
