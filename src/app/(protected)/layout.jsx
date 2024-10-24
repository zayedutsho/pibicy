import React from "react";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata = {
  title: {
    default: "Dashboard",
    template: "%s | Dashboard",
  },
  description: "",
};

const ProtectedLayout = async ({ admin, user }) => {
  // Example user info, replace with actual user authentication logic
  const userInfo = {
    role: "user", // This can be 'user' or 'admin'
  };

  if (!user) {
    redirect("/login");
    return null; // Ensure the function returns null after redirect
  }

  const userRole = userInfo.role;

  // Conditionally render based on user role
  return userRole === "admin" ? admin : user;
};

ProtectedLayout.displayName = "ProtectedLayout";

export default ProtectedLayout;
