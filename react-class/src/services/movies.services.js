import { moviesApis } from "../config/http";

export function getPopularMovies (){
    return moviesApis.get("movie/popular");
}

export function getMovie(movieId){
    console.log(`Teste:${movieId}`);
    return moviesApis.get(`movie/${movieId}`);
}