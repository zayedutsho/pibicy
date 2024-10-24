"use client";

import React from "react";
import addCross from "../../../assets/add-cross.svg";
import Image from "next/image";
import searchButton from "../../../assets/search_button.svg";
import plus from "../../../assets/plus2.svg";
import addTeam from "../../../assets/addTeam.svg";
import toast from "react-hot-toast";

const AddTeamMember = ({ isOpen2, toggleDrawer2, setIsOpen2 }) => {
  const handleTeamFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const note = form.addNote.value;
    const email = form.addByEmail.value;

    console.log(note, email);

    form.reset();

    toast.success("Added Successfully");

    setIsOpen2(false);
  };
  return (
    <div>
      <div
        className={`bg-white text-[#212121]  text-[16px] border   fixed top-20 right-0 z-10 h-full w-96  ${
          isOpen2 ? "translate-x-0" : "translate-x-full"
        }   transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4">
          <h5 className="text-lg font-bold">Add Team Member</h5>
          <button className=" p-2 text-lg " onClick={toggleDrawer2}>
            <Image src={addCross} alt="add_cross" />
          </button>
        </div>
        <hr className="-mt-[14px]" />

        {/* control form */}
        <form onSubmit={handleTeamFormSubmit}>
          {/* add control name box */}
          <div className=" p-4 relative">
            <p>
              Add a team member to this Project. They&apos;ll be able to view &
              edit all requests in this project
            </p>

            {/* text area to add control name */}
            <div>
              <input
                name="addNote"
                type="text"
                id=""
                placeholder="Add A Note"
                className="border w-full rounded-lg mt-4 px-4 py-2  outline-none"
              />
              <button type="button" className="absolute bottom-[76px] right-6 ">
                <Image src={plus} alt="plus" />
              </button>
            </div>
            <div>
              <input
                name="addByEmail"
                type="email"
                id=""
                placeholder="Add by email"
                className="border w-full rounded-lg mt-4 px-4 py-2  outline-none"
              />
              <button type="button" className="absolute bottom-[22px] right-6 ">
                <Image src={searchButton} alt="search_button" />
              </button>
            </div>
          </div>

          <hr className="my-4 min-h-56" />

          <div className="  w-full fixed">
            <hr className="w-full mb-6" />
            <button
              type="submit"
              className="flex items-center ml-4  gap-1  rounded-lg bg-[#22C55E] py-2 px-3 text-white"
            >
              <Image src={addTeam} alt="add_team" />
              Add Team
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeamMember;
