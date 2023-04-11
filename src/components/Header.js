import React, { useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="mx-20 py-1 flex justify-between items-center  ">
      <div className="flex items-center">
        <Link to="/">
          <img
            className="w-20 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          />
        </Link>
        <Link to="/movies/popular">
          <span className="decoration-0 mx-8 font-medium cursor-pointer text-white hover:text-red-800 ">
            Popular
          </span>
        </Link>
        <Link
          to="/movies/top_rated"
          className="decoration-0 mx-8 font-medium cursor-pointer text-white  hover:text-red-800 "
        >
          <span>Top Rated</span>
        </Link>
        <Link
          to="/movies/upcoming"
          className="decoration-0 mx-8 font-medium cursor-pointer text-white  hover:text-red-800 "
        >
          <span>Upcoming</span>
        </Link>
      </div>
      <div className=" pt-2 relative mx-auto float-right text-gray-800">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to={`/movieSearch/${search}`} className="decoration-0">
          <button
            type="submit"
            onClick={() => {
              if (search.length === 0) {
                alert("Please enter movies Name");
              }
              setSearch("");
            }}
            className="absolute right-0 top-0 mt-5 mr-4"
          >
            <i className="fa-sharp fa-solid fa-magnifying-glass w-4"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
