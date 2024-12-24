// components/Tastimonial.js
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
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
      className="w-full bg-no-repeat bg-cover relative bg-center flex my-auto"
      style={{
        backgroundImage: `url('/assets/images/home/What our users say_.svg')`,
      }}
    >
      <div className="container xl:pb-24 xl:pt-20 py-16 m-auto">
        <h2 className="text-[56px] text-center capitalize text-white playfair-font mb-12">
          What our users say?
        </h2>
        Ellipse 2.svg
        <Slider {...settings} className="lg:mx-24 md:mx-16 mx-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex m-auto items-center space-y-3 text-center justify-center bg-white rounded-[24px] md:p-[40px] p-[20px] text-[#212121] text-xl md:px-8 w-fulls"
            >
              <p className="lg:mb-14 md:mb-10">
                At Khatabook we are using Nimesa for Back and DR solutions.
                Before going for Nimesa we had evaluated 3 to 4 DR and Backup
                solutions which are available in the market, but finally we
                chose Nimesa because of its simplicity by product, design and
                architecture. Nimesa tool is very easy to use and all
                configuration options are self explanatory, so onboarding
                service is very fast.
              </p>
              <img
                className="flex justify-center mx-auto"
                src="/assets/images/home/Ellipse 2.svg"
              />
              <p>Pankaj Pandey</p>
              <p>DevOps Engineer III at Khatabook</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
