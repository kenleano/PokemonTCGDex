import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LandingBackground from "./LandingBackground";
import RightElements from "./RightElements";
import Pokeball from "./Pokeball";
import Dice from "./Dice";
import Coin from "./Coin";
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
    <div className="overflow-hidden relative">
         <div className="absolute -bottom-96 right-2/3 inset-0 z-20">
        <Coin />
      </div>
       <div className="absolute -top-96 left-2/3 inset-0 z-20">
        <Pokeball />
      </div>
      <div className="absolute -bottom-96 left-2/3 inset-0 z-20">
        <Dice />
      </div>
      <div className="flex justify-center items-center flex-col h-screen relative">
        {/* Search Bar */}

        <div className="z-10 flex flex-col items-center">
          <img src="./assets/pokemontcglogo.png" className="w-[300px] my-5" />
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
    </div>
  );
};

export default LandingPage;
