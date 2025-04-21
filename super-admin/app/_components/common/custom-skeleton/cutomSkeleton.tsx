import React from "react";

const CutomSkeleton = () => {
  return (
    <>
      <div
        role="status"
        className="w-full max-w-5xl mx-auto p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded-sm shadow-sm animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
      >
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 first:pt-0"
          >
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-52 mb-2.5"></div>
              <div className="w-80 max-w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-36 max-w-full"></div>
          </div>
        ))}
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default CutomSkeleton;
