import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import SearchCardsCss from "./SearchCards.css";

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
    <div className="container">
      <NavBar />
      <div className="flex justify-center my-10">
        <input
          className="search-input"
          type="search"
          placeholder="Search a card"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
  
      <div className="card-container">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <p>{card.id}</p>
            <p>{card.name}</p>
            <Link to={`/pokemon-card-detail/${card.id}`}>
              <img src={card.images.small} alt={card.name} />
            </Link>
          </div>
        ))}
      </div>
  
      {totalPages > 1 && (
        <div className="pagination">
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
