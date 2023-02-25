import { Route, Routes } from "react-router-dom";
import { Container } from "./Container/Container";
import { HomePage } from "./HomePage/HomePage";
import { Header } from "./Header/Header";
import { MovieDetails } from "./MovieDetails/MovieDetails";

import { MoviesPage } from "./MoviesPage/MoviesPage";


export const App = () => {

  return (
    <>
      <Header />
      <Container>
      <Routes>
        <Route path='/' element={<HomePage />} />
          <Route path='movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetails/>}/>
        </Routes>
        </Container>
    </>
  );
};
