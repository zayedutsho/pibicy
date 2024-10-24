import React from "react";

const UpcomingPage = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
      <p className="text-lg text-gray-600">
        This page is currently under construction, see you soon...
      </p>
    </div>
  );
};

export default UpcomingPage;
