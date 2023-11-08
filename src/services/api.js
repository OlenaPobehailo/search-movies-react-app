import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
export const basePosterUrl = 'https://image.tmdb.org/t/p/w500';

const API_KEY = '9ce8efc3ff8d8ed00ad4e59e8fd58805';
axios.defaults.params = { api_key: API_KEY };

export const fetchTrendingMovies = async params => {
  const { data } = await axios.get(`/trending/movie/day`, {
    params: { ...params },
  });
  // console.log(data.results);
  return data.results;
};

export const fetchMovieById = async id => {
  const { data } = await axios.get(`/movie/${id}`);
  // console.log(data);
  return data;
};

export const fetchCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`);
  // console.log(data.cast);
  return data.cast;
};

export const fetchReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  // console.log(data.results);
  return data.results;
};
