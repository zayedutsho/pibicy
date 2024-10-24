import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import plus from "../../../assets/plus2.svg";
import searchButton from "../../../assets/search_button.svg";
import addTeam from "../../../assets/addTeam.svg";

const AddTeamMemberMobile = ({ isOpen2, setIsOpen2 }) => {
  if (!isOpen2) return null;

  const handleTeamMobileFormSubmit = (e) => {
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
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 mt-20 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-sm p-5 max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center pb-3">
          <h2 className="text-xl font-bold">Add Team Member</h2>
          <button
            onClick={() => setIsOpen2(false)}
            className="text-black text-xl"
          >
            &times; {/* Close button */}
          </button>
        </div>

        

        {/* control form */}
        <form onSubmit={handleTeamMobileFormSubmit}>
          {/* add control name box */}
          <div className="  relative">
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
              <button type="button" className="absolute bottom-[64px] right-2 ">
                <Image className="w-11" src={plus} alt="plus" />
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
              <button type="button" className="absolute bottom-[8px] right-2 ">
                <Image className="w-11" src={searchButton} alt="search_button" />
              </button>
            </div>
          </div>

          <hr className="my-4 " />

          <div className="  w-full ">
            {/* <hr className="w-full mb-6" /> */}
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

export default AddTeamMemberMobile;
