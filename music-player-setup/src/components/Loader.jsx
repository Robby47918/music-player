import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="loader border-4 border-blue-500 border-t-transparent rounded-full w-8 h-8 animate-spin"></div>
      <p className="ml-2 text-gray-600">Loading...</p>
    </div>
  );
};

export default Loader;