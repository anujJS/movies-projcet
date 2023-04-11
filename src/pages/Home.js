import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../components/MovieList";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=1a5f83e10a0b7d3ef8c585f2d662a861&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <>
      <div className="h-full">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              className="decoration-none text-white"
              to={`/movie/${movie.id}`}
              key={movie.id}
            >
              <div className="h-[600px] relative ">
                <img
                  className="m-auto block w-full "
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie?.backdrop_path
                  }`}
                />
              </div>
              <div className="absolute z-10 p-20 bottom-0 h-3/4 flex flex-col justify-end items-start linearBgc opacity-100 transition duration-100  ">
                <div className="font-black text-[4rem] mb-2 text-left text-white">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="text-[2rem] mb-4 text-white">
                  {movie ? movie.release_date : ""}
                  <span className="ml-[3rem] text-white">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="italic text-sm mb-1 flex text-left w-1/2 text-white">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList />
      </div>
    </>
  );
};

export default Home;
