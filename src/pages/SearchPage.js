import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Card";
// import InfiniteScroll from "react-infinite-scroll-component";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const { search } = useParams();
  //   const [page, setPage] = useState(1);
  //   const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    getData();
  }, [search]);

  const getData = async () => {
    console.log(search);
    let data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=1a5f83e10a0b7d3ef8c585f2d662a861&language=en-US&query=${search}&page=1&include_adult=false`
    );
    let parseData = await data.json();
    setMovies(parseData.results);
    // setTotalResults(parseData.total_results);
    //   .then((res) => res.json())
    //   .then((data) => setMovies(data.results))
    //   .then((data) => setTotalResults(data.total_results))
    //   .then((data) => console.log(data));
  };
  console.log(movies);

  //   const fectchMoreData = async () => {
  //     const url = `https://api.themoviedb.org/3/search/movie?api_key=1a5f83e10a0b7d3ef8c585f2d662a861&language=en-US&query=${search}&page=${page}&include_adult=false`;
  //     setPage(page + 1);

  //     let data = await fetch(url);
  //     let parseData = await data.json();
  //     console.log(parseData);
  //     setMovies(movies.concat(parseData.results));
  //     setTotalResults(parseData.total_results);
  //   };

  return (
    <div className="pt-0 pb-12 px-12">
      <h2 className="text-xl m-10">Search Results...</h2>

      <div className="flex flex-wrap justify-center ">
        {/* <InfiniteScroll
          dataLength={movies.length}
          next={fectchMoreData}
          hasMore={movies.length !== totalResults}
          style={{ overflow: "hidden", height: "auto" }}
          loader={
            <h4 className="text-3xl text-center font-bold text-white">
              Loading...
            </h4>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        > */}
        {movies.length === 0 ? (
          <h1 className="text-gray-400 font-semibold text-lg">
            No result found...
          </h1>
        ) : (
          movies.map((movie) => <Cards movie={movie} />)
        )}
        {/* </InfiniteScroll> */}
      </div>
    </div>
  );
};

export default SearchPage;
