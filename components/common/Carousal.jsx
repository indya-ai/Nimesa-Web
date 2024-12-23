// components/SlickCarousel.js
import Slider from "react-slick";

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const items = [
    {
      id: 1,
      title: "Reduce DR SETUP COST BY 90%",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Try Nimesa 3.0 Now",
      slideImage: "/assets/images/slider/slider1.svg",
    },
    {
      id: 2,
      title: "Ransomware Account Compromised Intentional Disruption",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Explore Features",
      slideImage: "/assets/images/slider/slider2.svg",
    },
    {
      id: 3,
      title: "Cyber Resiliency",
      description:
        "Optimize your cloud operations and enhance data security with our next-gen solutions.",
      buttonText: "Learn More",
      slideImage: "/assets/images/slider/slider3.svg",
    },
    {
      id: 4,
      title: "Business Continuity / Disaster Recovery",
      description:
        "Optimize your cloud operations and enhance data security with our next-gen solutions.",
      buttonText: "Learn More",
      slideImage: "/assets/images/slider/slider4.svg",
    },
    {
      id: 5,
      title: "DR Compliances",
      description:
        "Optimize your cloud operations and enhance data security with our next-gen solutions.",
      buttonText: "Learn More",
      slideImage: "/assets/images/slider/slider5.svg",
    },
  ];

  return (
    <div
      className="w-full xl:min-h-[780px] md:h-[450px] h-screen relative bg-center bg-cover"
      style={{
        backgroundImage: `url('/assets/images/home/Banner.svg')`,
      }}
    >
      <Slider {...settings}>
        {items.map((item) => (
          <div
            key={item.id}
            className="flex m-auto items-center justify-center text-white text-xl px-8 w-full xl:min-h-[740px] md:h-[450px] h-screen"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center 2xl:py-8 container mx-auto xl:min-h-[740px] md:h-[450px] h-screen">
              <div className="xl:px-[50px] lg:px-[25px] md:px-[16px]">
                <h2 className="2xl:text-[56px] xl:text-[50px] md:text-left leading-normal text-center md:text-[30px] text-[32px] playfair-font">
                  {item.title}
                </h2>

                <p className="text-lg md:text-left text-center py-2 mt-3">
                  {item.description}
                </p>

                <div className="flex flex-row items-center gap-4 mt-7">
                  <button className="border md:mx-0 mx-auto rounded-full md:px-12 px-5 py-2.5 bg-white text-black cursor-pointer">
                    {item.buttonText}
                  </button>
                </div>
              </div>
              <img
                className="md:w-full w-[80%] mx-auto"
                src={item.slideImage}
                alt={`Slide ${item.id}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
