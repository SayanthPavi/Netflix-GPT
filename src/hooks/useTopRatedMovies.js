import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    console.log("data is ", json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;