import { fetchMovieDetails } from "getApi/getApi";
import { useEffect, useState } from "react";
import { useParams, useLocation,NavLink, Route } from "react-router-dom";
import { LinkButton, Image, Box } from "./MovieDetails.styled";
import { Cast } from "components/Cast/Cast";


export const MovieDetails = () => {
      const URL = 'https://image.tmdb.org/t/p/w500';
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
console.log(location)
    useEffect(() => {
 fetchMovieDetails(movieId)
            .then(resp => setMovie(resp))

    }, [movieId])
    const backHref = location.state?.from ?? '/';

    return (<>
    
        <LinkButton to={backHref}>Go back</LinkButton>
        {movie && (<Box>
            <Image src={`${URL}${movie.poster_path}`} alt={movie.original_title} />
            <div >
                <h2>{movie.original_title}({movie.release_date.slice(0,4)})</h2>
                <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
                <p>{movie.genres.map(genre => genre.name).join(',')}</p>
            </div>
            <h4>Additional information</h4>
            <ul>
                <li><NavLink to={`${location.pathname}/cast`}>Cast</NavLink></li>
                <li><NavLink to={`${location.pathname}/reviews`}>Reviews</NavLink></li>
            </ul>
        </Box>)}
    
        
        {/* <Route path={`${location.pathname}/:cast`}>
            {movie && <Cast/>}
        </Route> */}
        {/* <Route path={`${location.pathname}/:reviews`}>
            {}
        </Route> */}
    </>
    )
}