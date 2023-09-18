import React from "react";
import { useParams } from "react-router-dom";
import SearchCards from "./SearchCards";

const SearchPage = () => {
  // Extract the searchQuery parameter from the URL
  const { query } = useParams();

  return (
    <div>
      {/* Pass the extracted searchQuery as a prop to the SearchCards component */}
      <SearchCards searchQuery={query} />
    </div>
  );
};

export default SearchPage;
