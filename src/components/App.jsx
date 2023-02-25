import { Route, Routes } from "react-router-dom";
import { Container } from "./Container/Container";
import { HomePage } from "./HomePage/HomePage";
import { Header } from "./Header/Header";
import { MovieDetails } from "./MovieDetails/MovieDetails";

import { MoviesPage } from "./MoviesPage/MoviesPage";


export const App = () => {

  return (
    <>
      <Container>
      <Routes>
    <Route path='/' element={<Header />} >
        <Route index element={<HomePage />} />
          <Route path='movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetails/>}>
             {/* <Route path='cast' element={<Cast />} /> */}
                {/* <Route path='r' element={<R />} /> */}
             </Route>
              </Route>
        </Routes>
        </Container>
    </>
  );
};
