import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTrendingMovies = createAsyncThunk('movies/fetchTrending', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(`/trending/movie/day`);
    console.log(data.results);
    return data.results;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchMovieById = createAsyncThunk('movies/fetchById', async (id, thunkAPI) => {
  try {
    const { data } = await axios.get(`/movie/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchMoviesByQuery = createAsyncThunk(
  'search/fetchByQuery',
  async (query, thunkAPI) => {
    try {
      const { data } = await axios.get(`/search/movie?query=${query}`);
      console.log(data.results);
      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
