import React from 'react'
import axios from 'axios';

const API_KEY = "ba89e1547b733c27c979d4a84379a0ab";

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export default axiosInstance;

