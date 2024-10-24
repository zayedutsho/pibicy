"use client";
import fileIcon from "../../../../../../assets/icons/file.svg";
import filterIcon from "../../../../../../assets/icons/filter.png";
import tickIcon from "../../../../../../assets/icons/tick-circle.svg";
import closeIcon from "../../../../../../assets/icons/close-circle.svg";
import AddUserModal from "../../../../../../components/Modal/AddUserModal";
import { userData } from "../../../../../../data/index";
import Image from "next/image";
import { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";

const UsersList = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedAccessTypes, setSelectedAccessTypes] = useState({
    admin: true,
    primary: true,
    secondary: true,
  });
  const [billingStatus, setBillingStatus] = useState({
    active: false,
    deactivated: false,
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const filterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleAccessTypeChange = (type) => {
    setSelectedAccessTypes({
      ...selectedAccessTypes,
      [type]: !selectedAccessTypes[type],
    });
  };

  const handleBillingStatusChange = (status) => {
    setBillingStatus({
      ...billingStatus,
      [status]: !billingStatus[status],
    });
  };

  return (
    <div className="p-6 ">
      <div className="relative md:hidden">
        {!isFocused && (
          <FaSearch className="z-0 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-black" />
        )}
        <input
          type="text"
          placeholder="Search user by name or email..."
          className={`py-2 ${
            isFocused ? "pl-4" : "pl-10"
          } w-full pr-4 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button
          className="absolute  right-3 top-1/2 transform -translate-y-3 text-gray-400 w-8 h-4 bg-gray-200 rounded-lg"
          onClick={filterToggle}
        >
          <Image src={filterIcon} alt="filter" className="" />
        </button>
      </div>
      <h2 className="text-[24px] font-[700] mb-6 mt-[24px] md:mt-[0px]">
        Manage App Users
      </h2>
      <div className="md:flex md:flex-row items-center justify-between">
        <div className="text-left mt-4 md:mt-0">
          <button className="hidden md:flex items-center gap-2">
            <Image src={fileIcon} alt="Export" />
            <p className="text-[14px] text-[#2E31AE] font-[500]">
              Export full user list
            </p>
          </button>
        </div>
        <div className="flex items-center justify-between md:gap-4">
          <div className="relative hidden md:block">
            {!isFocused && (
              <FaSearch className="z-0 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-black" />
            )}
            <input
              type="text"
              placeholder="Search user by name or email..."
              className={`py-2 ${
                isFocused ? "pl-4" : "pl-10"
              } md:w-[334px] pr-4 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black`}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <button
              className="absolute  right-3 top-1/2 transform -translate-y-3 text-gray-400 w-8 h-4 bg-gray-200 rounded-lg"
              onClick={filterToggle}
            >
              <Image src={filterIcon} alt="filter" className="" />
            </button>
          </div>
          <button className="flex md:hidden items-center gap-2">
            <Image src={fileIcon} alt="Export" />
            <p className="text-[14px] text-[#2E31AE] font-[500]">
              Export full user list
            </p>
          </button>
          <div className="bg-black text-white rounded-lg">
            <button
              onClick={toggleModal}
              className="flex gap-2 items-center py-3 px-3 text-xs md:text-[16px]"
            >
              <FaPlus />
              <p>Add New User</p>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Dropdown */}
      {isFilterOpen && (
        <div className="absolute right-[12%] mt-[-110px] md:mt-2 w-64 md:w-[329px] bg-white rounded-lg md:rounded-3xl shadow-lg p-4 md:p-8 z-50">
          <h4 className="font-semibold mb-2">Filter by</h4>
          <hr className="border-gray-300" />
          <div className="mb-4 mt-4">
            <h5 className="font-normal text-[#6B7280]">Billing Status</h5>
            <div className="flex flex-col mt-3">
              {["Admin", "Primary", "Secondary"].map((status) => (
                <label
                  key={status}
                  className="flex items-center mb-2 mt-2 cursor-pointer"
                  onClick={() => handleBillingStatusChange(status)}
                >
                  <span
                    className={`relative inline-block w-6 h-6 rounded transition-all 
                        ${
                          billingStatus[status]
                            ? "bg-orange-500"
                            : "bg-[#F3F4F6] border"
                        }`}
                  >
                    {billingStatus[status] && (
                      <span className="absolute inset-0 flex items-center justify-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 10.293l1.293 1.293 4-4 1.414 1.414-5.414 5.414-2.707-2.707z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    )}
                  </span>
                  <span className="ml-2">
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h5 className="font-normal text-[#6B7280]">Billing Status</h5>
            <div className="flex flex-col mt-3">
              {["active", "deactivated"].map((status) => (
                <label
                  key={status}
                  className="flex items-center mb-2 mt-2 cursor-pointer"
                  onClick={() => handleBillingStatusChange(status)}
                >
                  <span
                    className={`relative inline-block w-6 h-6 rounded transition-all 
                        ${
                          billingStatus[status]
                            ? "bg-orange-500"
                            : "bg-[#F3F4F6] border"
                        }`}
                  >
                    {billingStatus[status] && (
                      <span className="absolute inset-0 flex items-center justify-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 10.293l1.293 1.293 4-4 1.414 1.414-5.414 5.414-2.707-2.707z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    )}
                  </span>
                  <span className="ml-2">
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="md:mt-[50px] flex items-center justify-center gap-2 md:gap-6">
            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-1">
              <Image src={tickIcon} alt="" />
              Apply
            </button>
            <button
              className="bg-gray-200 text-black px-4 py-2 rounded-lg flex items-center gap-1"
              onClick={filterToggle}
            >
              <Image src={closeIcon} alt="" />
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Modal for adding a new user */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 md:mt-12">
          <AddUserModal toggleModal={toggleModal} />
        </div>
      )}

      <div className="overflow-x-auto mt-6">
        <table className="w-full table-auto border-collapse  border-gray-300 text-xs md:text-[16px]">
          <thead>
            <tr className="text-white">
              <th className=" text-left z-0">
                <div className="bg-black mr-2 mb-1 w-full h-12 md:h-full px-3 py-3 flex items-center">
                  Users Name
                </div>
              </th>

              <th className=" text-left">
                <div className="bg-black mr-2 mb-1 w-full md:w-full h-12 md:h-full px-3 py-3 flex items-center">
                  Email
                </div>
              </th>

              <th className=" text-left">
                <div className="bg-black mr-2 mb-1 w-full h-12 md:h-full px-3 py-3 flex items-center">
                  Access Type
                </div>
              </th>

              <th className=" text-left">
                <div className="bg-black mr-2 mb-1 w-full h-12 md:h-full px-3 py-3 flex items-center">
                  Billing Status
                </div>
              </th>

              <th className=" text-left">
                <div className="bg-black mr-2 mb-1 w-full h-12 md:h-full px-3 py-3 flex items-center">
                  Date Added
                </div>
              </th>

              <th className=" text-left">
                <div className="bg-black mb-1 w-full h-12 md:h-full px-3 py-3 flex items-center">
                  Billing Expiration Date
                </div>
              </th>
            </tr>
          </thead>
          {userData?.map((user, i) => (
            <tbody key={i}>
              <tr className="h-12 md:h-full">
                {/* User Name */}
                <td className="h-12">
                  <div className="hidden px-3 pr-4 py-2 w-full md:flex flex-col md:flex-row items-center mr-2 bg-white relative z-0 h-full">
                    <Image
                      src={user?.profile}
                      alt={user?.name}
                      className="rounded-full w-8 h-8 mr-2"
                    />
                    <span>{user?.name}</span>
                    <button className="text-gray-400 md:absolute right-3 top-[25%]">
                      •••
                    </button>
                  </div>
                  <div className="px-3 pr-4 py-2 w-full md:hidden flex-col md:flex-row items-center mr-2 bg-white relative z-0 h-full">
                    <div className="flex items-center justify-between">
                      <Image
                        src={user?.profile}
                        alt={user?.name}
                        className="rounded-full w-8 h-8 mr-2"
                      />
                      <button className="text-gray-400 absolute right-1 top-[24%] transform rotate-90">
                        •••
                      </button>
                    </div>
                    <span>{user?.name}</span>
                  </div>
                </td>

                {/* Email */}
                <td className="h-12">
                  <div className="bg-white py-3 w-full md:w-full truncate h-full flex items-center">
                    <p className="mx-3">{user?.email}</p>
                  </div>
                </td>

                {/* Access Type */}
                <td className="h-12">
                  <div className="bg-white py-3 h-full flex items-center">
                    <p className="mx-3">{user?.access_type}</p>
                  </div>
                </td>

                {/* Billing Status */}
                <td className="h-12">
                  <div className="bg-white py-3 h-full flex items-center">
                    <p className="mx-3">{user?.billing_status}</p>
                  </div>
                </td>

                {/* Date Added */}
                <td className="h-12">
                  <div className="bg-white py-3 h-full flex items-center">
                    <p className="mx-3">{user?.date}</p>
                  </div>
                </td>

                {/* Billing Expiration Date */}
                <td className="h-12">
                  <div className="bg-white py-3 h-full flex items-center">
                    <p className="mx-3">{user?.expiration_date}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default UsersList;
