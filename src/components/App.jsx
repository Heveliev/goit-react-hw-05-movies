import { lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import { Container } from './Container/Container';
import { Header } from './Header/Header';

const HomePage= lazy(() => import("../pages/HomePage/HomePage"));
const MovieDetails= lazy(() => import("./MovieDetails/MovieDetails"));
const Cast= lazy(() => import("./Cast/Cast"));
const MoviesPage= lazy(() => import("../pages/MoviesPage/MoviesPage"));
const Reviews= lazy(() => import("./Reviews/Reviews"));



export const App = () => {

  return (
    <>
      <Container>
      <Routes>

          <Route  path='/' element={<Header />} >
            
        <Route index element={<HomePage />} />
          <Route path='movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetails/>}>
             <Route path='cast' element={<Cast />} />
                <Route path='reviews' element={<Reviews />} />
              </Route>
              
            </Route>

        </Routes>

        </Container>
    </>
  );
};
