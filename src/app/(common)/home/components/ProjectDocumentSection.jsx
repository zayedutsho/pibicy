import Image from "next/image";
import vector1 from "../../../../assets/images/home/left image.svg";
import document1 from "../../../../assets/images/home/Document Management 2.svg";
import vector2 from "../../../../assets/images/home/Group 703.svg";
import document2 from "../../../../assets/images/home/Document Management (2) 1.svg";
import document3 from "../../../../assets/images/home/Document Management (4) 1.svg";
import document4 from "../../../../assets/images/home/Document Management (3) 1.svg";
import orderMark from "../../../../assets/images/home/Vector.svg";
import PrimaryButton from "../../../../components/custom/buttons/PrimaryButton";

const ProjectDocumentSection = () => {
  return (
    <div className="my-12 px-6 md:px-12 md:px-12 lg:px-24 mx-auto flex flex-col justify-center">
      <h1 className="text-[28px] md:text-[52px] font-[700] mb-5 text-center">
        Keep all your project documents organized
      </h1>
      <p className="text-lg md:w-[75%] lg:w-[60%] text-center mx-auto mb-8 ">
        Request, track, and communicate with audit clients while staying on
        schedule. Annotate documents in-app for efficient reviews and archiving,
        no downloads needed.
      </p>

      <div className="mt-12">
        <div className=" flex flex-col-reverse md:flex-row gap-8 items-center mb-12">
          <div className="relative md:w-3/5">
            <Image src={vector1} />
            <div className="absolute top-5 md:top-10 left-10 lg:left-20 w-[75%]">
              <Image src={document1} alt="Document" />
            </div>
          </div>
          <div>
            <p className="text-[#F47108] font-[500]">
              Creating <br />
              Requests
            </p>
            <h1 className="md:hidden text-[26px] md:text-[30px] lg:text-[34px] font-[700] my-2 md:mt-4 mb-6 ">
              Stay on Track with Automated Reminders
            </h1>
            <h1 className="hidden md:block text-[26px] md:text-[30px] lg:text-[34px] font-[700] my-2 md:mt-4 mb-6 ">
              Stay on Track with <br />
              Automated Reminders
            </h1>
            <p className="md:hidden">
              Create and send clear, organized requests for audit information,{" "}
              share prior sample documents, and track the status of each request
              effortlessly.
            </p>
            <p className="hidden md:block">
              Create and send clear, organized requests for audit <br />{" "}
              information, share prior sample documents, and track <br />
              the status of each request effortlessly.
            </p>
            <ul className="mt-6 flex flex-col gap-2">
              <li className="flex gap-3">
                <Image src={orderMark} className="w-3" />
                Easily organize information requests
              </li>
              <li className="flex gap-3">
                <Image src={orderMark} className="w-3" />
                Attach examples from prior audit
              </li>
              <li className="flex gap-3">
                <Image src={orderMark} className="w-3" />
                Track request progress in real-time
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row gap-8 items-center my-12 lg:my-24">
          <div>
            <p className="text-[#F47108] font-[500]">
              Communicating <br />
              Seamlessly
            </p>
            <h1 className="text-[26px] md:text-[30px] lg:text-[34px] font-[700] my-2 md:mt-4 mb-6 ">
              Exchange Comments <br />
              with Audit Clients
            </h1>
            <p className="md:hidden">
              Communicate with audit clients effortlessly without the hassle of
              cluttered emails, ensuring smooth and efficient information
              exchanges.
            </p>
            <p className="hidden md:block">
              Communicate with audit clients effortlessly without the hassle{" "}
              <br />
              of cluttered emails, ensuring smooth and efficient information{" "}
              <br />
              exchanges.
            </p>
            <ul className="mt-6 flex flex-col gap-2">
              <li className="flex gap-3">
                <Image src={orderMark} className="w-3" />
                Avoid piles of back-and-forth emails
              </li>
              <li className="flex gap-3">
                <Image src={orderMark} className="w-3" />
                Centralized communication in one place
              </li>
              <li className="flex gap-3">
                <Image src={orderMark} className="w-3" />
                Keep track of responses instantly
              </li>
            </ul>
          </div>
          <div className="relative md:w-3/5">
            <Image src={vector2} />
            <div className="absolute top-5 md:top-10 left-10 lg:left-20 w-[75%]">
              <Image src={document2} alt="Document" />
            </div>
          </div>
        </div>
        <div className=" flex flex-col-reverse md:flex-row gap-8 items-center mb-12">
          <div className="relative md:w-3/5">
            <Image src={vector1} />
            <div className="absolute top-5 md:top-10 left-10 lg:left-20 w-[75%]">
              <Image src={document3} alt="Document" />
            </div>
          </div>
          <div>
            <p className="text-[#F47108] font-[500]">
              Automating <br />
              Remainders
            </p>
            <h1 className="text-[26px] md:text-[30px] lg:text-[34px] font-[700] my-2 md:mt-4 mb-6 ">
              Stay on Track with <br />
              Automated Reminders
            </h1>
            <p className="md:hidden">
              Set up automatic reminders to keep your information requests on{" "}
              schedule, ensuring overall audit timelines stays on track.
            </p>
            <p className="hidden md:block">
              Set up automatic reminders to keep your information requests{" "}
              <br />
              on schedule, ensuring overall audit timelines stays on track.
            </p>
            <ul className="mt-6 flex flex-col gap-2">
              <li className="flex gap-3">
                <Image src={orderMark} className="w-3" />
                Schedule reminders to align with audit timelines
              </li>
              <li className="flex gap-3">
                <Image src={orderMark} className="w-3" />
                Avoid last-minute rushes with timely notifications
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row gap-8 items-center my-12 lg:my-24">
          <div>
            <p className="text-[#F47108] font-[500]">
              In-App <br />
              Annotations
            </p>
            <h1 className="text-[26px] md:text-[30px] lg:text-[34px] font-[700] my-2 md:mt-4 mb-6 ">
              In-App Markups for <br />
              Efficient Reviews
            </h1>
            <p className="md:hidden">
              Markup, comment, and highlight documents directly within the app{" "}
              —no downloads required, making review and archiving more <br />
              efficient.
            </p>
            <p className="hidden md:block">
              Markup, comment, and highlight documents directly within <br />
              the app —no downloads required, making review and archiving more
              efficient.
            </p>
            <ul className="mt-6 flex flex-col gap-2">
              <li className="flex gap-3">
                <Image src={orderMark} className="w-3" />
                Comment and highlight in-app
              </li>
              <li className="flex gap-3">
                <Image src={orderMark} className="w-3" />
                No need for downloads
              </li>
              <li className="flex gap-3">
                <Image src={orderMark} className="w-3" />
                Simplify document reviews and archiving
              </li>
            </ul>
          </div>
          <div className="relative md:w-3/5">
            <Image src={vector2} />
            <div className="absolute top-5 md:top-10 left-10 lg:left-20 w-[75%]">
              <Image src={document4} alt="Document" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <PrimaryButton value={"Try For Free"} linkTo={"/"} />
      </div>
    </div>
  );
};

export default ProjectDocumentSection;
