"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import React from "react";
import magnifying from "../../../assets/magnifying-glass-mini.svg";
import search from "../../../assets/search.png";
import controlSearch from "../../../assets/controlSearch.svg";
import addCircle from "../../../assets/add-circle.svg";

import AddControls from "../AddControls/AddControls";
import ManageControl from "../ManageControl/ManageControl";
import AddTeamMember from "../AddTeamMember/AddTeamMember";
import AddControlMobile from "../AddControlMobile/AddControlMobile";
import AddTeamMemberMobile from "../AddControlMobile/AddTeamMemberMobile";
import { Toaster } from "react-hot-toast";

const ControlHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  // const newControls = JSON.parse(localStorage.getItem("newControl"));

  const [controls, setControls] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Now it's safe to use localStorage
      const newControls = JSON.parse(localStorage.getItem("newControl")) || [];
      setControls(newControls);
    }
  }, []);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleDrawer2 = () => {
    setIsOpen2((prevState) => !prevState);
  };

  console.log(controls);

  return (
    <div className="px-4 lg:px-8 pb-8 pt-2 ">
      <div className="flex justify-between items-center py-2 border-b border-b-gray92 mb-12">
        <h1 className="text-charcoal text-2xl font-bold">(Company Name)</h1>
        <div className="flex items-center gap-[0.62rem] py-2 px-3 rounded-md border border-pale_blue">
          <Image src={magnifying} alt="search-icon" />
          <input
            type="text"
            placeholder="Find document request"
            className="w-full h-full outline-none border-none bg-transparent placeholder:text-charcoal placeholder:text-sm"
          />
          <div>
            <Image src={search} alt="search" />
          </div>
        </div>
      </div>

      {/* <button
        onClick={toggleDrawer2}
        className="bg-orange-500 py-2 px-5 lg:ml-5 mb-4 lg:mb-0 rounded-lg text-white"
      >
        Add Team Member
      </button> */}

      {controls.length === 0 ? (
        <div className="flex flex-col items-center justify-center pt-12 lg:pt-14 ">
          <Image src={controlSearch} width={210} alt="control_search" />
          <h4 className="text-xl font-bold text-[#212121] my-2">Controls</h4>
          <p className="text-[ #525252] lg:w-1/4 mx-auto text-center ">
            There are no controls for this project yet. Start by creating one!
          </p>
          <button
            onClick={toggleDrawer}
            className="border rounded-3xl px-2 mt-4 flex items-center gap-1 py-1"
          >
            <Image src={addCircle} alt="add_circle" />
            New Control
          </button>
        </div>
      ) : (
        <ManageControl toggleDrawer={toggleDrawer} />
      )}

      {/* Add control modal */}
      <div className="hidden lg:flex">
        <AddControls
          isOpen={isOpen}
          toggleDrawer={toggleDrawer}
          setIsOpen={setIsOpen}
        />
      </div>

      <div className="hidden lg:flex">
      <AddTeamMember
        isOpen2={isOpen2}
        toggleDrawer2={toggleDrawer2}
        setIsOpen2={setIsOpen2}
      />
      </div>

      {/* for mobile device */}
      <div className="flex lg:hidden">
        <AddControlMobile
          isOpen={isOpen}
          // toggleDrawer={toggleDrawer}
          setIsOpen={setIsOpen}
        />
      </div>
      <div className="flex lg:hidden">
        <AddTeamMemberMobile
          isOpen2={isOpen2}
          // toggleDrawer={toggleDrawer}
          setIsOpen2={setIsOpen2}
        />
      </div>
      <Toaster />
    </div>
  );
};

export default ControlHome;
