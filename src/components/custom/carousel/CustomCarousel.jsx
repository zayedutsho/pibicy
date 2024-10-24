"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay"; // Ensure to import the autoplay CSS
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules"; // Import Autoplay
import { Swiper, SwiperSlide } from "swiper/react";
import leftArrow from "../../../assets/icons/left.svg";
import rightArrow from "../../../assets/icons/right.svg";
import avatar from "../../../assets/icons/avatar.png";
import stars from "../../../assets/icons/star.svg";
import comma from "../../../assets/icons/comma.png";

const CustomCarousel = ({ testimonials }) => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000, // Auto move every 3 seconds
          disableOnInteraction: false, // Keep autoplay active after user interactions
        }}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        modules={[Navigation, Autoplay]} // Include Autoplay module
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="h-[313px] py-[1rem] md:py-[2.62rem] px-[1.5rem] md:px-[2.69rem] flex flex-col items-start rounded-[1rem] bg-[#222629] text-white font-[Plus Jakarta Sans] leading-[28px]"
          >
            <div>
              <p className="text-[16px]">{testimonial.review}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="mt-[1.5rem] md:mt-[3.75rem] flex items-center gap-2 md:gap-2">
                <div>
                  <Image
                    src={avatar}
                    alt="Review User"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                <div>
                  <p className="md:text-sm font-normal font-[Plus Jakarta Sans]">
                    {testimonial.name}
                  </p>
                  <Image
                    src={stars}
                    alt="stars"
                    className="w-[70px] h-[20px]"
                  />
                </div>
              </div>
              <div>
                <Image
                  src={comma}
                  className="w-[65px] md:w-[72px] mt-[20px] md:mt-[50px]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrow Buttons Container */}
      <div className="absolute bottom-[-8rem] left-1/2 transform -translate-x-1/2 mb-4 flex items-center gap-4 z-50">
        <button className="swiper-prev">
          <Image src={leftArrow} alt="leftArrow" />
        </button>
        <button className="swiper-next">
          <Image src={rightArrow} alt="rightArrow" />
        </button>
      </div>
    </div>
  );
};

export default CustomCarousel;
