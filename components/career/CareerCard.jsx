
// CareerCard component
const CareerCard = ({
  jobId,
  jobTitle,
  department,
  location,
  officeLocation,
}) => {
  return (
    <div className="career-card p-[1px] px-[0.9px] rounded-[24px]">
      <div className="flex bg-white flex-col gap-14 rounded-[24px] p-[32px] justify-between">
        <div className="flex flex-col gap-3">
          <div className="bg-[#F3F4F4] w-fit rounded-full p-2">
            Job ID: {jobId}
          </div>
          <h3 className="text-xl font-Playfair">{jobTitle}</h3>
          <div className="flex gap-4 items-center">
            <img src="/assets/images/career/bag.svg" alt="bag icon" />
            <span>{department}</span>
          </div>
          <div className="flex gap-4 items-center">
            <img src="/assets/images/career/location.svg" alt="location icon" />
            <span>{location}</span>
          </div>
          <div className="flex gap-4 items-center">
            <img src="/assets/images/career/building.svg" alt="building icon" />
            <span>{officeLocation}</span>
          </div>
        </div>
        <button className="bg-[#212121] rounded-full text-white p-3">
          View
        </button>
      </div>
    </div>
  );
};

export default CareerCard;
