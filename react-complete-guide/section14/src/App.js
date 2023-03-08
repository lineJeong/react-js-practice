import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/movies.json`
      );
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await res.json();

      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText,
        });
      }
      // const transformedMovies = data.results.map((movieData) => ({
      //   id: movieData.episode_id,
      //   title: movieData.title,
      //   releaseDate: movieData.release_data,
      //   openingText: movieData.opening_crawl,
      // }));
      setMovies(loadedMovies);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMovieHandler = async (movie) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/movies.json`,
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await res.json();

      const addedMovie = {
        id: data.name,
        ...movie,
      };
      setMovies((prevMovies) => [...prevMovies, addedMovie]);
    } catch (err) {
      setError(err.message);
    }
  };

  let content = <p>Found no movies.</p>;
  if (movies.length > 0) content = <MoviesList movies={movies} />;
  if (error) content = <p>{error}</p>;
  if (isLoading) content = <p>Loading...</p>;

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>} */}
      </section>
    </React.Fragment>
  );
}

export default App;
