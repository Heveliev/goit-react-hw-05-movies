import { Route, Routes } from "react-router-dom";
import { Container } from "./Container/Container";
import { HomePage } from "../pages/HomePage/HomePage";
import { Header } from "./Header/Header";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { MoviesPage } from "../pages/MoviesPage/MoviesPage";


export const App = () => {

  return (
    <>
      <Container>
      <Routes>
    <Route path='/' element={<Header />} >
        <Route index element={<HomePage />} />
          <Route path='movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetails/>}>
             <Route path='cast' element={<Cast />} />
                {/* <Route path='reviews' element={<Reviews />} /> */}
             </Route>
              </Route>
        </Routes>
        </Container>
    </>
  );
};
