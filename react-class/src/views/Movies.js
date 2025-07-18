import { MovieItem } from "../components/movieItem/MovieItem";
import { useMovies } from "../hooks/useMovies";
import styles from "./Movies.module.css";

export function Movies() {
  const movies = useMovies();
  return (
    <section className={styles.movies}>
      <h1>Popular Movies</h1>

      <div className={styles.moviesList}>
        {movies.map((movie)=><MovieItem key={movie.id} movie={movie}></MovieItem>)}
      </div>

    </section>
  );
}