import { footerNavigations } from "@/data";
import Link from "next/link";
import React from "react";

const CopyRight = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[5fr,3fr,4fr] items-center gap-y-5 sm:gap-x-5 text-center sm:text-left">
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-3 sm:gap-x-5">
        {footerNavigations.map((item, index) => (
          <Link
            key={index}
            href={item?.href}
            className="text-sm sm:text-md font-semibold text-primary"
          >
            {item?.name}
          </Link>
        ))}
      </div>

      {/* Divider */}
      <div
        className="w-full bg-primary hidden sm:block"
        style={{ height: "2px" }}
      ></div>

      {/* Copyright Text */}
      <div className="text-sm sm:text-md">
        © {new Date().getFullYear()} 3ZERO Trust. All Rights Reserved.
      </div>
    </div>
  );
};

export default CopyRight;
