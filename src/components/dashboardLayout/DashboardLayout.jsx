"use client";
import logo from "../../assets/logo.png";
import Image from "next/image";
import arrowIcon from "../../assets/icons/Frame 1707481083.svg";
import profile from "../../assets/images/dashboard/profilePicture.svg";
import Link from "next/link";
import signOutIcon from "../../assets/icons/signout.svg";
import { dashboardMenuAdmin } from "./dashboardMenuAdmin";
import pibicy from "../../assets/icons/mask.svg";
import arrowRight from "../../assets/icons/rightArrow.svg";
import dropdownIcon from "../../assets/icons/arrow-circle-down.svg";
import { IoMdAddCircleOutline } from "react-icons/io";
import brifcase from "../../assets/icons/briefcase.svg";
import auditIcon from "../../assets/icons/audit.svg";
import AI from "../../assets/icons/AI.svg";
import threedot from "../../assets/icons/threedot.svg";
import plus from "../../assets/icons/plus.svg";
import orLine from "../../assets/icons/orLine.svg";
import cdown from "../../assets/images/dashboard/arrow-circle-down.svg";
import share from "../../assets/share.svg";
import thrash from "../../assets/trash.svg";
import statusUpdate from "../../assets/icons/ai-text-generation 1.svg";
import { usePathname } from "next/navigation";
import { DashboardMenuUser, dashboardMenuUser } from "./dashboardMenuUser";
import { useEffect, useState } from "react";
import AddTeamMember from "../Controls/AddTeamMember/AddTeamMember";

