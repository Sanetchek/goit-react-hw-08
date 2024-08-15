import axios from "axios";
import {
  createAsyncThunk
} from '@reduxjs/toolkit'

axios.defaults.baseURL = "https://connections-api.goit.global";

export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.get('/users/signup', newUser);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
)

export const login = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const response = await axios.get('/users/login', user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
)

export const logout = createAsyncThunk(
  'auth/logout',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get('/users/logout', token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
)

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get('/users//users/current', token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
)