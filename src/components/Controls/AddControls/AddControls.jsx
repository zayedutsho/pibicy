"use client";

import React from "react";
import addCross from "../../../assets/add-cross.svg";
import Image from "next/image";
import searchButton from "../../../assets/search_button.svg";
import toast from "react-hot-toast";

const AddControls = ({ isOpen, toggleDrawer, setIsOpen }) => {
  const handleControlFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const controlName = form.controlName.value;
    const ownerName = form.ownerName.value;
    const status = form.status.value;
    const lastModified = form.lastModified.value;
    const size = form.size.value;

    // const newControl = { controlName, ownerName, status, lastModified, size };

    let controlsArray = JSON.parse(localStorage.getItem("newControl")) || [];

    // Determine the new ID (incremented from the last ID or start from 1 if empty)
    const newId =
      controlsArray.length > 0
        ? controlsArray[controlsArray.length - 1].id + 1
        : 1;

    // Create new control with incremented ID
    const newControl = {
      id: newId,
      controlName,
      ownerName,
      status,
      lastModified,
      size,
    };

    controlsArray.push(newControl);

    localStorage.setItem("newControl", JSON.stringify(controlsArray));

    form.reset();

    toast.success("Created Successfully");

    setIsOpen(false);
  };
  return (
    <div>
      <div
        className={`bg-white text-[#212121]  text-[16px] border   fixed top-20 right-0 z-10 h-full w-96  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }   transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4">
          <h5 className="text-lg font-bold">Create New Control</h5>
          <button className=" p-2 text-lg " onClick={toggleDrawer}>
            <Image src={addCross} alt="add_cross" />
          </button>
        </div>
        <hr className="-mt-[14px]" />

        {/* control form */}
        <form onSubmit={handleControlFormSubmit}>
          {/* add control name box */}
          <div className="mt-4 p-4 relative">
            <p>Give your control a name</p>

            {/* text area to add control name */}
            <textarea
              name="controlName"
              id=""
              rows="4"
              className="border w-full rounded-2xl mt-2 p-4  outline-none"
            />
            <button type="submit" className="absolute bottom-8 right-6 ">
              <Image src={searchButton} alt="search_button" />
            </button>
          </div>

          <hr className="my-6" />

          {/* control name output */}
          <div className="p-4 text-[#666] space-y-[30px]">
            <p className="grid grid-cols-2 gap-16">
              <label>Owner Name</label>
              <input
                name="ownerName"
                type="text"
                value="Samuel Jameson"
                className="outline-none text-[#212121]"
              />
            </p>
            <p className="grid grid-cols-2 gap-16">
              <label>Status</label>
              <input
                name="status"
                type="text"
                value="--"
                className="outline-none text-[#212121]"
              />
            </p>
            <p className="grid grid-cols-2 gap-16">
              <label>Last Modified</label>
              <input
                name="lastModified"
                type="text"
                value="--"
                className="outline-none text-[#212121]"
              />
            </p>
            <p className="grid grid-cols-2 gap-16">
              <label>Size</label>
              <input
                name="size"
                type="text"
                value="--"
                className="outline-none text-[#212121]"
              />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddControls;
