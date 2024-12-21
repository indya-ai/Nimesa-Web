function TeamCard({ imageSrc, name, role, linkedInSrc }) {
  return (
    <div className="card rounded-[24px] p-[1px]">
      <div className="bg-white rounded-[24px] text-center mx-auto flex flex-col items-center md:p-12 p-4 md:gap-4 gap-2">
        <img src={imageSrc} alt={`${name}'s picture`} />
        <h3 className="md:text-[32px] text-[28px] playfair-font font-bold text-[#21212]">
          {name}
        </h3>
        <h5 className="text-gray text-[22px]">{role}</h5>
        <img src={linkedInSrc} alt="LinkedIn icon" />
      </div>
    </div>
  );
}

export default TeamCard;
