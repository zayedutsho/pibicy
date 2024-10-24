"use client";
import React from "react";
import companyLogo from "../../../assets/images/dashboard/Rectangle 161124203.svg";
import Image from "next/image";

const page = () => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };
  return (
    <div className="md:p-8">
      <div className="px-3 bg-black text-white py-3 pt-2 rounded-lg text-center mb-2 md:h-[46px]">
        <p>
          Company name & address (We will include this information on all
          billing invoices on your account)
        </p>
      </div>

      <div className="bg-white px-6 py-8 rounded-lg border shadow-lg">
        <div className="flex md:hidden flex-col items-center justify-center">
          <div>
            <label htmlFor="file-input" className="cursor-pointer">
              <Image src={companyLogo} alt="company logo" />
            </label>
            <input
              type="file"
              id="file-input"
              className="hidden"
              onChange={(e) => handleImageUpload(e)}
            />
          </div>
          <div className="flex items-center justify-between gap-5 mt-4">
            <div className="text-right ">
              <button
                type="submit"
                className="px-6 py-2 bg-[#F47108] text-white rounded-lg text-xs md:text-md font-[600]"
              >
                Add Company Logo
              </button>
            </div>
            <div className="text-right ">
              <button
                type="submit"
                className="px-6 py-2 bg-[#F3F3FA] rounded-xl text-xs md:text-md font-[600]"
              >
                Remove Logo
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[40px] md:mt-[0px] grid grid-cols-1 md:grid-cols-[7fr,5fr] items-start justify-between gap-10">
          <div>
            <div className="flex flex-col gap-2 text-sm">
              <label htmlFor="">Company Name</label>
              <input
                type="text"
                className="bg-[#F3F3FA] rounded-xl py-2.5 placeholder:text-black px-4 placeholder:text-md"
                placeholder="Enter company name"
              />
            </div>

            <div className="my-8 grid grid-cols-2 md:gap-6 lg:gap-12 items-center justify-between gap-3">
              <div className="flex flex-col gap-2 text-sm">
                <label htmlFor="">Country</label>
                <input
                  type="text"
                  className="bg-[#F3F3FA] rounded-xl py-2.5 placeholder:text-black px-4 placeholder:text-md"
                  placeholder="Enter country name"
                />
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  className="bg-[#F3F3FA] rounded-xl py-2.5 placeholder:text-black placeholder:text-md px-4"
                  placeholder="Enter City"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <label htmlFor="">Address Line</label>
              <input
                type="text"
                className="bg-[#F3F3FA] rounded-xl py-2.5 placeholder:text-black px-4 placeholder:text-md"
                placeholder="Enter your address line"
              />
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center justify-center">
            <div>
              <label htmlFor="file-input" className="cursor-pointer">
                <Image src={companyLogo} alt="company logo" />
              </label>
              <input
                type="file"
                id="file-input"
                className="hidden"
                onChange={(e) => handleImageUpload(e)}
              />
            </div>
            <div className="flex items-center justify-between gap-5 mt-4">
              <div className="text-right ">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#F47108] text-white rounded-lg text-xs md:text-md font-[600]"
                >
                  Add Company Logo
                </button>
              </div>
              <div className="text-right ">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#F3F3FA] rounded-xl text-xs md:text-md font-[600]"
                >
                  Remove Logo
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8 hidden md:grid grid-cols-1 md:grid-cols-[1fr,1fr,1fr] md:gap-10 lg:gap-20 items-center justify-between gap-6 mx-8 md:mx-0">
          <div className="flex flex-col gap-2 text-sm ">
            <label htmlFor="phone">Phone</label>
            <div className="flex items-center bg-[#F3F3FA] rounded-xl py-2.5 px-3 w-full ">
              <select
                name="countryCode"
                className="bg-transparent outline-none text-black"
              >
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
                {/* Add other country codes here */}
              </select>
              <input
                type="tel"
                className="bg-transparent outline-none placeholder:text-black w-full px-3"
                placeholder="Enter your number"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm w-full ">
            <label htmlFor="">Province</label>
            <input
              type="text"
              className="bg-[#F3F3FA] rounded-xl py-2.5 placeholder:text-black placeholder:text-md px-4 w-full"
              placeholder="Enter Province"
            />
          </div>
          <div className="flex flex-col gap-2 text-sm w-full">
            <label htmlFor="">Postal Code</label>
            <input
              type="text"
              className="bg-[#F3F3FA] rounded-xl py-2.5 placeholder:text-black placeholder:text-md px-4"
              placeholder="Enter Postal Code"
            />
          </div>
        </div>
        <div className="flex md:hidden gap-[10px] py-[30px]">
          <div className="flex flex-col gap-2 text-sm w-full">
            <label htmlFor="phone">Phone</label>
            <div className="flex items-center bg-[#F3F3FA] rounded-xl py-2.5 px-3 w-full ">
              <select
                name="countryCode"
                className="bg-transparent outline-none text-black"
              >
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
                {/* Add other country codes here */}
              </select>
              <input
                type="tel"
                className="bg-transparent outline-none placeholder:text-black w-full px-3"
                placeholder="Enter your number"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm w-full ">
            <label htmlFor="">Province</label>
            <input
              type="text"
              className="bg-[#F3F3FA] rounded-xl py-2.5 placeholder:text-black placeholder:text-md px-4 w-full"
              placeholder="Enter Province"
            />
          </div>
        </div>
        <div className="md:hidden flex flex-col gap-2 text-sm w-full mb-[30px]">
          <label htmlFor="">Postal Code</label>
          <input
            type="text"
            className="bg-[#F3F3FA] rounded-xl py-2.5 placeholder:text-black placeholder:text-md px-4"
            placeholder="Enter Postal Code"
          />
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <label htmlFor="">GST/HST ID (optional)</label>
          <input
            type="text"
            className="bg-[#F3F3FA] rounded-xl py-2.5 placeholder:text-black placeholder:text-md px-4 md:w-[50%]"
            placeholder="Enter GST/HST ID"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
