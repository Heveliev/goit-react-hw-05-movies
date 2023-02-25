import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { fetchCast } from "getApi/getApi";
import { Img,List } from "./Cast.styled";

 const Cast = () => {
    const { movieId } = useParams();
    const URL = 'https://image.tmdb.org/t/p/w500';
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchCast(movieId).then(res => setCast(res));


    }, [movieId]);

    return (
        <>
            
            {cast.length ? <List>{cast.map(act => (<li key={act.cast_id}>
                <Img src={act.profile_path ? `${URL}${act.profile_path}` :
                    'https://t4.ftcdn.net/jpg/04/70/29/97/240_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'} alt={act.character} />
                <h4>{act.original_name}</h4>
                <p>Character: <span>{act.character}</span></p></li>
            ))}</List> : <p>Sorry data is not found</p>}
            
        </>
    )
}

export default Cast