import React from "react";
import addCross from "../../../../assets/add-cross.svg";
import searchButton from "../../../../assets/search_button.svg";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const DocumentRequestDrawer = ({ isOpen3, toggleDrawer3, setIsOpen3 }) => {
  const router = useRouter();

  const handleDocumentFormSubmit = (e) => {
    e.preventDefault();
    toast.success("Document Created Successfully");
    e.target.reset();
    setIsOpen3(null);
    router.push("/user/document");
  };

  return (
    <div>
      <div
        className={`bg-white text-[#212121]  text-[16px] border   fixed top-20 right-0 z-10 h-full w-96  ${
          isOpen3 ? "translate-x-0" : "translate-x-full"
        }   transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4">
          <h5 className="text-lg font-bold">Create New Request</h5>
          <button className=" p-2 text-lg " onClick={toggleDrawer3}>
            <Image src={addCross} alt="add_cross" />
          </button>
        </div>
        <hr className="-mt-[14px]" />

        {/* control form */}
        <form onSubmit={handleDocumentFormSubmit}>
          {/* add control name box */}
          <div className="mt-4 p-4 relative">
            <p>Give your request a name</p>

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
        </form>
      </div>
    </div>
  );
};

export default DocumentRequestDrawer;
