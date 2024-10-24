"use client";
import { useState } from "react";

const page = () => {
  const [signAuthReq, setSignAuthReq] = useState(false);
  const [assertionsSigned, setAssertionsSigned] = useState(false);
  const [responseSigned, setResponseSigned] = useState(false);
  return (
    <div className="md:p-8">
      <div className="px-3 bg-black text-white rounded-lg text-center mb-2 py-3 pt-2 md:h-[46px]">
        <p>
          We support a number of single sign-on services. Set up your SSO for
          Pibicy below.
        </p>
      </div>

      <div className="bg-white px-6 py-8 rounded-lg shadow-lg border ">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-[500]">Advanced Options</p>

            <div className="flex flex-col my-6 gap-4 text-[16px]">
              <div className="flex items-center gap-4 cursor-pointer">
                <span
                  className={`relative inline-block w-6 h-6 rounded transition-all ${
                    signAuthReq ? "bg-orange-500" : "bg-[#F3F4F6] border"
                  }`}
                  onClick={() => setSignAuthReq(!signAuthReq)} // Toggle the state on click
                >
                  {signAuthReq && (
                    <span className="absolute inset-0 flex items-center justify-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 10.293l1.293 1.293 4-4 1.414 1.414-5.414 5.414-2.707-2.707z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </span>
                <label
                  htmlFor="sign_auth_req"
                  onClick={() => setSignAuthReq(!signAuthReq)}
                >
                  Sign Auth Request
                </label>
              </div>

              <div className="flex items-center gap-4 cursor-pointer">
                <span
                  className={`relative inline-block w-6 h-6 rounded transition-all ${
                    assertionsSigned ? "bg-orange-500" : "bg-[#F3F4F6] border"
                  }`}
                  onClick={() => setAssertionsSigned(!assertionsSigned)} // Toggle the state on click
                >
                  {assertionsSigned && (
                    <span className="absolute inset-0 flex items-center justify-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 10.293l1.293 1.293 4-4 1.414 1.414-5.414 5.414-2.707-2.707z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </span>
                <label
                  htmlFor="assetions_signed"
                  onClick={() => setAssertionsSigned(!assertionsSigned)}
                >
                  Assertions Signed
                </label>
              </div>

              <div className="flex items-center gap-4 cursor-pointer">
                <span
                  className={`relative inline-block w-6 h-6 rounded transition-all ${
                    responseSigned ? "bg-orange-500" : "bg-[#F3F4F6] border"
                  }`}
                  onClick={() => setResponseSigned(!responseSigned)} // Toggle the state on click
                >
                  {responseSigned && (
                    <span className="absolute inset-0 flex items-center justify-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 10.293l1.293 1.293 4-4 1.414 1.414-5.414 5.414-2.707-2.707z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </span>
                <label
                  htmlFor="response_signed"
                  onClick={() => setResponseSigned(!responseSigned)}
                >
                  Response Signed
                </label>
              </div>
            </div>
          </div>

          <div className="text-right ">
            <button
              type="submit"
              className="hidden md:block px-6 py-2 bg-[#F47108] text-white rounded-lg text-xs md:text-[16px] font-[600] md:h-[46px]"
            >
              Save Configuration
            </button>
          </div>
        </div>

        <div className="flex flex-col mt-4 gap-2">
          <label htmlFor="" className="font-medium">
            We wil use this public key to sign our request
          </label>
          <textarea
            className="h-[300px] bg-[#F3F3FA] placeholder:text-black px-4 py-3 text-sm font-[500] rounded-lg"
            placeholder="-----BEGIN CERTIFICATE----- MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuGz9vfyW/gjtOKQUoyLy V4Yv9bZBBlGdJx+4mKt8Vjsn+1Wv+4WZ9eJ3eIzTEo8OtfSkMHk2+1jzPxYzBkeM 8kJX9PbYPjaj9o2R/SnV0NKt90v8+lKYefDFI2cI1xXZ8DlEvV9Yv+LvPdDZhvl5 7ZV2VTe/8AvKlW5fCZ1y9pTbIF/s4eOHK7E+i5+6R6wHhsvwpCBkpNvZ8ij72Uq3 Z9zgEYXPR5Eb+It+XmJxQsukjdOFN+VpXGg/o5xOeX/rRmgJ/WQtR1a+MlqPZLHO ZxKojI09B60H9vlLMlhXGvZp0KXsR6V+UK/Mcuf6H3Qik/0sJpslzIS2n01Wdj4w IDAQAB -----END CERTIFICATE----"
          ></textarea>
        </div>
        <div className="flex items-center justify-center mt-[30px]">
          <button
            type="submit"
            className="md:hidden px-6 py-2 bg-[#F47108] text-white rounded-lg text-xs md:text-[16px] font-[600] h-[46px]"
          >
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
