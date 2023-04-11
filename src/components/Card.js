import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { Link } from "react-router-dom";

const Cards = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link to={`/movie/${movie.id}`} className="decoration text-white">
          <div className="inline-block relative rounded-[10px] cursor-pointer m-[0.19rem] min-w-[200px] h-80 z-0 hover:hoverAntimate">
            <img
              className="h-80 rounded-md border-[1px] border-gray-400 "
              src={`https://image.tmdb.org/t/p/original${
                movie.poster_path?.length
                  ? movie.poster_path
                  : "/oxjlOFFgicnLWZzxoG8k340b8jR.jpg"
              }`}
              alt="posterImage"
            />
            <div className="absolute bottom-0 w-full pt-0 pb-4 px-4 h-[290px] flex flex-col justify-end opacity-0 transtion linearBgc hover:opacity-100">
              <div className="text-sm mb-2 font-black">
                {movie ? movie.original_title : ""}
              </div>
              <div className="text-[0.75rem] mb-1">
                {movie ? movie.release_date : ""}
                <span className="float-right">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="italic text-xs mb-1">
                {movie ? movie.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Cards;
