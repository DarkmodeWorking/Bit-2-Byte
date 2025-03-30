import React from "react";

const UnderDevelopment = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center p-6">
      <h1 className="text-5xl font-bold text-blue-700">Page Under Development</h1>
      <p className="mt-4 text-lg text-gray-300">
        We are working hard to bring you this page. Stay tuned for updates!
      </p>
      <div className="mt-6 animate-pulse">
        <svg
          className="w-16 h-16 text-red-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default UnderDevelopment;