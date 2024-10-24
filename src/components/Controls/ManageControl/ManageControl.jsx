"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import addCircle from "../../../assets/add-circle.svg";
import edit from "../../../assets/edit-2.svg";
import open from "../../../assets/open.svg";
import thrash from "../../../assets/trash.svg";
import { PiDotsThreeOutlineVerticalDuotone } from "react-icons/pi";
import { useRouter } from "next/navigation";

const ManageControl = ({ toggleDrawer }) => {
  const router = useRouter();
  // const newControls = JSON.parse(localStorage.getItem("newControl"));

  const [controls, setControls] = useState([]);

  const [projectTitles, setProjectTitles] = useState([]); // State to hold project titles

  useEffect(() => {
    // Fetch controls from localStorage on mount
    const newControls = JSON.parse(localStorage.getItem("newControl")) || [];
    setControls(newControls);

    // Fetch project titles from localStorage
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const titles = storedProjects.map((project) =>
      project.title.replace(/\s+/g, "-").toLowerCase()
    ); // Sanitize titles
    setProjectTitles(titles);
  }, []);

  // Fetch controls from localStorage on mount
  useEffect(() => {
    const newControls = JSON.parse(localStorage.getItem("newControl")) || [];
    setControls(newControls);
  }, []);

  const [activePopup, setActivePopup] = useState(null);
  const [editControlName, setEditControlName] = useState(null);

  const handleThreeDot = (index) => {
    setActivePopup((prevIndex) => (prevIndex === index ? null : index));
  };

  // const handleEditControlName = (index)=>{
  //   setEditControlName(index);
  //   setActivePopup(null)
  // }

  const handleEditControl = (index) => {
    console.log(`Edit Control Name at index: ${index}`);
    setEditControlName(index);
    setActivePopup(null); // Close the popup after action
  };

  const handleOpenControl = (index) => {
    console.log(`Open Control at index: ${index}`);
    setActivePopup(null); // Close the popup after action
  };

  const handleDeleteControl = (index) => {
    const updatedControls = [...controls];
    updatedControls.splice(index, 1); // Remove control at index
    setControls(updatedControls);
    localStorage.setItem("newControl", JSON.stringify(updatedControls));
  };

  const handleControlNameChange = (e, index) => {
    const updatedControls = [...controls];
    updatedControls[index].controlName = e.target.value;
    setControls(updatedControls);
    localStorage.setItem("newControl", JSON.stringify(updatedControls));
  };

  const handleOnKeyDown = (e, index) => {
    if (e.key === "Enter") {
      handleControlNameChange(e, index);
      setEditControlName(null);
    }
  };


  return (
    <div>
      <div className="lg:p-6">
        {/* <h1 className="text-xl font-semibold mb-4">Home / FS Control</h1> */}

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse  border-gray-300">
            <thead>
              <tr className="bg-[#212121] text-center  text-white font-normal">
                <th className="font-normal border-r-4 border-b-4 border-[#F3F4F6] bg-white text-[#525252]  text-center py-[18px] ">
                  S/N
                </th>
                <th className=" font-normal  border-r-4 border-b-4 border-[#fff]  text-white px-4 py-[18px] ">
                  Control Name
                </th>
                <th className=" font-normal border-r-4 border-b-4 border-[#fff] px-4 py-[18px] ">
                  Last Modified
                </th>
                <th className=" font-normal border-r-4 border-b-4 border-[#fff] px-4 py-[18px] ">
                  Owner Name
                </th>
                <th className=" font-normal border-r-4 border-b-4 border-[#fff] px-4 py-[18px] ">
                  Status
                </th>
                <th className=" font-normal border-r-4 border-b-4 border-[#fff] px-4 py-[18px] ">
                  Size
                </th>
                <th className=" font-normal border-r-4 border-b-4 border-[#F3F4F6] bg-white text-[#525252]  text-center py-[18px]"></th>
              </tr>
            </thead>
            <tbody>
              {controls?.map((item, index) => (
                <tr
                  onClick={() => {
                    if (editControlName !== index) {
                      const currentPath = router.pathname;
                      router.push(`projects/${item.id}`);
                    }
                  }}
                  key={index}
                  className="hover:bg-gray-50 cursor-pointer"
                >
                  <td className=" font-normal border-b bg-white text-[#525252] text-center py-2">
                    {index + 1}
                  </td>
                  <td className="bg-white border  border-[#E9E9E9] px-4 py-8">
                    {editControlName === index ? (
                      <input
                        type="text"
                        value={item.controlName}
                        onChange={(e) => {
                          e.stopPropagation();
                          handleControlNameChange(e, index);
                        }}
                        onKeyDown={(e) => {
                          e.stopPropagation();
                          handleOnKeyDown(e, index);
                        }}
                        className="w-full border px-2 py-1"
                      />
                    ) : (
                      item.controlName
                    )}
                  </td>
                  <td className="bg-white border border-[#E9E9E9] px-4 py-8">
                    {item.lastModified}
                  </td>
                  <td className="bg-white border border-[#E9E9E9] px-4 py-8">
                    {item.ownerName}
                  </td>
                  <td className="bg-white border border-[#E9E9E9] px-4 py-8">
                    {item.status}
                  </td>
                  <td className="bg-white border border-[#E9E9E9] px-4 py-8">
                    {item.size}
                  </td>
                  <td className="font-normal border-b bg-white  cursor-pointer text-[#525252] text-center py-2 px-2 lg:px-1">
                    <PiDotsThreeOutlineVerticalDuotone
                      onClick={(e) => {
                        e.stopPropagation();
                        handleThreeDot(index);
                      }}
                      className="text-2xl  mx-auto"
                    />

                    {/* Popup Dropdown */}
                    {activePopup === index && activePopup !== null && (
                      <div className="absolute right-14 lg:right-24   bg-white shadow-md rounded-md z-10 mt-2 w-[164px] text-left">
                        <ul className="py-2 text-sm">
                          <li
                            className="px-4 py-2 flex items-center gap-1 hover:bg-gray-100 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEditControl(index);
                            }}
                          >
                            <Image src={edit} alt="edit" />
                            Edit control name
                          </li>
                          <li
                            className="px-4 py-2 flex items-center gap-1 hover:bg-gray-100 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenControl(index);
                            }}
                          >
                            <Image src={open} alt="open" />
                            Open
                          </li>
                          <li
                            className="px-4 py-2 flex items-center gap-1 hover:bg-gray-100 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteControl(index);
                            }}
                          >
                            <Image src={thrash} alt="thrash" />
                            Delete
                          </li>
                        </ul>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-1  flex items-center ">
          <div className="w-9 lg:w-[54px] px-4 py-6 border-r-4 border-[#F3F4F6] text-[#4C515B] bg-white"></div>
          <button
            onClick={toggleDrawer}
            className=" px-4 py-3 flex items-center gap-1 text-[#4C515B] bg-white rounded w-full"
          >
            <Image src={addCircle} alt="add_circle" />
            New Control
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageControl;