const DashboardLayout = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  const basePath = pathname.startsWith("/admin") ? "/admin" : "/user";
  const currentMenu = pathname.startsWith("/admin")
    ? dashboardMenuAdmin
    : DashboardMenuUser();

  const isAdmin = pathname.startsWith("/admin");
  const isUser = pathname.startsWith("/user");

  const [activeMenu, setActiveMenu] = useState("");

  const [activePopup, setActivePopup] = useState(false);

  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDrawer2 = () => {
    setIsOpen2((prevState) => !prevState);
  };

  const handleThreeDots = (index) => {
    setActivePopup((prevState) => (prevState === index ? true : index));
  };

  useEffect(() => {
    const currentActiveMenu = currentMenu.find(
      (menu) => `${basePath}/${menu.linkTo}` === pathname
    );
    setActiveMenu(currentActiveMenu ? currentActiveMenu.linkTo : "");
  }, [pathname, currentMenu, basePath]);

  return (
    <div className="hidden md:block z-100 bg-[#F3F4F6]">
      {isOpen === true ? (
        <div className="w-[290px] min-h-screen  top-0 left-0 z-10 overflow-y-auto hidden md:block bg-white transition-all">
          <div
            className="py-6 px-3 md:px-4 lg:px-6 relative "
            style={{
              transform: "translate-x",
              transitionDuration: "0.3s",
              transformStyle: "ease-in-out",
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <Image src={logo} alt="logo" />
              <button onClick={() => setIsOpen(!isOpen)}>
                <Image src={arrowIcon} alt="Minimize Icon" className="w-10" />
              </button>
            </div>

            {isAdmin && <p className="text-center font-[700]">Admin Console</p>}
            <hr className="my-4" />
            {isAdmin && (
              <div className="flex flex-col items-center justify-center mb-12 mt-8">
                <Image src={profile} alt="profile" className="w-24" />
                <p className="font-[700] mt-4">MJ Dudu</p>
              </div>
            )}
            {isUser && (
              <div className="bg-[#F47108] rounded-lg h-[40px] flex items-center justify-center mt-[30px]">
                <div className="flex items-center justify-center gap-[6px]">
                  <Image src={plus} alt="plus" />
                  <h1 className="text-white">New Project</h1>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-6 mt-[50px]">
              {isUser && (
                <div className="flex items-center gap-[15px] mb-[20px]">
                  <Image src={cdown} />
                  <h1 className="text-[18px] font-bold text-[#212121]">
                    Accessible Projects
                  </h1>
                </div>
              )}
              {currentMenu?.slice(0, -1).map((menu, i) => (
                <div key={i}>
                  <Link
                    href={`${basePath}/${menu.linkTo}`}
                    className={`flex gap-3 items-center py-2 pl-4 relative  rounded-lg ${
                      activeMenu === menu.linkTo
                        ? "bg-[#FBFBFB] text-[#212121]"
                        : "bg-white text-[#6B6B6B]"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveMenu(menu.linkTo);
                    }}
                  >
                    {activeMenu === menu.linkTo && (
                      <Image
                        src={orLine}
                        alt="orline"
                        className="absolute left-0"
                      />
                    )}
                    <Image
                      src={menu.icon}
                      alt={menu.title}
                      className="w-[20px] h-[20px]"
                    />
                    <p className="text-[18px]">{menu.title}</p>
                    {activeMenu === menu.linkTo && (
                      <Image
                        onClick={() => handleThreeDots(i)}
                        src={threedot}
                        alt="threedot"
                        className="absolute right-[-10px]"
                      />
                    )}
                  </Link>

                  <AddTeamMember
                    isOpen2={isOpen2}
                    toggleDrawer2={toggleDrawer2}
                    setIsOpen2={setIsOpen2}
                  />

                  {isUser && (
                    <div>
                      {activePopup === i && (
                        <div className="absolute left-44   bg-white shadow-md rounded-md z-10  w-[110px] text-left">
                          <ul className="py-2 text-sm">
                            <li
                              className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer"
                              // onClick={() => handleEditControl(index)}
                              onClick={toggleDrawer2}
                            >
                              <Image src={share} alt="share" />
                              Share
                            </li>

                            <li
                              className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer"
                              // onClick={() => handleDeleteControl(index)}
                            >
                              <Image src={thrash} alt="thrash" />
                              Delete
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {isAdmin && (
              <div className="flex items-end justify-end absolute right-5 -bottom-8">
                <button className="flex items-center gap-2 text-sm">
                  <Image src={signOutIcon} />
                  <p className="text-[#FF404E]">Sign Out</p>
                </button>
              </div>
            )}
            {isUser && (
              <div className="mt-[120px] ml-[20px] cursor-pointer">
                <Image src={AI} alt="AI" />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div
          className="w-[95px] min-h-screen  top-0 left-0 z-10 overflow-y-auto hidden md:block bg-white relative"
          style={{
            transform: "translate-x",
            transitionDuration: "0.3s",
            transformStyle: "ease-in-out",
          }}
        >
          <div className="flex items-center justify-between gap-5 px-3 py-6">
            <Image src={pibicy} alt="pibicy icon" className="" />
            <button onClick={() => setIsOpen(!isOpen)}>
              <Image src={arrowRight} alt="Expand Icon" className="" />
            </button>
          </div>
          <hr className="border-t border-gray-200 py-4" />
          <div className="flex flex-col items-center justify-center gap-12 px-3 py-6">
            <Link href={`${basePath}/manage-app-users`} passHref>
              <button
                className="px-5 py-1 bg-[#F47108] rounded-lg"
                title="manage-app-users"
              >
                <IoMdAddCircleOutline className="text-[40px] w-6 text-white " />
              </button>
            </Link>

            <Link href={`${basePath}/manage-folder-action`} passHref>
              <button title="manage-folder-action">
                {activeMenu === "manage-folder-action" && (
                  <Image
                    src={orLine}
                    alt="orline"
                    className="absolute left-0"
                  />
                )}
                <Image
                  src={dropdownIcon}
                  alt="dropdown button"
                  className="w-6 mt-[12px]"
                />
              </button>
            </Link>

            <Link href={`${basePath}/billing-and-payments`} passHref>
              <button title="billing-and-payments">
                {activeMenu === "billing-and-payments" && (
                  <Image
                    src={orLine}
                    alt="orline"
                    className="absolute left-0"
                  />
                )}
                <Image src={brifcase} alt="Audit icon" />
              </button>
            </Link>

            <Link href={`${basePath}/company-profile`} passHref>
              <button title="company-profile">
                {activeMenu === "company-profile" && (
                  <Image
                    src={orLine}
                    alt="orline"
                    className="absolute left-0"
                  />
                )}
                <Image src={auditIcon} alt="Audit icon" />
              </button>
            </Link>

            <Link href={`${basePath}/permissions`} passHref>
              <button title="permissions">
                {activeMenu === "permissions" && (
                  <Image
                    src={orLine}
                    alt="orline"
                    className="absolute left-0"
                  />
                )}
                <Image src={auditIcon} alt="Audit icon" />
              </button>
            </Link>
          </div>

          {isUser && (
            <button
              className="absolute bottom-10 left-5 "
              title="Status update with AI"
            >
              <Image src={statusUpdate} alt="Audit icon" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
