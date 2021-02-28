import React, { useState } from "react";
import "./search.css";

export const Search = ({ search }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      search(searchTerm);
    }
  };

  return (
    <div className="search">
      <input
        placeholder="Type anything & press enter to search"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};
