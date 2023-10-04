import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LandingBackground from "./LandingBackground";

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Function to handle search and navigation
  const handleSearch = (e) => {
    // Check if the "Enter" key (key code 13) was pressed
    if (e.key === "Enter") {
      // Navigate to the search page with the searchQuery
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen relative">
      {/* Search Bar */}
    
      <div className="z-10">
      <img src="./assets/pokemontcglogo.png" className="w-[300px] flex my-5 " />
        <input
          className="border-2 border-gray-300 bg-white h-10 px-2 w-96 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search for a card"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleSearch} // Listen for "Enter" key press
        />
      </div>
      <div className="absolute inset-0 z-0">
        <LandingBackground />
      </div>
    </div>
  );
};

export default LandingPage;
