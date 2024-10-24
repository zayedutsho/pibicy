import React from "react";
import Link from "next/link";
const RegisterButton = () => {
  return (
    <Link
      href={"/register"}
      className="bg-primary text-white py-2 px-4 flex items-center gap-x-3  justify-center w-full max-w-[150px] min-w-[130px]"
    >
      Register Now
    </Link>
  );
};

export default RegisterButton;
