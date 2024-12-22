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
          contentStyle={{ background: "#F3F4F6", color: "#6a1b9a" }}
          contentArrowStyle={{ borderRight: "7px solid #f3e5f5" }}
          iconStyle={{ background: "#F3F4F6", color: "#fff" }}
          icon={<i className="fas fa-award"></i>} // Replace with your own icon
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            Nimesa - AWS Semi-programmable Scripts Demo
          </h3>
          <p>16 Aug</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "", color: "#2e7d32" }}
          contentArrowStyle={{ borderRight: "7px solid #d0f8ce" }}
          iconStyle={{ background: "", color: "#fff" }}
          icon={<i className="fas fa-star"></i>} // Replace with your own icon
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            Featured in Tech-30 Startup
          </h3>
          <p>Techsparks 2019 by Yourstory</p>
          <p>17 Oct</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "", color: "#ef6c00" }}
          contentArrowStyle={{ borderRight: "7px solid red" }}
          iconStyle={{ background: "", color: "#fff" }}
          icon={<i className="fas fa-medal"></i>} // Replace with your own icon
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            Amazon Sambhav Challenge
          </h3>
          <p>
            3rd runner-up at the National level Amazon Sambhav Entrepreneurship
            Challenge.
          </p>
          <p>21 Apr</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default AwardsTimeline;
