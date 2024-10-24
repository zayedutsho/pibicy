"use client";
import React from "react";
// import SectionTitle from "@/components/custom/typography/SectionTitle";
import LoginForm from "./components/LoginForm";

// export const metadata = {
//   title: "Login",
//   description: "Login to your 3Zero Club account",
// };

const LoginPage = ({}) => {
  return (
    <div className="flex items-center justify-center mt-28 ">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md px-8 py-6">
        {/* <SectionTitle pre="Welcome Back" title="Login to your account" /> */}
        <LoginForm />
      </div>
    </div>
  );
};

LoginPage.displayName = "LoginPage";

export default LoginPage;
