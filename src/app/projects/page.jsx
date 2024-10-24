"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import dot from "../../assets/3dot.svg";
import dotGray from "../../assets/3dotGray.svg";
import add from "../../assets/add.svg";
import clock from "../../assets/clock.svg";
import close from "../../assets/close.svg";
import directRight from "../../assets/direct-right.svg";
import download from "../../assets/download.svg";
import eye from "../../assets/eye.svg";
import hide from "../../assets/hide.svg";
import magnifying from "../../assets/magnifying-glass-mini.svg";
import noEntry from "../../assets/no-entry.svg";
import plus from "../../assets/plus.svg";
import search from "../../assets/search.png";
import share from "../../assets/share.svg";
import trash from "../../assets/trash.svg";
import union from "../../assets/Union.svg";
import file from "../../assets/upload-file.png";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    ["link", "image"],
  ],
};

const formats = [
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "align",
  "link",
  "image",
];

// RequestCard component
const RequestCard = ({
  content,
  isAddSample,
  onToggleModal,
  isModalOpen,
  onCommentClick,
}) => (
  <div
    className={`p-4 rounded-lg flex justify-between items-start ${
      isAddSample ? "bg-pumpkin_orange" : "bg-neutral-light"
    }`}
  >
    <p
      className={
        isAddSample ? "text-white text-center" : "text-light_charcoal text-base"
      }
    >
      {content}
    </p>
    {!isAddSample && (
      <div className="relative">
        <div className="w-6">
          <Image
            src={dotGray}
            alt="3dot"
            className="cursor-pointer w-full"
            onClick={onToggleModal}
          />
        </div>
        {isModalOpen && (
          <div className="absolute right-0 top-8 bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-3 z-50 w-48">
            <ul className="space-y-2">
              <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md">
                <Image src={add} alt="add attachment" />
                <span className=" text-charcoal text-sm">
                  Attach Example File
                </span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md">
                <Image src={hide} alt="hide" />
                <span className=" text-charcoal text-sm">Hide</span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md">
                <Image src={trash} alt="trash" />
                <span className=" text-charcoal text-sm">Delete</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    )}
  </div>
);

// RequestPlaceholder component
const RequestPlaceholder = ({ data, comments, onCommentClick }) => (
  <div className="py-7 rounded-lg flex justify-center items-center relative border border-light_charcoal">
    <div
      className={`flex items-center gap-1 px-7 py-2 rounded-[1.125rem] ${
        data === "pending"
          ? "bg-light_golden_tint"
          : data === "uploaded"
          ? "bg-fresh_green"
          : "bg-pale_rose"
      }`}
    >
      <Image
        src={data === "pending" ? clock : data === "uploaded" ? file : noEntry}
        alt={data}
      />
      <p
        className={`capitalize ${
          data === "pending"
            ? "text-ronchi"
            : data === "uploaded"
            ? "text-ocean_green"
            : "text-torch_red"
        }`}
      >
        {data}
      </p>
    </div>

    {/* Show comment indicator if comments exist */}
    {comments > 0 && (
      <div
        onClick={onCommentClick}
        className="absolute left-2 top-2 flex items-center gap-1 cursor-pointer"
      >
        <Image src={eye} alt="eye icon" />
        <p className=" text-sm">Open</p>
        <span className=" relative">
          <p className=" absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-sm">
            {comments}
          </p>
          <Image src={union} alt="union" />
        </span>
      </div>
    )}
    <Image src={dotGray} alt="3dot" className="absolute right-4 top-4" />
  </div>
);

// CommentSidebar component
const CommentSidebar = ({ isOpen, onClose }) => {
  const [comment, setComment] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 bottom-0 w-[24rem] bg-white shadow-lg py-3 z-50 border-l border-gray-300">
      <div className="flex justify-between items-center pb-4 mb-4 border-b border-b-gray92">
        <h2 className="text-lg font-bold pl-3">Comments</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 pr-3"
        >
          <Image src={close} alt="close icon" />
        </button>
      </div>

      <div className="space-y-6 px-3 mt-8">
        {/* Comment section */}
        <div className="flex items-start gap-2">
          <div className="relative flex items-center justify-center w-10 h-10 text-purple-800 font-bold">
            <div
              className="absolute rounded-full w-12 h-12"
              style={{
                background:
                  "linear-gradient(205.96deg, #FFA7D7 7.6%, #CEA7FF 87.33%)",
              }}
            ></div>
            <div className="relative flex items-center justify-center w-10 h-10 bg-wild_sand rounded-full z-10 text-boulder">
              SO
            </div>
          </div>

          <div>
            <p className=" text-charcoal text-base mb-2">Samuel Jameson</p>
            <p className="text-emperor text-base">
              There are no requests for this control yet. Start by creating one!
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <div className="relative flex items-center justify-center w-10 h-10 text-purple-800 font-bold">
            <div
              className="absolute rounded-full w-12 h-12"
              style={{
                background:
                  "linear-gradient(205.96deg, #FFA7D7 7.6%, #CEA7FF 87.33%)",
              }}
            ></div>
            <div className="relative flex items-center justify-center w-10 h-10 bg-wild_sand rounded-full z-10 text-boulder">
              OD
            </div>
          </div>

          <div>
            <p className=" text-charcoal text-base mb-2">Ana Kendrick</p>
            <p className="text-emperor text-base">How do i do that?</p>
          </div>
        </div>

        <p className="text-base text-charcoal mt-[4.3rem] mb-3">
          Use this space to collaborate with your team. Add context or discuss
          details related to this control.
        </p>

        {/* Rich text editor (React Quill) */}
        <div className="mt-6 relative">
          <ReactQuill
            value={comment}
            onChange={setComment}
            modules={modules}
            formats={formats}
            className="h-32 text-sm"
            placeholder="Use this space to collaborate with your team. Add context or discuss details related to this control."
          />

          {/* Action button */}
          <button className="mt-3  bg-green-500 text-white px-4 py-[0.3rem] rounded-md flex justify-center items-center absolute right-[0.3rem] -bottom-[2.3rem]">
            <Image src={directRight} alt="button" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Projects component (main component)
export default function Projects() {
  const [rows, setRows] = useState(2);
  const [modalOpenIndex, setModalOpenIndex] = useState(null);
  const [commentsArray, setCommentsArray] = useState([0, 0]);
  const [requestModal, setRequestModal] = useState(false);
  const [isCommentSidebarOpen, setCommentSidebarOpen] = useState(false);

  const handleAddRow = () => {
    setRows(rows + 1);
    setCommentsArray((prev) => [...prev, 0]);
  };

  const handleToggleModal = (index) => {
    setModalOpenIndex(modalOpenIndex === index ? null : index);
  };

  const handleCommentClick = () => {
    setCommentSidebarOpen(true);
  };

  const handleCloseCommentSidebar = () => {
    setCommentSidebarOpen(false);
  };

  const renderRequestItems = (i) => {
    switch (i) {
      case 1:
        return (
          <div
            key={i}
            className="bg-pumpkin_orange p-4 rounded-lg flex justify-center items-center"
          >
            <p className="text-white text-base">Add Sample Name</p>
          </div>
        );
      case 2:
        return (
          <RequestPlaceholder
            key={i}
            data={"N/A"}
            comments={3}
            onCommentClick={handleCommentClick}
          />
        );
      case 3:
        return (
          <RequestPlaceholder
            key={i}
            data={"pending"}
            comments={5}
            onCommentClick={handleCommentClick}
          />
        );
      case 4:
        return (
          <RequestPlaceholder
            key={i}
            data={"uploaded"}
            comments={0}
            onCommentClick={handleCommentClick}
          />
        );
      case 5:
        return (
          <div
            key={i}
            className="bg-neutral-light w-full h-full rounded-lg"
          ></div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center py-2 border-b border-b-gray92 mb-12">
        <h1 className="text-charcoal text-2xl font-bold">(Company Name)</h1>
        <div className="flex items-center gap-[0.62rem] py-2 px-3 rounded-md border border-pale_blue">
          <Image src={magnifying} alt="search-icon" />
          <input
            type="text"
            placeholder="Find document request"
            className="w-full h-full outline-none border-none placeholder:text-charcoal placeholder:text-sm"
          />
          <div>
            <Image src={search} alt="search" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-full">
        <div className="grid grid-cols-[2.875rem_15rem_18.25rem_18.25rem_18.25rem_3rem] items-stretch gap-2">
          <div className="col-span-2"></div>
          <div className="flex items-center justify-center gap-2 rounded-lg bg-charcoal text-white col-span-3">
            <p className="text-base">Request</p>
            <div className=" relative">
              <Image
                src={dot}
                alt="3dot"
                className=" cursor-pointer"
                onClick={() => setRequestModal(!requestModal)}
              />
              {requestModal && (
                <div className="absolute right-0 top-8 bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-3 z-50 w-48">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md">
                      <Image src={download} alt="download icon" />
                      <span className=" text-charcoal text-sm">
                        Download all
                      </span>
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md">
                      <Image src={share} alt="share icon" />
                      <span className=" text-charcoal text-sm">Share</span>
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md">
                      <Image src={trash} alt="trash" />
                      <span className=" text-charcoal text-sm">Delete all</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div>
            <Image src={plus} alt="plus_icon" />
          </div>

          <div className="col-span-2"></div>
          <RequestCard
            content="Batch Support Including Invoice, Receipt, Contracts"
            onToggleModal={() => handleToggleModal(0)}
            isModalOpen={modalOpenIndex === 0}
            onCommentClick={handleCommentClick}
          />
          <RequestCard
            content="Audit trail from dynamics showing submission, review, and approval"
            onToggleModal={() => handleToggleModal(1)}
            isModalOpen={modalOpenIndex === 1}
            onCommentClick={handleCommentClick}
          />
          <RequestCard
            content="Supporting reconciliation report, showing that the "
            onToggleModal={() => handleToggleModal(2)}
            isModalOpen={modalOpenIndex === 2}
            onCommentClick={handleCommentClick}
          />
          <div className="bg-neutral-light w-full h-full rounded-lg"></div>

          <div
            className="bg-charcoal rounded-lg w-full h-full text-white flex justify-center items-center"
            style={{ gridRow: `span ${rows}` }}
          >
            <p className="-rotate-90">Sample</p>
          </div>

          {Array.from({ length: rows }).map((_, index) =>
            [1, 2, 3, 4, 5].map((i) => renderRequestItems(i))
          )}

          <div onClick={handleAddRow} className="cursor-pointer">
            <Image src={plus} alt="plus_icon" />
          </div>
          <div className="w-full h-full col-span-4 bg-neutral-light rounded-lg"></div>
          <div className="bg-neutral-light w-full h-full rounded-lg"></div>
        </div>
      </div>

      {/* Comment Sidebar */}
      <CommentSidebar
        isOpen={isCommentSidebarOpen}
        onClose={handleCloseCommentSidebar}
      />
    </div>
  );
}
