"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const GlobalError = ({ error, reset }) => {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-5xl font-bold text-red-600">Something went wrong!</h1>
      <p className="mt-4 text-lg text-gray-600">
        {error.message || "An unexpected error occurred."}
      </p>
      <div className="mt-6 space-x-4">
        <button
          onClick={() => reset()} // Attempt to recover by re-rendering the component
          className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-all duration-200"
        >
          Try Again
        </button>
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 text-white bg-gray-600 hover:bg-gray-700 rounded-md transition-all duration-200"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default GlobalError;
