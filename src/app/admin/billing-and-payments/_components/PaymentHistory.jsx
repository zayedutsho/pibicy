import fileIcon from "../../../../assets/icons/file.svg";
import { paymentData } from "../../../../data/paymentData";
import Image from "next/image";

const PaymentHistory = () => {
  return (
    <div className="mt-6 md:mt-12">
      <div className="flex items-center gap-2 mb-3">
        <Image src={fileIcon} alt="Download" />
        <p className="text-[#2212CE] text-sm">Download Payment History</p>
      </div>

      <div className="grid md:grid-cols-[8fr,4fr] items-end justify-between">
        {/* Table for larger screens */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="mb-2 text-white">
                <th className="text-left">
                  <div className="bg-black mr-2 mb-1 w-full h-12 md:h-full px-3 py-3 flex items-center">
                    Date
                  </div>
                </th>

                <th className="text-left">
                  <div className="bg-black mr-2 mb-1 w-full h-12 md:h-full px-3 py-3 flex items-center">
                    Item
                  </div>
                </th>

                <th className="text-left">
                  <div className="bg-black mr-2 mb-1 w-full h-12 md:h-full px-3 py-3 flex items-center">
                    Charges
                  </div>
                </th>

                <th className="text-left">
                  <div className="bg-black mr-2 mb-1 w-full h-12 md:h-full px-3 py-3 flex items-center">
                    Status
                  </div>
                </th>
              </tr>
            </thead>
            {paymentData?.map((payment, i) => (
              <tbody key={i}>
                <tr className="h-12 md:h-full">
                  <td className="h-12">
                    <div className="bg-white py-3 w-full md:w-full truncate h-full flex items-center">
                      <p className="mx-3">{payment?.date}</p>
                    </div>
                  </td>

                  {/* Payment Item */}
                  <td className="">
                    <div className="bg-white py-3 h-full flex items-center">
                      <p className="mx-3">{payment?.item}</p>
                    </div>
                  </td>

                  {/* Payment Charges */}
                  <td className="h-12">
                    <div className="bg-white py-3 h-full flex items-center">
                      <p className="mx-3">{payment?.charges}</p>
                    </div>
                  </td>

                  {/* Payment Status */}
                  <td className="h-12">
                    <div className="bg-white py-3 h-full flex items-center">
                      <p className="mx-3">{payment?.status}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        {/* Save Button */}
        <div className="text-right mt-4 md:mt-0 flex items-center justify-center md:block mb-4 md:mb-0 ">
          <button
            type="submit"
            className="px-10 py-2 bg-[#F47108] text-white rounded-lg font-[600]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;