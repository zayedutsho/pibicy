import PrimaryButton from "../../../../components/custom/buttons/PrimaryButton";
import FAQSegment from "./FAQSegment";

const FAQ = () => {
  return (
    <div className="mx-6 md:mx-12 lg:mx-24 my-12 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="md:w-1/2 mb-[30px] md:mb-[0px]">
        <h1 className="text-[30px] md:text-[52px] font-[700] mb-8  ">
          Freequently asked Questions
        </h1>
        <p className="mb-6">
          Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum.Cras pretium
          suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non
          porttitor.
        </p>
        <PrimaryButton value={"Try For Free"} linkTo={"/"} />
      </div>
      <div className="md:w-1/2 ">
        <FAQSegment />
      </div>
    </div>
  );
};

export default FAQ;
