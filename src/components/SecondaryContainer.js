import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies &&(
      <div className=" bg-black">
      <div className="-mt-72 relative z-20 pl-20">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      </div>
      {/* 

          MovieList - Popular
            MovieCard * n
          MovieList - Now Playing 
          MovieList - Trending
          MoiesList - Horror

      */}
    </div>
    )
    
  );
};

export default SecondaryContainer;
