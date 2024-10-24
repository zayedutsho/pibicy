import React, { Fragment } from "react";
import { Metadata } from "next";
import UpcomingPage from "../../components/shared/upcoming";
import HeroSection from "./home/components/HeroSection";
import ProjectDocumentSection from "./home/components/ProjectDocumentSection";
import CustomerReviewSection from "./home/components/CustomerReviewSection";
import FAQ from "./home/components/FAQ";

export const metadata = {
  title: "Home",
  description: "",
};

const HomePage = ({}) => {
  return (
    <Fragment>
      <HeroSection />
      <div className="max-w-[1520px] mx-auto">
        <ProjectDocumentSection />
      </div>
      <CustomerReviewSection />
      <div className="max-w-[1520px] mx-auto">
        <FAQ />
      </div>
    </Fragment>
  );
};

HomePage.displayName = "HomePage";

export default HomePage;

// import { redirect } from "next/navigation";

// export default function Home() {
//   return redirect("/home");
// }
