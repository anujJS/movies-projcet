import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, [type]);

  const getData = async () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=1a5f83e10a0b7d3ef8c585f2d662a861&language=en-US&page=${page}&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  const fectchMoreData = async () => {
    const url = `https://api.themoviedb.org/3/movie/${
      type ? type : "popular"
    }?api_key=1a5f83e10a0b7d3ef8c585f2d662a861&language=en-US&page=${page}&include_adult=false`;
    setPage(page + 1);

    let data = await fetch(url);
    let parseData = await data.json();
    setMovieList(movieList.concat(parseData.results));
    setTotalResults(parseData.total_results);
  };

  return (
    <div className="pt-0 pb-12 px-12">
      <h2 className="text-xl m-10">
        {(type ? type : "POPULAR").toUpperCase()}
      </h2>
      <InfiniteScroll
        dataLength={movieList.length}
        next={fectchMoreData}
        hasMore={movieList.length !== totalResults}
        style={{ overflow: "hidden", height: "auto" }}
        loader={
          <h4 className="text-3xl text-center font-bold text-white">
            Loading...
          </h4>
        }
      >
        <div className="flex flex-wrap justify-center ">
          {movieList.map((movie) => (
            <Cards movie={movie} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default MovieList;
