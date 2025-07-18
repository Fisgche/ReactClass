import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movies.services";

export function useMovies(){
    const [movies, setMovies] = useState([]);
    
      useEffect(() => {
        getPopularMovies().then(({data}) =>{
          setMovies(data.results)
      })
    }, []);
    return movies;  
}

export function useMovie(movieId){
    const [movie, setMovie] = useState([]);
    
      useEffect((movieId) => {
        getPopularMovies().then(({data}) =>{
            setMovie(data)
      })
    }, [movieId]);
    return movie;  
}