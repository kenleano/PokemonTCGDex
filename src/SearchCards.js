import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const SearchCards = () => {
  const { searchQuery: initialSearchQuery } = useParams();
  const [search, setSearch] = useState(initialSearchQuery);
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(30); // Number of cards per page
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/search/${search}`);
  }, [search, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.pokemontcg.io/v2/cards", {
          headers: {
            "X-Api-Key": "e43cb89d-fea8-42af-8c3c-1b2ba1ee0bf2",
          },
          params: {
            q: `name:${search}`,
            page,
            pageSize,
          },
        });

        setCards(response.data.data);

        // Calculate the total number of pages based on the total number of cards
        const totalCards = response.data.totalCount;
        const pages = Math.ceil(totalCards / pageSize);
        setTotalPages(pages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [search, page, pageSize]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={i === page ? "font-bold" : ""}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    
    <div>
      <NavBar />
      <div className="flex justify-center my-10">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-2 w-96 rounded-lg text-sm focus:outline-none"
          type="search"
          placeholder="Search a card"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            color: "black",
            backgroundColor: "white",
            borderColor: "gray",
          }}
        />
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10 my-10">
        {cards.map((card) => (
          <div key={card.id}>
            <div>
              <p>{card.id}</p>
              <p>{card.name}</p>
              <Link to={`/pokemon-card-detail/${card.id}`}>
                <img
                  className="h-[400px]"
                  src={card.images.small}
                  alt={card.name}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-10 my-10">
          <button onClick={handlePreviousPage} disabled={page === 1}>
            Previous
          </button>
          {renderPageNumbers()}
          <button onClick={handleNextPage} disabled={page === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchCards;
