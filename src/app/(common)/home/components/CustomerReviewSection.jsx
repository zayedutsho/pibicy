import profile1 from "../../../../assets/images/home/Component 28.svg";
import profile2 from "../../../../assets/images/home/Component 28 (1).svg";
import profile3 from "../../../../assets/images/home/Component 28 (2).svg";
import CustomCarousel from "../../../../components/custom/carousel/CustomCarousel";

const CustomerReviewSection = () => {
  const ReviewData = [
    {
      name: "Ashley Cooper",
      profile: { profile1 },
      review:
        "I really like the system at this management, i love recommending this software to you guys",
      ratings: 5,
    },
    {
      name: "Jackline Fare",
      profile: { profile2 },
      review:
        "I really like the system at this management, i love recommending this software to you guys",
      ratings: 5,
    },
    {
      name: "Ashley Cooper",
      profile: { profile3 },
      review:
        "I really like the system at this management, i love recommending this software to you guys",
      ratings: 5,
    },
    {
      name: "Jackline Fare",
      profile: { profile1 },
      review:
        "I really like the system at this management, i love recommending this software to you guys",
      ratings: 5,
    },
  ];
  return (
    <div className="bg-black py-16 md:py-12 md:pl-12 lg:pl-24 h-[700px] md:h-[780px] px-[20px] md:px-[0px]">
      <h1 className="md:mt-[60px] text-[28px] md:text-[52px] font-[700] mb-8 text-center text-white ">
        Our Customers Review
      </h1>
      <p className="hidden md:block text-lg md:w-[75%] lg:w-[60%] text-center mx-auto mb-8 text-white font-[Plus Jakarta Sans]">
        Pibicy is trusted by fastest growth companies the focus on <br />
        project management Here`s what they have to say about us. project
        management Here&apos;s what they have to say about us.
      </p>

      <p className="md:hidden text-lg md:w-[75%] lg:w-[60%] text-center mx-auto mb-8 text-white font-[Plus Jakarta Sans]">
        Pibicy is trusted by fastest growth companies the focus on project
        management Here`s what they have to say about us. management Here&apos;s
        what they have to say about us.
      </p>

      <div className="mt-[2rem] md:mt-[3.75rem] relative pb-[4rem] md:pl-[18px] md:px-[0px]">
        <CustomCarousel testimonials={ReviewData} />
      </div>
    </div>
  );
};

export default CustomerReviewSection;
