import { moviesApis } from "../config/http";

export function getPopularMovies (){
    return moviesApis.get("discover/movie");
}

export function getMovie(movieId){
    return moviesApis.get(`movies/${movieId}`);
}