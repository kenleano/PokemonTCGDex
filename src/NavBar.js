import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/search/" className="hover:underline">
            Search Cards
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
