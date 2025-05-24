import React, { useState } from "react";

export default function SearchBar({ placeholder = "Search...", onSearch }) {
  const [query, setQuery] = useState("");

  const handleInput = (e) => {
    setQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <div className="w-full flex items-center bg-white rounded-lg shadow px-3 py-2">
      <input
        type="text"
        value={query}
        onChange={handleInput}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-gray-700 px-2"
      />
      <svg
        className="w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx={11} cy={11} r={8} />
        <line x1={21} y1={21} x2={16.65} y2={16.65} />
      </svg>
    </div>
  );
}