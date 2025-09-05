import React, { useEffect, useState  } from 'react'
import { truncate } from '../../utils/truncate';
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import './banner.css';

const Banner = () => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
      );
    }
    fetchData();
  }, []);
  return (
    <header className="banner">
<header
  className="banner"
  style={{
    backgroundImage: movie
      ? `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`
      : "none",
  }}
></header>
      <div className="banner-contents">
        <h5 className="banner-subtitle">N SERIES</h5>
        <h1 className="banner-title">
          {movie?.name || movie?.title || movie?.original_name}
          <br />
        </h1>

        <div className="banner-buttons">
          <button className="btn btn-play">▶ Play</button>
          <button className="btn btn-info">ⓘ More Info</button>
        </div>
        <h1 className="banner-description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner-rating">
        <VolumeUpIcon />
        <span>TV-MA</span>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner

