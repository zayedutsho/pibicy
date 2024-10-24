import { MdDelete } from "react-icons/md";

const ExistingPaymentMethod = () => {
  return (
    <div className="bg-white border rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-10 lg:gap-28 p-4 md:p-6">
      <div className="md:w-1/2">
        <h2 className="font-[700] mb-4">Existing Payment Method</h2>
        <p className="font-[600] text-sm mb-2">Card ending with</p>
        <div className="flex  items-center justify-between text-sm mb-4">
          <div>
            <p>Visa</p>
            <p>07/2029</p>
          </div>
          <div className="flex items-center gap-5">
            <button className="text-[#2212CE] border border-[#F47108] rounded-xl px-4 py-1.5 text-[12px]">
              Default
            </button>
            <MdDelete className="text-[#FF404E] w-2xl text-[24px]" />
          </div>
        </div>
        <p className="font-[600] text-sm mb-2">
          Future Payments will be made with this method.
        </p>
        <hr className="my-3" />
        <p className="font-[600] text-sm mb-2">Card ending with</p>
        <div className="flex  items-start justify-between text-sm">
          <div>
            <p>Visa</p>
            <p>07/2029</p>
          </div>
          <div className="flex items-center gap-5">
            <button className="text-[#2212CE] border border-[#F47108] rounded-xl px-4 py-1.5 text-[12px]">
              Set as Default
            </button>
            <MdDelete className="text-[#FF404E] w-2xl text-[24px]" />
          </div>
        </div>
      </div>

      <div className="md:w-1/2">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          <h2 className="font-[700]">New Payment Method?</h2>
          <button className="text-[#2212CE] border border-[#F47108] rounded-xl px-4 py-1.5 text-[12px] font-semibold bg-[#F3F3FA] mt-[16px] md:mt-[0px] h-[34px]">
            Add credit or debit Card
          </button>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <label htmlFor="">Card Number</label>
          <input
            type="number"
            className="bg-[#F3F3FA] rounded-lg py-1.5 placeholder:text-black px-3 placeholder:text-md md:h-[36px]"
            placeholder="Enter your card number"
          />
        </div>

        <div className="my-4 flex items-center justify-between gap-2 md:gap-12 lg:gap-16">
          <div className="flex flex-col gap-2 text-sm w-1/2">
            <label htmlFor="">Expiration Date</label>
            <input
              type="text"
              className="bg-[#F3F3FA] rounded-lg py-1.5 placeholder:text-black px-3 placeholder:text-md md:h-[36px]"
              placeholder="MM/YY"
            />
          </div>
          <div className="flex flex-col gap-2 text-sm w-1/2">
            <label htmlFor="">Security Code</label>
            <input
              type="text"
              className="bg-[#F3F3FA] rounded-lg py-1.5 placeholder:text-black placeholder:text-md px-3 md:h-[36px]"
              placeholder="CVC"
            />
          </div>
        </div>

        <div className="text-right mt-8 flex items-center justify-center md:block">
          <button
            type="submit"
            className="px-6 py-2 bg-[#F47108] text-white rounded-lg  font-[600]"
          >
            Add Payment Method
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExistingPaymentMethod;
