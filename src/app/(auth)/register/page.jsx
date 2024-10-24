"use client";
import React from "react";
// import SectionTitle from "@/components/custom/typography/SectionTitle";
import RegistrationForm from "./components/RegistrationForm";

// export const metadata = {
//   title: "Register",
//   description: "Create a new account for 3Zero Club",
// };

const RegisterPage = ({}) => {
  return (
    <div className="px-10 py-10 max-w-5xl mx-auto">
      {/* <SectionTitle pre="3Zero Club" title="User Registration Form" /> */}
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
