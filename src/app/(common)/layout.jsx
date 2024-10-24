import React from "react";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import Navbar from "../../components/shared/navbar/Navbar";
import Footer from "../../components/shared/footer/Footer";

export const metadata = {
  title: {
    default: "Home",
    template: `%s - 3Zero Club`,
  },
  description: "",
};
const CommonLayout = async ({ children }) => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <div className="mt-[50px] lg:mt-[80px]">{children}</div>
      <Footer />
    </div>
  );
};

CommonLayout.displayName = "CommonLayout";

export default CommonLayout;
