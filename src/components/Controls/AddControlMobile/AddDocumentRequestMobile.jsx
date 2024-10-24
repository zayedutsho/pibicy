import Image from "next/image";
import React from "react";
import searchButton from "../../../assets/search_button.svg";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddDocumentRequestMobile = ({ isOpen3, setIsOpen3, toggleDrawer3 }) => {
  const router = useRouter();
  if (!isOpen3) return null;
  const handleDocumentFormMobileSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const requestName = form.requestName.value;

    console.log(requestName);

    form.reset();

    toast.success("Document Created Successfully");

    setIsOpen3(false);
    router.push("/user/document");
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 mt-20 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-sm p-5 max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center pb-3">
          <h2 className="text-xl font-bold">Create New Request</h2>
          <button
            onClick={() => setIsOpen3(false)}
            className="text-black text-xl"
          >
            &times; {/* Close button */}
          </button>
        </div>

        {/* Content */}
        <p className="text-sm text-gray-600 mb-4">Give your request a name</p>

        <form onSubmit={handleDocumentFormMobileSubmit}>
          {/* Form */}
          <div className="mb-3 relative">
            <textarea
              type="text"
              name="requestName"
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

export default AddDocumentRequestMobile;
