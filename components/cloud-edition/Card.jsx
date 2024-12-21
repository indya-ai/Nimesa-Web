const Card = ({ title, imageSrc, detail, details }) => {
  return (
    <div className="card pt-[1px] px-[1px] rounded-[24px]">
      <div
        className={`flex bg-white h-full flex-col gap-14 rounded-[24px] ${
          detail === true ? "2xl:p-[25px] p-[18px]" : "2xl:p-[38px] p-[22px]"
        } justify-between`}
      >
        <div className={``}>
          <div
            className={`flex flex-row ${
              detail === true
                ? "gap-0 items-center"
                : "gap-3  md:items-start items-center"
            }`}
          >
            <div className={`${detail === true ? "pr-2" : "p-2"}`}>
              <img
                className={`${
                  detail === true
                    ? "w-[26px] h-[26px]"
                    : "min-w-[38px] min-h-[48px]"
                }`}
                src={imageSrc}
                alt={title}
              />
            </div>
            <h3
              className={`${
                detail === true
                  ? "text-[22px]"
                  : "2xl:text-[32px] lg:text-[28px]"
              } font-bold text-[#212121] playfair-font`}
            >
              {title}
            </h3>
          </div>
          {detail === true && (
            <p className="text-gray mt-6 text-lg">{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
