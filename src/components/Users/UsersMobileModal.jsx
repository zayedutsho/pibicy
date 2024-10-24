import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import searchButton from "../../assets/search_button.svg";

const UsersMobileModal = ({ isOpen4, setIsOpen4, toggleDrawer4 }) => {
  if (!isOpen4) return null;
  const handleProjectFormMobileSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const projectName = form.projectName.value;

    console.log(projectName);

    form.reset();

    toast.success("Project Created Successfully");

    setIsOpen4(false);
  };
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 mt-20 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-sm p-5 max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center pb-3">
          <h2 className="text-xl font-bold">Create New Project</h2>
          <button
            onClick={() => setIsOpen4(false)}
            className="text-black text-xl"
          >
            &times; {/* Close button */}
          </button>
        </div>

        {/* Content */}
        <p className="text-sm text-gray-600 mb-4">Give your project a name</p>

        <form onSubmit={handleProjectFormMobileSubmit}>
          {/* Form */}
          <div className="mb-3 relative">
            <textarea
              type="text"
              name="projectName"
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
        </form>
      </div>
    </div>
  );
};

export default UsersMobileModal;
