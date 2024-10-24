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

      <div className="bg-white px-6 py-8 rounded-lg md:shadow-lg pb-20 border">
        <div className="font-roboto md:w-[90%]">
          <h2 className="text-[20px] font-[500] mb-2">
            Configure an authentication method
          </h2>

          <div className="md:flex items-center justify-between md:pl-8 mb-12 mt-8">
            <div>
              <p className="font-[600] mb-1">Google Apps authentication</p>
              <p>Let members sign in with a google account</p>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="mt-4 md:mt-0 px-6 py-2 bg-[#F3F3FA] rounded-lg font-[600] w-full md:w-[248px]"
              >
                Available soon
              </button>
            </div>
          </div>

          <div className="md:flex justify-between items-start md:pl-8">
            <div>
              <p className="font-[600] mb-1">SAML authentication</p>
              <p>
                Get set up with Azure, Okta and OneLogin or your custom SAML
                solution
              </p>
            </div>
            <div className="text-right">
              <Link href={"permissions/configure"}>
                <button
                  type="submit"
                  className="mt-4 md:mt-0 px-6 py-2 bg-[#F47108] text-white rounded-lg font-[600] w-full md:w-[248px]"
                >
                  Configure
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
