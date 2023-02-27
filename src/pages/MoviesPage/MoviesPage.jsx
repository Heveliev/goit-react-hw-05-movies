import { fetchFilmByName } from "getApi/getApi";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form } from "../../components/Form/Form";

  // "homepage": "https://Heveliev.github.io/goit-react-hw-05-movies",

 const MoviesPage = () => {

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
     setQuery(val);
 }

    return (<>
      <Form onSubmit={handleSubmitForm} />
      {films.length ? <ul>
            {films.map(({ id, title }) => (<li key={id}><Link
                to={`${id}`}
                state={{from:location}}
            ><h3>{title}</h3></Link></li>))}
        </ul> : <p>Pls try value in input</p>}
        
    </>
    )
}

export default MoviesPage