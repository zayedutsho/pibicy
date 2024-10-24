import React from "react";
import addCross from "../../assets/add-cross.svg";
import searchButton from "../../assets/search_button.svg";
import Image from "next/image";
import toast from "react-hot-toast";

const UsersDrawer = ({ isOpen4, toggleDrawer4, setIsOpen4 }) => {
  const handleProjectFormSubmit = (e) => {
    e.preventDefault();
    
    const projectName = e.target.controlName.value;
    
    if (projectName.trim()) {
      // Get existing projects from localStorage, or initialize an empty array
      const existingProjects = JSON.parse(localStorage.getItem("projects")) || [];
      
      // Add new project to the array
      const updatedProjects = [...existingProjects, { title: projectName }];
      
      // Save updated array back to localStorage
      localStorage.setItem("projects", JSON.stringify(updatedProjects));
      
      toast.success("Project Created Successfully");
      
      // Reset the form and close the drawer
      e.target.reset();
      setIsOpen4(false);
    } else {
      toast.error("Project name cannot be empty");
    }
  };

  return (
    <div>
      <div
        className={`bg-white text-[#212121]  text-[16px] border   fixed top-20 right-0 z-10 h-full w-96  ${
          isOpen4 ? "translate-x-0" : "translate-x-full"
        }   transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4">
          <h5 className="text-lg font-bold">Create New Project</h5>
          <button className=" p-2 text-lg " onClick={toggleDrawer4}>
            <Image src={addCross} alt="add_cross" />
          </button>
        </div>
        <hr className="-mt-[14px]" />

        {/* Project form */}
        <form onSubmit={handleProjectFormSubmit}>
          {/* Add project name box */}
          <div className="mt-4 p-4 relative">
            <p>Give your project a name</p>

            {/* Text area to add project name */}
            <textarea
              name="controlName"
              id="controlName"
              rows="4"
              className="border w-full rounded-2xl mt-2 p-4  outline-none"
              placeholder="Enter project name"
            />
            <button type="submit" className="absolute bottom-8 right-6">
              <Image src={searchButton} alt="search_button" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UsersDrawer;
