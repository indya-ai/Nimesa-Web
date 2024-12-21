const OurValueCard = ({style, title, imageSrc, detail }) => {
  return (
    <div className={`${style} p-[1px] px-[0.9px] rounded-[24px]`}>
      <div className="flex bg-white h-full flex-col gap-14 rounded-[24px] lg:p-[38px] p-[20px] justify-between">
        <div className="flex flex-col gap-3">
          <div className="p-2 lg:mb-6 mb-4">
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
