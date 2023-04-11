import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const [currentMovieDetail, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [id]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1a5f83e10a0b7d3ef8c585f2d662a861&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };
  console.log(currentMovieDetail);
  return (
    <div className="w-full relative flex flex-col items-center">
      <div className="w-10/12">
        <img
          className="w-full h-[500px] object-cover objPosition "
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail.backdrop_path !== null
              ? currentMovieDetail.backdrop_path
              : "/53BC9F2tpZnsGno2cLhzvGprDYS.jpg"
          }`}
        />
      </div>
      <div className="flex items-center w-3/4 relative bottom-56">
        <div className="mr-8">
          <div>
            <img
              className="w-80 rounded-xl shadow-al"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail.poster_path !== null
                  ? currentMovieDetail.poster_path
                  : "/oxjlOFFgicnLWZzxoG8k340b8jR.jpg"
              }`}
            />
          </div>
        </div>
        <div className="text-white flex flex-col h-[450px] justify-between">
          <div>
            <div className="font-semibold text-5xl textStyl">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className="movie__tagline textStyl">
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className="movie__rating textStyl">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              <i class="fas fa-star" />
              <span className="ml-4">
                {currentMovieDetail
                  ? "(" + currentMovieDetail.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            <div className="movie__runtime textStyl">
              {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate textStyl">
              {currentMovieDetail
                ? "Release date: " + currentMovieDetail.release_date
                : ""}
            </div>
            <div className="my-5 textStyl">
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => (
                    <>
                      <span
                        className="p-2 border-2 border-gray-100 rounded-2xl mr-4"
                        id={genre.id}
                      >
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="my-8">
            <div className="text-xl mb-5 font-semibold flex relative items-center">
              Synopsis
            </div>
            <div className="ml-auto">
              {currentMovieDetail ? currentMovieDetail.overview : ""}
            </div>
          </div>
        </div>
      </div>
      <div className="relative  bottom-28 flex justify-between w-3/4">
        <div className="text-4xl">Useful Links</div>
        {currentMovieDetail && currentMovieDetail.homepage && (
          <a
            href={currentMovieDetail.homepage}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="bg-red-800 flex justify-center items-center py-3 px-8 rounded-2xl text-black font-bold ">
                Homepage <i className="ml-6 fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {currentMovieDetail && currentMovieDetail.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="bg-yellow-500 flex justify-center items-center py-3 px-8 rounded-2xl text-black font-bold">
                IMDb<i className="ml-5 fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div>
      <div className="text-4xl">Production companies</div>
      <div className="w-10/12 flex center items-end mb-16 bg-slate-50 text-black">
        {currentMovieDetail &&
          currentMovieDetail.production_companies &&
          currentMovieDetail.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="flex flex-col items-center justify-center">
                  <img
                    className="w-52 m-8"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default MovieDetail;
