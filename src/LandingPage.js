import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonCards = () => {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.pokemontcg.io/v2/sets/swsh1", {
          headers: {
            "X-Api-Key": "e43cb89d-fea8-42af-8c3c-1b2ba1ee0bf2",
          },
          params: {
            q: searchQuery, // Send the search query
            page: page, // Send the page number if you want pagination
          },
        });

        setCards(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchQuery, page]); // Listen for changes in searchQuery and page

  // Handle pagination, e.g., clicking on next/previous buttons
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="flex justify-center">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <h1 className="">Pokemon Cards</h1>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {cards.map((card) => (
          <div key={card.id}>
            <div>
              <p>{card.name}</p>
              <img src={card.images.small} alt={card.name} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button onClick={handlePreviousPage}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default PokemonCards;
