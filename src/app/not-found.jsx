"use client";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/"); // Navigate to the homepage
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-9xl font-bold text-blue-600">404</h1>
      <h2 className="mt-4 text-4xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-600">
        Sorry, the page you are looking for doesn&apos;t exist.
      </p>
      <button
        onClick={handleGoHome}
        className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-all duration-200"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFoundPage;
