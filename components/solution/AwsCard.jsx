
const AwsCard = ({ title, imageSrc, departmentList }) => {
  return (
    <div className="aws-card p-[1px] px-[0.9px] rounded-[24px]">
      <div className="flex bg-white h-full flex-col gap-14 rounded-[24px] p-[38px] justify-between">
        <div className="flex flex-col gap-3">
          <div className="p-2">
            <img src={imageSrc} alt={title} />
          </div>
          <h3 className="text-[32px] font-bold playfair-font">{title}</h3>
          <ul className="list-disc pl-5 space-y-1">
            {Array.isArray(departmentList) && departmentList.length > 0 ? (
              departmentList.map((item, index) => (
                <li key={index} className="text-sm text-gray-700">
                  {item}
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-700">
                No departments available
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AwsCard;
