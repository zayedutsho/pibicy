import React from "react";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";

export const metadata = {
  title: {
    default: "Authentication",
    template: `%s - Authentication`,
  },
  description: "",
};
const AuthLayout = async ({ children }) => {
  //   const user = {
  //     role: "user",
  //   };

  const user = null;
  if (user) {
    redirect("/");
  }

  return (
    <div className="">
      <Navbar />
      <div className="mt-10">{children}</div>
      <Footer />
    </div>
  );
};

AuthLayout.displayName = "AuthLayout";

export default AuthLayout;
