import Link from "next/link";

const page = () => {
  return (
    <div className="md:p-8">
      <div className="px-3 bg-black text-white py-3 pt-2 rounded-lg text-center mb-2 md:h-[46px]">
        <p>
          We support a number of single sign-on services. Set up your SSO for
          Pibicy below.
        </p>
      </div>

      <div className="bg-white px-4 md:px-6 py-8 rounded-lg md:shadow-lg border">
        <div className="grid grid-cols-1 md:grid-cols-[7fr,5fr] items-start justify-between ">
          <div>
            <p className="font-[600] mb-1">SAML authentication</p>
            <p className="mb-6">
              Get set up with Azure, Okta and OneLogin or your custom SAML
              solution
            </p>
          </div>

          <div className="hidden md:block text-right ">
            <button
              type="submit"
              className="px-6 py-2 bg-[#F47108] text-white rounded-lg  font-[600] md:w-1/2"
            >
              Save Configuration
            </button>
          </div>
        </div>

        <div>
          <p>
            Follow the steps below to set up Pibicy with your custom SSO
            solution.{" "}
          </p>

          <div>
            <p className="font-[600] mt-4 mb-2">SAML 2.0 Endpoint (HTTP) </p>
            <div className="flex flex-col gap-2 text-sm mb-6">
              <label htmlFor="" className="font-[500]">
                Enter your SAML 2.0 Endpoint. This is where you go to when you
                try to login
              </label>
              <input
                type="text"
                className="bg-[#F3F3FA] rounded-lg py-3 placeholder:text-black px-4 placeholder:text-md"
                placeholder="Enter endpoint link"
              />
            </div>
            <p className="font-[600] my-2">Identity Provider Issuer </p>
            <div className="flex flex-col gap-2 text-sm mb-6">
              <label htmlFor="" className="font-[500]">
                The Idp Entity ID for the service you use
              </label>
              <input
                type="text"
                className="bg-[#F3F3FA] rounded-lg py-3 placeholder:text-black px-4 placeholder:text-md"
                placeholder="Enter Idp entity ID"
              />
            </div>
            <p className=" font-[600] mb-2">Identity Provider Issuer</p>
            <div className="flex flex-col gap-2 text-sm mb-5 w-full">
              <label htmlFor="" className="font-[500]">
                Copy and paste your entire x.509 Certificate here
              </label>
              <textarea
                type="text"
                className="bg-[#F3F3FA] rounded-lg py-3 placeholder:text-black px-4 placeholder:text-md w-full"
                placeholder="Enter endpoint link"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="text-center md:hidden">
          <button
            type="submit"
            className="px-6 py-2 bg-[#F47108] text-white rounded-lg  font-[600] md:w-1/2"
          >
            Save Configuration
          </button>
        </div>
      </div>

      <div className="text-center md:text-right my-8">
        <Link href={"configure/advanced-options"}>
          <button
            type="submit"
            className="px-16 py-3  border border-[#F47108] rounded-lg  font-[650]"
          >
            Advanced Options
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
