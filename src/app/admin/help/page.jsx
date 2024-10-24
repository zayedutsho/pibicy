import React from "react";

const page = () => {
  return (
    <div className="md:px-[32px] md:py-[27px] border shadow-lg">
      <div className="bg-[#FFFFFF] border border-[#21212147] p-[20px] md:p-[40px] rounded-[5px]">
        <h1 className="text-[24px] font-semibold">Contact Us</h1>
        <h1 className="mt-[16px]">
          Got Questions, Issues, or Feedback? We're Here to Help!
        </h1>
        <div className="mt-[30px]">
          <div className="flex flex-col md:flex-row w-full gap-5 md:gap-[100px]">
            <div className="md:w-[90%]">
              <h1>Full name</h1>
              <input
                type="text"
                className="bg-[#F3F3FA] w-full rounded-[12px] h-[48px] mt-[8px] px-[16px]"
                placeholder="John doe"
              />
            </div>
            <div className="w-full">
              <h1>Email Address</h1>
              <input
                type="text"
                className="bg-[#F3F3FA] w-full rounded-[12px] h-[48px] mt-[8px] px-[16px]"
                placeholder="John.doe@yahoo.com"
              />
            </div>
          </div>
          <div className="w-full gap-5 md:gap-[20px] mt-5 md:mt-[32px]">
            <h1>Tell us what you need help with:</h1>
            <input
              type="text"
              className="bg-[#F3F3FA] w-full md:w-[50%] rounded-[12px] h-[48px] mt-[8px] px-[16px]"
              placeholder="Enter a topic, like “billing” , “Feedback”..."
            />
          </div>
          <div className="w-full gap-[20px] mt-5 md:mt-[32px]">
            <input
              type="text"
              className="bg-[#F3F3FA] w-full rounded-[12px] h-[48px] mt-[8px] px-[16px]"
              placeholder="Please add any additional detail on your inquiry."
            />
          </div>
          <div className="w-full gap-[20px] mt-[32px]">
            <h1>Screenshot or Attachment (optional)</h1>
            <input
              type="file"
              className="bg-[#F3F3FA] w-full md:w-[50%] rounded-[12px] h-[48px] mt-[8px] px-[16px] py-[9px] text-gray-500 file:placeholder-gray-400 file:cursor-pointer"
              placeholder="Drag & drop , or browse for a file..."
            />
          </div>
          <div className="flex items-center justify-center text-center mx-auto md:mx-0 w-2/3 md:w-[348px] h-[46px] mt-[50px] bg-[#F47108] text-white rounded-[11px]">
            <h1>Send Us A Message</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
