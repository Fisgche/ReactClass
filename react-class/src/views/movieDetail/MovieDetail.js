import { useParams } from "react-router-dom";
import { useMovie } from "../../hooks/useMovies";
import style from "./MovieDetail.module.css";

export function MovieDetail(){
    const {id} = useParams();

    const movie = useMovie(id);



    return(
        <section className={style.movie}>
            <figure className={style.imgContainer}>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                </figure>
            
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
            <p>Popularity: {movie.popularity}</p>
        </section>
    )
}