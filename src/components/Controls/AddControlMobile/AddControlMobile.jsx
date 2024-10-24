import React from "react";
import searchButton from "../../../assets/search_button.svg";
import Image from "next/image";
import toast from "react-hot-toast";

const AddControlMobile = ({ isOpen, setIsOpen }) => {
  const handleControlFormMobileSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const controlName = form.controlName.value;
    const ownerName = form.ownerName.value;
    const status = form.status.value;
    const lastModified = form.lastModified.value;
    const size = form.size.value;

    // const newControl = { controlName, ownerName, status, lastModified, size };

    let controlsArray = JSON.parse(localStorage.getItem("newControl")) || [];

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
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 mt-20 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-sm p-5 max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center pb-3">
          <h2 className="text-xl font-bold">Create New Control</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-black text-xl"
          >
            &times; {/* Close button */}
          </button>
        </div>

        {/* Content */}
        <p className="text-sm text-gray-600 mb-4">Give your control a name</p>

        <form onSubmit={handleControlFormMobileSubmit}>
          {/* Form */}
          <div className="mb-3 relative">
            <textarea
              type="text"
              name="controlName"
              rows={4}
              className="w-full p-2 border rounded-md mb-2"
            />
            <button
              type="submit"
              className="absolute bottom-0 right-0 text-white px-3 py-2 rounded-md mb-4 flex items-center justify-center"
            >
              <Image src={searchButton} alt="search_button" />
            </button>
          </div>

          <hr className="my-4" />
          {/* Control name output */}
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

export default AddControlMobile;
