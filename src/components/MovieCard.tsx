import React, { useEffect, useState } from "react";
import { MovieType } from "../models/MovieType";
import './MovieCard.css'

type MovieCardProps = {
    movie: MovieType;
}

const getPosterURL = (posterpath : any) =>{
    return `https://image.tmdb.org/t/p/w220_and_h330_face${posterpath}`
}

const MovieCard = ({movie} : MovieCardProps) => {
    const img = getPosterURL(movie.poster_path)
    return(
        <div className="movieCard">
            <h3>{movie.name}</h3>
            <a href="#"><img src={img} alt={movie.name}/></a>

        </div>
        )
}

export default MovieCard;