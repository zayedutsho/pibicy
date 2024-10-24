import laptopImg from "../../../../assets/images/home/heroImg.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-[#F47108] py-12 px-6 md:px-12 lg:px-24 font-[Plus Jakarta Sans]">
      <h1 className="md:hidden text-[26px] font-[700] text-white text-center mb-4 md:mb-8">
        Less Document Request Hassle, More Value in Every Audit.
      </h1>
      <h1 className="hidden md:block text-[22px] md:text-[52px] font-[700] text-white text-center mb-4 md:mb-8">
        Less Document Request Hassle, <br />
        More Value in Every Audit.
      </h1>
      <p className="font-[400] md:text-[24px] text-white text-center">
        With Pibicy's Audit Information Management Platform
      </p>
      <div className="mx-auto my-8 flex items-center gap-5 justify-center">
        <button className="bg-white text-black font-[700] text-sm md:text-lg px-5 md:px-8 py-2.5 md:py-4 rounded-full">
          Get Started
        </button>
        <button className="text-white border font-[700] text-sm md:text-lg px-5 md:px-8 py-2.5 md:py-4 rounded-full">
          Learn More
        </button>
      </div>

      <div className="relative">
        <Image src={laptopImg} />
        
      </div>
    </div>
  );
};

export default HeroSection;
