"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import pibicy from "../../assets/icons/mask.svg";
import helpIcon from "../../assets/icons/help.svg";
import DashboardLayout from "../../components/dashboardLayout/DashboardLayout";
import ResponsiveSidebar from "../../components/dashboardLayout/ResponsiveSidebar";
import activeIcon from "../../assets/icons/active.svg";
import { usePathname } from "next/navigation";
import { DashboardMenuUser } from "../../components/dashboardLayout/dashboardMenuUser";
import { dashboardMenuAdmin } from "../../components/dashboardLayout/dashboardMenuAdmin";

const ApplicationLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const pathname = usePathname();
  const basePath = pathname.startsWith("/admin") ? "/admin" : "/user";
  const currentMenu = pathname.startsWith("/admin")
    ? dashboardMenuAdmin
    : DashboardMenuUser();

  const isAdmin = pathname.startsWith("/admin");
  const isUser = pathname.startsWith("/user");

  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    // Check if the current path matches any menu link
    const currentLink = currentMenu.find(
      (menu) => `${basePath}/${menu.linkTo}` === pathname
    );

    if (currentLink) {
      setActiveMenu(currentLink.linkTo);
    } else {
      setActiveMenu("");
    }
  }, [pathname, currentMenu, basePath]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar for desktop */}
      <div
        className={`${
          isOpen ? "md:w-[290px]" : "w-[95px]"
        } fixed top-0 bottom-0 bg-white z-[100] hidden md:block`}
      >
        <DashboardLayout isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Mobile sidebar (Hamburger menu) */}
      <div
        className={`fixed top-0 bottom-0 bg-white z-[100] w-[290px] transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <AiOutlineClose
          className="absolute top-4 right-4 cursor-pointer"
          size={24}
          onClick={() => setSidebarOpen(false)} // Close sidebar
        />
        <DashboardLayout isOpen={true} setIsOpen={setIsOpen} />
      </div>

      {/* Main content area */}
      <div
        className={`flex-1 overflow-y-auto ${
          isOpen ? "md:ml-[290px]" : "ml-[95px]"
        } bg-[#F3F4F6] min-h-screen`}
      >
        {/* Header with hamburger menu for mobile */}
        <div className="fixed top-0 left-0 right-0 z-[99] md:h-[85px] bg-white px-4 md:px-6 lg:px-8 py-1 border-b flex justify-between md:justify-end items-center gap-6">
          {/* Hamburger Icon for mobile */}
          <AiOutlineMenu
            className="block md:hidden cursor-pointer"
            size={24}
            onClick={() => setSidebarOpen(true)} // Open sidebar
          />
          <div className="border-r border-gray-200 h-12 hidden md:block"></div>
          <div className="flex flex-col items-center gap-1">
            <Image src={pibicy} alt="Pibicy" />
            <p className="text-sm font-[700]">Launch App</p>
          </div>

          {/* Help Link */}
          <Link href="/admin/help">
            <div className="flex flex-col items-center gap-1">
              {activeMenu === "help" && (
                <Image src={activeIcon} alt="Active Icon" />
              )}
              <Image src={helpIcon} alt="Help" />
              <p className="text-sm font-[700]">Help</p>
            </div>
          </Link>
        </div>

        {/* Responsive Sidebar content inside the mobile menu */}
        <ResponsiveSidebar />

        {/* Main content (children) */}
        <div className="mt-[95px] md:mt-[85px]">{children}</div>
      </div>
    </div>
  );
};

export default ApplicationLayout;
