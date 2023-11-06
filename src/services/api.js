import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
export const basePosterUrl = 'https://image.tmdb.org/t/p/w500';

const API_KEY = '9ce8efc3ff8d8ed00ad4e59e8fd58805';
axios.defaults.params = { api_key: API_KEY };

export const trendingMoviesUrl = '/trending/movie/day';