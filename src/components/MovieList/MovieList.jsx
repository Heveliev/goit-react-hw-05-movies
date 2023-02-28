import { Link } from "react-router-dom";

export const MovieList = ({arrayFilm, to = '',location}) => {
    return (  <ul>
            {arrayFilm.map(({ id, title }) => (<li key={id}><Link
                to={`${to}${id}`}
                state={location}
            ><h3>{title}</h3></Link></li>))}
        </ul>)
}