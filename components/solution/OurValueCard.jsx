const OurValueCard = ({ style, title, imageSrc, detail }) => {
  return (
    <div className={`${style} rounded-[24px]`}>
      <div className="flex bg-white h-full m-[1px] flex-col gap-14 rounded-[24px] lg:p-[38px] p-[20px] justify-between">
        <div className="flex flex-col gap-3">
          <div className="p-2 mb-4">
            <img src={imageSrc} alt={title} />
          </div>
          <h3 className="text-[32px] font-bold text-[#212121] playfair-font">
            {title}
          </h3>
           {detail.map((item, index) => (
            <p key={index} className="text-sm text-gray-600">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValueCard;
