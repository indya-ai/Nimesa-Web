import Banner from "@/components/common/Banner";
import FreeTrial from "@/components/demo/FreeTrial";
import TeamCard from "@/components/team-card/TeamCard";

function index() {
  const teamMembers = [
    {
      imageSrc: "/assets/images/company/goyal.svg",
      name: "Tapesh Goyal",
      role: "CEO & Co-Founder",
      linkedInSrc: "/assets/images/company/linkedin.svg",
    },
    {
      imageSrc: "/assets/images/company/rajesh.svg",
      name: "Rajesh Vaidhyanathan",
      role: "CEO & Founder",
      linkedInSrc: "/assets/images/company/linkedin.svg",
    },
    {
      imageSrc: "/assets/images/company/sonal.svg",
      name: "Sonalishha",
      role: "HR Manager",
      linkedInSrc: "/assets/images/company/linkedin.svg",
    },
  ];
  return (
    <div>
      <Banner title="Our Team" imageUrl="/assets/images/banner.svg" />
      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:py-[100px] py-[50px] gap-6 px-[4px]">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            imageSrc={member.imageSrc}
            name={member.name}
            role={member.role}
            linkedInSrc={member.linkedInSrc}
          />
        ))}
      </div>
      <div className="container mx-auto py-12 px-1">
        <FreeTrial />
      </div>
    </div>
  );
}

export default index;
