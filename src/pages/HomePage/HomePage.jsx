import { fetchTrendingMovies } from "getApi/getApi";
import { useState,useEffect } from "react";
import { Title} from "./HomePage.styled";
import { Link, useLocation } from 'react-router-dom';



export const HomePage = () => {
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
          <ul>
            {trendMov.map(({ id, title }) => (<li key={id}><Link
                to={`movies/${id}`}
                state={{from:location}}
            ><h3>{title}</h3></Link></li>))}
        </ul>
    </>

)
}