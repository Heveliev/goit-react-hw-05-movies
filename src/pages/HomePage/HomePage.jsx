import { fetchTrendingMovies } from "getApi/getApi";
import { useState,useEffect } from "react";
import { Title} from "./HomePage.styled";

import { MovieList } from "components/MovieList/MovieList";



 const HomePage = () => {
    const [trendMov, setTrendMov] = useState([]);



    useEffect(() => {
        const fetchMovies = () => {
            fetchTrendingMovies().then(resp => setTrendMov(resp))
        }
        fetchMovies();
    },[])
    
    return (<>
        <Title>Trending today</Title>

        <MovieList arrayFilm={trendMov} to={'movies/'} />
    </>

)
}

export default HomePage;