import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("moviesList", movies);

  return (
    <div className="px-6">
      <h1 className="text-4xl py-4 font-semibold text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;