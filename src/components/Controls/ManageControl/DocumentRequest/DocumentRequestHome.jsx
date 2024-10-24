"use client";
import React, { useState } from "react";
import controlSearch from "../../../../assets/controlSearch.svg";
import addCircle from "../../../../assets/add-circle.svg";
import DocumentRequestDrawer from "./DocumentRequestDrawer";
import AddDocumentRequestMobile from "../../AddControlMobile/AddDocumentRequestMobile";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

const DocumentRequestHome = () => {
  const [isOpen3, setIsOpen3] = useState(null);

  const toggleDrawer3 = () => {
    setIsOpen3((prevState) => !prevState);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-12 lg:pt-14 ">
        <Image src={controlSearch} width={240} alt="control_search" />

        <h4 className="text-xl font-bold text-[#212121] my-2">
          Document Request
        </h4>
        <p className="text-[#525252] lg:w-1/4 mx-auto text-center ">
          There are no request for this control yet. Start by creating one!
        </p>
        <button
          onClick={toggleDrawer3}
          className="border rounded-3xl px-2 mt-4 flex items-center gap-1 py-1"
        >
          <Image src={addCircle} alt="add_circle" />
          New Request
        </button>
      </div>

      <div className="hidden lg:flex">
        <DocumentRequestDrawer
          isOpen3={isOpen3}
          toggleDrawer3={toggleDrawer3}
          setIsOpen3={setIsOpen3}
        />
      </div>

      <div className="flex lg:hidden">
        <AddDocumentRequestMobile
          isOpen3={isOpen3}
          setIsOpen3={setIsOpen3}
          toggleDrawer3={toggleDrawer3}
        />
      </div>

      <Toaster />
    </div>
  );
};

export default DocumentRequestHome;
