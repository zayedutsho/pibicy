"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import profile from "../../assets/images/dashboard/viewing.svg";
import DashboardLayout from "../../components/dashboardLayout/DashboardLayout";
import ResponsiveSidebar from "../../components/dashboardLayout/ResponsiveSidebar";

const ApplicationLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <div
        className={`${
          isOpen ? "md:w-[290px]" : "w-[95px]"
        } fixed top-0 bottom-0 bg-white z-[100] hidden md:block`}
      >
        <DashboardLayout isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div
        className={`fixed top-0 bottom-0 bg-white z-[100] md:w-[290px] transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden right-0`}
      >
        <AiOutlineClose
          className="absolute top-4 right-4 cursor-pointer"
          size={24}
          onClick={() => setSidebarOpen(false)}
        />
        <DashboardLayout isOpen={true} setIsOpen={setIsOpen} />
      </div>

      <div
        className={`flex-1 overflow-y-auto ${
          isOpen ? "md:ml-[290px]" : "ml-[95px]"
        } bg-[#F3F4F6] min-h-screen`}
      >
        <div className="fixed top-0 left-0 right-0 z-[99] md:h-[85px] bg-white px-4 md:px-6 lg:px-8 py-1 border-b flex justify-between md:justify-end rounded-t-[16px] items-center gap-6">
          <AiOutlineMenu
            className="block md:hidden cursor-pointer"
            size={24}
            onClick={() => setSidebarOpen(true)}
          />
          <div className="border-r border-gray-200 h-12 hidden md:block"></div>
          <Link href="">
            <div className="flex items-center gap-2">
              <Image src={profile} alt="profile" />
              <p className="text-[14px] font-[400]">Viewing</p>
            </div>
          </Link>
        </div>

        <ResponsiveSidebar />

        <div className="mt-[95px] md:mt-[85px]">{children}</div>
      </div>
    </div>
  );
};

export default ApplicationLayout;
