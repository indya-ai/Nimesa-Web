import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const AwardsTimeline = () => {
  return (
    <div className="bg-[#F8F8F9] py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">Awards</h1>
      <p className="text-center text-gray-600 mb-10">
        Click here to check our awards.
      </p>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work rounded-[24px]"
          contentStyle={{ background: "#F3F4F4", color: "" }}
          contentArrowStyle={{ borderRight: "7px solid #F3F4F6" }}
          iconStyle={{ background: "#F3F4F6", color: "#3432CA" }}
          icon={<i className="fas fa-trophy"></i>} // Replace with your own icon
        >
          <div className="bg-[#F3F4F4] flex flex-col gap-3 rounded-[24px]">
            <h3 className="vertical-timeline-element-title font-semibold">
              NYCx Cyber Moonshot Challenge
            </h3>
            <img src="/assets/images/solution/multi-region/image.svg" />
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8F8F9", color: "" }}
          contentArrowStyle={{ borderRight: "7px solid #f3e5f5" }}
          iconStyle={{ background: "#F3F4F6", color: "#fff" }}
          icon={<i className="fas fa-award"></i>} // Replace with your own icon
        >
          <p className="border card rounded-full w-fit m-3">
            <div className="bg-white m-[1px] rounded-full px-2 py-[4px]">
              16 Aug
            </div>
          </p>
          <h3 className="vertical-timeline-element-title font-bold text-gray text-2xl pt-8">
            Nimesa - AWS Semi-programmable Scripts Demo
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8F8F9", color: "" }}
          contentArrowStyle={{ borderRight: "7px solid #f3e5f5" }}
          iconStyle={{ background: "#F3F4F6", color: "#fff" }}
          icon={<i className="fas fa-award"></i>} // Replace with your own icon
        >
          <p className="border card rounded-full w-fit m-3">
            <div className="bg-white m-[1px] rounded-full px-2 py-[4px]">
              16 Aug
            </div>
          </p>
          <h3 className="vertical-timeline-element-title font-bold text-gray text-2xl pt-8">
            Nimesa got featured in Tech-30 Startup list in the Techsparks
            2019 event conducted by Yourstory.
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work rounded-[24px]"
          contentStyle={{ background: "#F3F4F4", color: "" }}
          contentArrowStyle={{ borderRight: "7px solid #F3F4F6" }}
          iconStyle={{ background: "#F3F4F6", color: "#3432CA" }}
          icon={<i className="fas fa-trophy"></i>} // Replace with your own icon
        >
          <div className="bg-[#F3F4F4] flex flex-col gap-3 rounded-[24px]">
            <h3 className="vertical-timeline-element-title font-semibold">
              TECHSPARKS 2019 Tech 30 Startup
            </h3>
            <img src="/assets/images/solution/multi-region/image1.svg" />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work rounded-[24px]"
          contentStyle={{ background: "#F3F4F4", color: "" }}
          contentArrowStyle={{ borderRight: "7px solid #F3F4F6" }}
          iconStyle={{ background: "#F3F4F6", color: "#3432CA" }}
          icon={<i className="fas fa-trophy"></i>} // Replace with your own icon
        >
          <div className="bg-[#F3F4F4] flex flex-col gap-3 rounded-[24px]">
            <h3 className="vertical-timeline-element-title font-semibold">
              Amazon Samhbhav
            </h3>
            <img src="/assets/images/solution/multi-region/image2.svg" />
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8F8F9", color: "" }}
          contentArrowStyle={{ borderRight: "7px solid #f3e5f5" }}
          iconStyle={{ background: "#F3F4F6", color: "#fff" }}
          icon={<i className="fas fa-award"></i>} // Replace with your own icon
        >
          <p className="border card rounded-full w-fit m-3">
            <div className="bg-white m-[1px] rounded-full px-2 py-[4px]">
              2 Apr
            </div>
          </p>
          <h3 className="vertical-timeline-element-title font-bold text-gray text-2xl pt-8">
            NNIMESA, a Bangalore-based start-up, has won the 3rd runner-up prize
            in the prestigious National level Amazon Smbhav Entrepreneurship
            Challenge 2021.
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default AwardsTimeline;
