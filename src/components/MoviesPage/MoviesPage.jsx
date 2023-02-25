import { fetchFilmByName } from "getApi/getApi";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Searchbar, SearchForm, SearchFormButton, ButtonLabel, Input } from "./MoviesPage.styled";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const MoviesPage = () => {
    const [value, setValue] = useState('');
    const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const location = useLocation();
    useEffect(() => {
        if (!query) {
            return
        }


        fetchFilmByName(query).then(resp=>setFilms(resp))
    }, [query])
    
     const handleInputChange = evt => {
  setValue( evt.currentTarget.value.toLowerCase())
    }
    
    const handleSubmit = evt => {
    evt.preventDefault();
    if (value.trim() === '') {
      Notify.info('Enter a value in the input field');
   return
    }

    setQuery(value)

   setValue('');
}

    return (<>
 <Searchbar >
            <SearchForm
                onSubmit={handleSubmit}
            >
    <SearchFormButton type="submit">
      <ButtonLabel>Search</ButtonLabel>
    </SearchFormButton>

    <Input
      type="text"
      autocomplete="off"
      autoFocus
      placeholder="Search films"
      value={value}
      onChange={handleInputChange}
    />
      </SearchForm>
      </Searchbar>
      {films.length ? <ul>
            {films.map(({ id, title }) => (<li key={id}><Link
                to={`${id}`}
                state={{from:location}}
            ><h3>{title}</h3></Link></li>))}
        </ul> : <p>Pls try value in input</p>}
        
    </>
    )
}