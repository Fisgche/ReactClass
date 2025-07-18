import { Link } from 'react-router-dom';
import styles from './MovieItem.module.css';

export function MovieItem({ movie }) {
    return (
        <div className={styles.movie}>
            <img src = {`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt=""></img>
            <h3>{movie.title}</h3>
            <p>
                <Link className={styles.detailBtn} to={`/movies/${movie.id}`}>Details</Link>
            </p>
        </div>
    )
}