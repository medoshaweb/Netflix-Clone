import React, { useEffect, useState  } from 'react'
import { truncate } from '../../utils/truncate';
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import axios from '../../utils/axios';
// import requests from '../../utils/requests';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './banner.css';

const Banner = ({ fetchUrl }) => {
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        const results = request.data.results;
        if (results && results.length > 0) {
        
          setMovie(results[Math.floor(Math.random() * results.length)]);
         return; // Exit the function after setting a valid movie
      }
        
    } catch (error) {
      console.error("Error fetching banner data:", error);
    }
  }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie) => {
   
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      try {
        const url = await movieTrailer(movie?.name || movie?.title || movie?.original_name || movie?.original_title || "");
        if (url) {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  
  
  return (
    
<header
  className="banner"
  style={{
    backgroundImage: movie
      ? `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`
      : "linear-gradient(to right, #000000, #434343)", // Fallback gradient if movie is null
    minHeight: "448px",
  }}
>
      <div className="banner-contents">
        <h5 className="banner-subtitle">N SERIES</h5>
        <h1 className="banner-title">
          {movie?.name || movie?.title || movie?.original_name || movie?.original_title || "No Title Available"}
          <br />
        </h1>

        <div className="banner-buttons">
          <button className="btn btn-play" onClick={() => handleClick(movie)}>▶ Play</button>
          <button className="btn btn-info">ⓘ More Info</button>
        </div>
        <h5 className="banner-description">
          {truncate(movie?.overview, 150) || "No description available"}
        </h5>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={{ height: "390", width: "100%", playerVars: { autoplay: 1 } }} />}

      <div className="banner-rating">
        <VolumeUpIcon />
        <span>TV-MA</span>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner

