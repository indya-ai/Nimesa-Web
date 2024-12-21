const Card = ({ title, imageSrc }) => {
  return (
    <div className="card pt-[1px] px-[1px] rounded-[24px]">
      <div className="flex bg-white h-full flex-col gap-14 rounded-[24px] 2xl:p-[38px] p-[22px] justify-between">
        <div className="flex md:items-start items-center flex-row gap-3">
          <div className="p-2 md:mb-6">
            <img
              className="min-w-[38px] min-h-[48px]"
              src={imageSrc}
              alt={title}
            />
          </div>
          <h3 className="2xl:text-[32px] lg:text-[28px] font-bold text-[#212121] playfair-font">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
