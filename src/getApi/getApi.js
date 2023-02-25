import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c939ec4794622751dcf7fba01c4a07e9';
axios.defaults.baseURL = BASE_URL;

const fetchTrendingMovies = async() => {
    try {
        const trendMovies = await axios(`trending/movie/day?api_key=${API_KEY}`);
        return trendMovies.data.results;
    } catch (error) {
        throw new Error(error)
    }
}



async function fetchFilmByName(query){
    try {
        const nameMov = await axios(`search/movie?api_key=${API_KEY}&query=${query}&page=1`);
        return nameMov.data.results;
    } catch (error) {
        
    }
}


async function fetchMovieDetails(id) {
    try {
        const movDet = await axios(`movie/${id}?api_key=${API_KEY}`);
        return movDet.data;
    } catch (error) {
        throw new Error(error)
    }
}


async function fetchCast(id) {
    try {
        const movCast = await axios(`movie/${id}/credits?api_key=${API_KEY}`);
        return movCast.data
    } catch (error) {
        throw new Error(error)
    }
}


export {fetchTrendingMovies, fetchFilmByName, fetchMovieDetails,fetchCast}