import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


export const MovieList = ({ arrayFilm, to = ''}) => {
    const location = useLocation();
    return (  <ul>
            {arrayFilm.map(({ id, title }) => (<li key={id}><Link
                to={`${to}${id}`}
                state={{from:location} }
            ><h3>{title}</h3></Link></li>))}
        </ul>)
}