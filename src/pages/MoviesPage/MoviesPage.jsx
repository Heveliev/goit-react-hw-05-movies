import { fetchFilmByName } from "getApi/getApi";
import {  useLocation,useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form } from "../../components/Form/Form";
import { MovieList } from "components/MovieList/MovieList";


 const MoviesPage = () => {
   const [ search, setSearch] = useSearchParams();
    const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
   const location = useLocation();
   

    useEffect(() => {
        if (!query) {
            return
        }


        fetchFilmByName(query).then(resp=>setFilms(resp))
    }, [query])
    
   const handleSubmitForm = val => {
     search.get('query')
     setSearch({ 'query': val });
  setQuery(val)
  
   
   }


    return (<>
      <Form onSubmit={handleSubmitForm} />
        {films.length ? <MovieList arrayFilm={films}  location={{ from: location }} />
            : <p>Pls try value in input</p>}
        
    </>
    )
}

export default MoviesPage

