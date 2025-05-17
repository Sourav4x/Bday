import React, { useState } from "react";

function CakeCuttingButton() {
  const [cut, setCut] = useState(false);

  const handleCut = () => {
    setCut(true);
  };

  return (
    <div className="flex flex-col items-center mt-8 z-10">
      <button
        onClick={handleCut}
        disabled={cut}
        className={`bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition ${
          cut ? "cursor-not-allowed opacity-60" : ""
        }`}
      >
        {cut ? "Cake Cut! 🎉" : "Cut the Cake 🎂"}
      </button>

      <div className="mt-6 relative w-32 h-32">
        {/* Cake base */}
        <div className="bg-pink-400 w-full h-full rounded-xl shadow-lg relative overflow-hidden">
          {/* Cake slice */}
          <div
            className={`bg-pink-200 absolute top-0 left-0 w-1/3 h-full rounded-l-xl shadow-md transform origin-left transition-transform duration-1000 ${
              cut ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
            }`}
          />
          {/* Cake frosting (top) */}
          <div className="absolute top-0 left-0 w-full h-6 bg-pink-300 rounded-t-xl shadow-inner"></div>
        </div>
      </div>
    </div>
  );
}

export default CakeCuttingButton;
