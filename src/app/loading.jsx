import React from "react";

const PrimaryLoader = () => {
  return (
    <div className="">
      {/* Professional primary loader */}
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default PrimaryLoader;
