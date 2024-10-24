"use client";
import Image from "next/image";
import React, { useState } from "react";
import controlSearch from "../../assets/controlSearch.svg";
import addCircle from "../../assets/add-circle.svg";

import UsersDrawer from "../Users/UsersDrawer";
import UsersMobileModal from "../Users/UsersMobileModal";
import { Toaster } from "react-hot-toast";

const UsersHome = () => {
  const [isOpen4, setIsOpen4] = useState(null);

  const toggleDrawer4 = () => {
    setIsOpen4((prevState) => !prevState);
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-12 lg:pt-14 ">
        <Image src={controlSearch} width={240} alt="control_search" />

        <h4 className="text-xl font-bold text-[#212121] my-2">Projects</h4>
        <p className="text-[#525252] lg:w-1/4 mx-auto text-center ">
          There are no projects for this control yet. Start by creating one!
        </p>
        <button
          onClick={toggleDrawer4}
          className="border rounded-3xl px-2 mt-4 flex items-center gap-1 py-1"
        >
          <Image src={addCircle} alt="add_circle" />
          New Projects
        </button>
      </div>

      <div className="hidden lg:flex">
        <UsersDrawer
          isOpen4={isOpen4}
          setIsOpen4={setIsOpen4}
          toggleDrawer4={toggleDrawer4}
        />
      </div>

      <div className="flex lg:hidden">
        <UsersMobileModal
          isOpen4={isOpen4}
          setIsOpen4={setIsOpen4}
          toggleDrawer4={toggleDrawer4}
        />
      </div>

      <Toaster />
    </div>
  );
};

export default UsersHome;
