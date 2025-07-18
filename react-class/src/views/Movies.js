import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movies.services";

export function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then(({data}) =>{
      setMovies(data.results)
  })
}, [])
  return (
    <section>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie)=><li>{movie.title}</li>)}
      </ul>
    </section>
  );
}