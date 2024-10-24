"use client";
import logo from "../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { dashboardMenuAdmin } from "./dashboardMenuAdmin";
import signOutIcon from "../../assets/icons/signout.svg";
import { DashboardMenuUser, dashboardMenuUser } from "./dashboardMenuUser";
import { usePathname } from "next/navigation";
import larrow from "../../assets/icons/larrow.svg";
import plus from "../../assets/icons/plus.svg";
import profile from "../../assets/images/dashboard/viewing.svg";
import profileA from "../../assets/images/dashboard/profilePicture.svg";
import cdown from "../../assets/images/dashboard/arrow-circle-down.svg";
import threedot from "../../assets/icons/threedot.svg";
import orLine from "../../assets/icons/orLine.svg";
import AI from "../../assets/icons/AI.svg";
import pibicy from "../../assets/icons/mask.svg";
import helpIcon from "../../assets/icons/help.svg";

const ResponsiveSidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentMenu = pathname.startsWith("/admin")
    ? dashboardMenuAdmin
    : DashboardMenuUser();
  const basePath = pathname.startsWith("/admin") ? "/admin" : "/user";

  const isAdmin = pathname.startsWith("/admin");
  const isUser = pathname.startsWith("/user");
  const [activeMenu, setActiveMenu] = useState("");

  const handleLinkClick = (menuLink) => {
    setActiveMenu(menuLink);
    setMobileMenuOpen(false);
  };

  return (
    <div className="md:hidden fixed top-0 left-0 z-[100] w-full bg-white">
      <div className="flex items-center justify-between px-6 py-4 bg-white md:shadow-md">
        <Image src={logo} alt="logo" className="w-[16]" />
        <div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <RiCloseLine className="text-[#F47108] text-2xl" />
            ) : (
              <FaBars className="text-[#F47108] text-2xl" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[60%] bg-white shadow-lg z-[150] transition-transform duration-300 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center">
          <button
            className="absolute top-4 left-4 text-2xl text-[#F47108]"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image src={larrow} alt="larrow" className="mt-[20px] ml-[10px]" />
          </button>

          {isUser && (
            <Link href="">
              <div className="flex items-center gap-2 absolute top-[20px] right-[16px]">
                <div className="border-r-2 border-gray-200 h-12"></div>
                <Image src={profile} alt="profile" className="w-[45px]" />
                <p className="text-[14px] font-[400] text-[#525252]">Viewing</p>
              </div>
            </Link>
          )}
          {isAdmin && (
            <div className="flex items-center gap-[20px] mt-[35px] ml-[70px]">
              <div className="flex flex-col items-center gap-1">
                <Image src={pibicy} alt="Pibicy" className="w-[30px]" />
                <p className="text-[14px] font-[700]">Launch App</p>
              </div>
              <Link href="/admin/help" onClick={() => setMobileMenuOpen(false)}>
                <div className="flex flex-col items-center gap-1">
                  <Image src={helpIcon} alt="Help" className="w-[30px]" />
                  <p className="text-[14px] font-[700]">Help</p>
                </div>
              </Link>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center">
          {isAdmin && <Image src={logo} alt="logo" className="mt-[40px]" />}
        </div>
        {isUser && (
          <h1 className="text-[24px] font-bold text-center mt-[120px]">
            (Company Name)
          </h1>
        )}
        {isAdmin && (
          <h1 className="text-[24px] font-bold text-center mt-[25px]">
            (Company Name)
          </h1>
        )}
        {isAdmin && (
          <div className="flex flex-col items-center justify-center mb-12 mt-[30px]">
            <Image src={profileA} alt="profile" className="w-24" />
            <p className="font-[700] mt-4">MJ Dudu</p>
          </div>
        )}
        {isUser && (
          <div className="px-[17px]">
            <div className="bg-[#F47108] rounded-lg h-[40px] flex items-center justify-center mt-[30px]">
              <div className="flex items-center justify-center gap-[6px]">
                <Image src={plus} alt="plus" />
                <h1 className="text-white">New Project</h1>
              </div>
            </div>
          </div>
        )}

        {isUser && (
          <div className="flex items-center gap-[15px] mb-[20px] mt-[50px] ml-[12px]">
            <Image src={cdown} />
            <h1 className="text-[14px] font-bold text-[#212121]">
              Accessible Projects
            </h1>
          </div>
        )}

        <div className="flex flex-col gap-6 px-[18px] mt-[40px]">
          {currentMenu?.slice(0, -1).map((menu, i) => (
            <div key={i}>
              <Link
                href={`${basePath}/${menu.linkTo}`}
                className={`flex gap-3 items-center p-2 rounded-lg ${
                  activeMenu === menu.linkTo
                    ? "bg-[#FBFBFB] text-[#212121]"
                    : "bg-white text-[#6B6B6B]"
                }`}
                onClick={() => handleLinkClick(menu.linkTo)}
              >
                {activeMenu === menu.linkTo && (
                  <Image
                    src={orLine}
                    alt="orline"
                    className="absolute left-[10px] h-[40px]"
                  />
                )}
                <Image
                  src={menu.icon}
                  alt={menu.title}
                  className="w-[20px] h-[20px]"
                />
                <p className="text-[14px]">{menu.title}</p>
                {activeMenu === menu.linkTo && (
                  <Image
                    src={threedot}
                    alt="threedot"
                    className="absolute right-[20px]"
                  />
                )}
              </Link>
            </div>
          ))}
        </div>

        {isUser && (
          <div className="mt-[120px] ml-[20px] cursor-pointer">
            <Image src={AI} alt="AI" />
          </div>
        )}

        {isAdmin && (
          <div className="flex items-end justify-end absolute right-5 bottom-8">
            <button className="flex items-center gap-2 text-sm">
              <Image src={signOutIcon} />
              <p className="text-[#FF404E]">Sign Out</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
