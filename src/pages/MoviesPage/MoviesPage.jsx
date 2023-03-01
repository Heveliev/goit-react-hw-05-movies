import { fetchFilmByName } from "getApi/getApi";
import {  useLocation,useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form } from "../../components/Form/Form";
import { MovieList } from "components/MovieList/MovieList";


 const MoviesPage = () => {
   const [ search, setSearch] = useSearchParams();
  const [films, setFilms] = useState([]);
   const location = useLocation();
   const searchParam = search.get('query');

    useEffect(() => {
        if (!searchParam) {
            return
        }


        fetchFilmByName(searchParam).then(resp=>setFilms(resp))
    }, [searchParam])
    
   const handleSubmitForm = val => {

     setSearch({ 'query': val });
   }


    return (<>
      <Form onSubmit={handleSubmitForm} />
        {films.length ? <MovieList arrayFilm={films}  location={{ from: location }} />
            : <p>Pls try value in input</p>}
        
    </>
    )
}

export default MoviesPage

