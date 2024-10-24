"use client";
import DashboardLayout from "../../../components/dashboardLayout/DashboardLayout";
import React, { useState } from "react";
import pibicy from "../../../assets/icons/mask.svg";
import Image from "next/image";
import helpIcon from "../../../assets/icons/help.svg";
import ResponsiveSidebar from "../../../components/dashboardLayout/ResponsiveSidebar";
import Link from "next/link";

const UserDashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen md:gap-2">
      {/* Sidebar */}
      <div className={`${isOpen ? "w-[290px]" : "w-[95px]"}`}>
        {/* <SiteNavigation navigation="subscriber" /> */}
        <DashboardLayout isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Main Content */}
      <div className="flex-1  md:ml-1/5 overflow-y-auto bg-[#F3F4F6] ">
        <div
          className={`${isOpen ? "left-[290px] " : "left-[95px]"} "h-[95px]"`}
        >
          <div className="bg-white px-4 md:px-6 lg:px-8 py-3 border hidden md:flex text-black items-center justify-end gap-6 md: top-0 right-0  ">
            <div className="border-r border-gray-200 h-12"></div>
            <div className="flex flex-col items-center gap-1">
              <Image src={pibicy} />
              <p className="text-sm font-[700]">Launch App</p>
            </div>
            <Link href="admin/help">
              <div className="flex flex-col items-center gap-1">
                <Image src={helpIcon} />
                <p className="text-sm font-[700]">Help</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="">
          <ResponsiveSidebar />
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

UserDashboardLayout.displayName = "UserDashboardLayout";

export default UserDashboardLayout;
