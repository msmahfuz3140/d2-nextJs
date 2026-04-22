"use client";

import React from "react";

const Error = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md bg-white shadow-xl rounded-2xl p-8">

        {/* Error Icon */}
        <div className="text-6xl mb-4">⚠️</div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-red-500 mb-2">
          Something went wrong
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          {error?.message || "An unexpected error occurred. Please try again."}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            Try Again
          </button>

          <button
            onClick={() => window.location.reload()}
            className="bg-gray-200 text-gray-800 px-5 py-2 rounded-xl hover:bg-gray-300 transition"
          >
            Reload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;