import React from "react";

const SearchBar = ({
  placeholder = "Let's help you find...",
  locations = ["Location", "Lagos", "Abuja"],
  buttonLabel = "Search",
}) => {
  return (
    <div className="flex items-center mt-6 max-w-2xl bg-white rounded-full shadow-md overflow-hidden w-full">
      {/* Input */}
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 px-5 py-3 text-gray-700 text-sm sm:text-base outline-none placeholder-gray-400"
      />

      {/* Dropdown */}
      <select className="px-4 py-3 text-gray-600 text-sm sm:text-base border-l outline-none bg-white hover:cursor-pointer">
        {locations.map((loc, index) => (
          <option key={index} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      {/* Button */}
      <button className="bg-green-500 px-6 py-3 text-white text-sm sm:text-base font-medium hover:bg-green-600 transition-all">
        {buttonLabel}
      </button>
    </div>
  );
};

export default SearchBar;
