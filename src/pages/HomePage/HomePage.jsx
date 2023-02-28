import { fetchTrendingMovies } from "getApi/getApi";
import { useState,useEffect } from "react";
import { Title} from "./HomePage.styled";
import { useLocation } from 'react-router-dom';
import { MovieList } from "components/MovieList/MovieList";



 const HomePage = () => {
    const [trendMov, setTrendMov] = useState([]);
    const location = useLocation()


    useEffect(() => {
        const fetchMovies = () => {
            fetchTrendingMovies().then(resp => setTrendMov(resp))
        }
        fetchMovies();
    },[])
    
    return (<>
        <Title>Trending today</Title>

        <MovieList arrayFilm={trendMov} to={'movies/'} location={{from:location}} />
    </>

)
}

export default HomePage;